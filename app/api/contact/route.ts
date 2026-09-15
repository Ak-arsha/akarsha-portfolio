import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

export const runtime = "nodejs";

const ContactSchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Enter a valid email"),
  message: z.string().trim().min(10, "Message is too short").max(4000),
  // honeypot field: real users never fill this in
  company: z.string().max(0).optional().or(z.literal("")),
});

// Simple in-memory rate limiter. Resets on cold start, which is fine for a
// portfolio's traffic volume. Swap for Upstash/Vercel KV for a durable limit.
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const timestamps = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  hits.set(ip, timestamps);
  return timestamps.length > MAX_REQUESTS;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many messages sent recently. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0];
    return NextResponse.json(
      { ok: false, error: firstIssue?.message ?? "Invalid input." },
      { status: 422 }
    );
  }

  // honeypot tripped -> silently report success to confuse bots
  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, message } = parsed.data;
  const to = process.env.CONTACT_TO_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey || !to) {
    // No email provider configured yet — log server-side so the message
    // isn't lost, and tell the caller clearly what's missing.
    console.log("[contact] new message (email delivery not configured):", {
      name,
      email,
      message,
    });
    return NextResponse.json(
      {
        ok: true,
        delivered: false,
        note: "Message received. Email delivery is not configured on this deployment yet.",
      },
      { status: 200 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "The message could not be delivered right now." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (error) {
    console.error("[contact] unexpected error:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong sending your message." },
      { status: 500 }
    );
  }
}
