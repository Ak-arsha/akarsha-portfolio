"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [note, setNote] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    setNote("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const json = await res.json();

      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "Failed to send message via API.");
      }

      if (json.delivered === false) {
        setNote(json.note ?? "Message recorded!");
      }
      setStatus("sent");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message ?? "Something went wrong sending your message.");
    }
  }

  const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Portfolio Message from ${name || "Visitor"}`
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  )}`;

  return (
    <section id="contact" className="relative py-28 md:py-40">
      <div className="section-shell grid lg:grid-cols-[1fr_1.1fr] gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl text-starlight text-balance">
            Let&apos;s build something that works while it looks good.
          </h2>
          <p className="mt-5 text-starlight/70 leading-relaxed max-w-md">
            Open to research collaborations, internships, and full-stack or ML engineering roles.
          </p>

          <div className="mt-10 space-y-3 text-sm">
            <a href={`mailto:${profile.email}`} className="block text-starlight hover:text-teal-soft transition-colors">
              ✉ {profile.email}
            </a>
            <a href={`tel:${profile.phone}`} className="block text-starlight/70 hover:text-teal-soft transition-colors">
              📞 {profile.phone}
            </a>
            <div className="flex gap-5 pt-3">
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-mist hover:text-teal-soft transition-colors">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-mist hover:text-teal-soft transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label htmlFor="name" className="text-sm text-mist">
              Your name
            </label>
            <input
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              minLength={2}
              className="mt-2 w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-starlight placeholder:text-mist/50 outline-none focus:border-teal/60 transition-colors"
              placeholder="Ada Lovelace"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm text-mist">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-starlight placeholder:text-mist/50 outline-none focus:border-teal/60 transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm text-mist">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              minLength={10}
              rows={5}
              className="mt-2 w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-starlight placeholder:text-mist/50 outline-none focus:border-teal/60 transition-colors resize-none"
              placeholder="What are you working on?"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-xl bg-gradient-to-r from-teal to-violet px-5 py-3 font-display text-void font-medium disabled:opacity-60 transition-opacity hover:opacity-90"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          {status === "sent" && (
            <div className="space-y-2 rounded-xl bg-teal/10 border border-teal/20 p-4 text-sm text-teal-soft">
              <p>✔ Message received! Thank you for reaching out.</p>
              {note && <p className="text-xs text-starlight/70">{note}</p>}
              <a
                href={mailtoUrl}
                className="inline-block mt-2 text-xs underline hover:text-white transition-colors"
              >
                Click here to also send a copy directly via your email app →
              </a>
            </div>
          )}

          {status === "error" && (
            <div className="space-y-2 rounded-xl bg-rose-950/40 border border-rose-500/30 p-4 text-sm text-rose-soft">
              <p>{errorMsg}</p>
              <a
                href={mailtoUrl}
                className="inline-block mt-2 rounded-lg bg-white/10 px-3 py-1.5 text-xs text-starlight hover:bg-white/20 transition-colors"
              >
                Send directly via Email App ✉ →
              </a>
            </div>
          )}
        </motion.form>
      </div>

      <div className="section-shell mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-mist/70">
        <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js, Three.js, and a night sky.</p>
        <p>Deployed on Vercel</p>
      </div>
    </section>
  );
}
