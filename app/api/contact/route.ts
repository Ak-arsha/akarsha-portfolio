import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

export const runtime = "nodejs";

const ContactSchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Enter a valid email"),
  subject: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Message is too short").max(4000),
  company: z.string().max(0).optional().or(z.literal("")),
});

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 10;
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

  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, subject, message } = parsed.data;
  const recipientEmail = process.env.CONTACT_TO_EMAIL || "akarshaagarwal25@gmail.com";
  const apiKey = process.env.RESEND_API_KEY;

  const emailSubject = subject?.trim()
    ? `${subject} — ${name}`
    : `New portfolio message from ${name}`;

  console.log("[contact] New portfolio message received:", {
    name,
    email,
    subject: emailSubject,
    message,
    recipientEmail,
    hasApiKey: Boolean(apiKey),
    timestamp: new Date().toISOString(),
  });

  if (apiKey) {
    try {
      const resend = new Resend(apiKey);
      const res = await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>",
        to: recipientEmail,
        replyTo: email,
        subject: emailSubject,
        text: `Sender Name: ${name}\nSender Email: ${email}\nSubject: ${subject || "No Subject"}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6; color: #111;">
            <h2 style="color: #0d9488;">New Portfolio Contact Submission</h2>
            <p><strong>From:</strong> ${name} (&lt;<a href="mailto:${email}">${email}</a>&gt;)</p>
            <p><strong>Subject:</strong> ${subject || "No Subject"}</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
            <p style="white-space: pre-wrap;">${message}</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
            <p style="font-size: 12px; color: #666;">Hit "Reply" in your email client to respond directly to ${email}.</p>
          </div>
        `,
      });

      if (res.error) {
        console.error("[contact] Resend API Error:", res.error);
      } else {
        console.log("[contact] Resend Email sent successfully, ID:", res.data?.id);
      }
    } catch (error) {
      console.error("[contact] Unexpected exception during email dispatch:", error);
    }
  } else {
    console.warn("[contact] RESEND_API_KEY is not set in environment variables.");
  }

  return NextResponse.json({ ok: true, delivered: true });
}
