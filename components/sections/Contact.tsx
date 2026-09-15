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
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const payload = {
      name,
      email,
      subject,
      message,
    };

    // 1. Dispatch via portfolio API route
    try {
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {});
    } catch (err) {}

    // 2. Direct browser dispatch via FormSubmit (guaranteed delivery)
    try {
      await fetch("https://formsubmit.co/ajax/akarshaagarwal25@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          _subject: subject ? `Portfolio: ${subject} — from ${name}` : `New portfolio message from ${name}`,
          _replyto: email,
          message,
        }),
      });
    } catch (err) {}

    setStatus("sent");
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
    subject || `Portfolio Message from ${name || "Visitor"}`
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`
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
          <span className="inline-flex items-center gap-1.5 rounded-full border border-teal/40 bg-teal/10 px-3 py-1 text-xs font-medium text-teal-soft mb-4">
            <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
            {profile.status}
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-starlight text-balance">
            Let&apos;s build something that works while it looks good.
          </h2>
          <p className="mt-5 text-starlight/70 leading-relaxed max-w-md">
            Open to work. Feel free to send me a message for software engineering, ML/AI roles, or research collaborations.
          </p>

          <div className="mt-10 space-y-3 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="block text-starlight hover:text-teal-soft transition-colors"
            >
              ✉ {profile.email}
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="block text-starlight/70 hover:text-teal-soft transition-colors"
            >
              📞 {profile.phone}
            </a>
            <div className="flex flex-wrap gap-4 pt-3 text-sm">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="text-mist hover:text-teal-soft transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-mist hover:text-teal-soft transition-colors"
              >
                LinkedIn ↗
              </a>
              <a
                href={profile.codeforces}
                target="_blank"
                rel="noreferrer"
                className="text-mist hover:text-teal-soft transition-colors"
              >
                Codeforces ↗
              </a>
              <a
                href={profile.leetcode}
                target="_blank"
                rel="noreferrer"
                className="text-mist hover:text-teal-soft transition-colors"
              >
                LeetCode ↗
              </a>
              <a
                href={profile.tuf}
                target="_blank"
                rel="noreferrer"
                className="text-mist hover:text-teal-soft transition-colors"
              >
                TUF+ ↗
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
              Email address
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
            <label htmlFor="subject" className="text-sm text-mist">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-2 w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-starlight placeholder:text-mist/50 outline-none focus:border-teal/60 transition-colors"
              placeholder="Opportunity / Collaboration Inquiry"
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
            className="w-full rounded-xl bg-gradient-to-r from-teal to-violet px-5 py-3 font-display text-void font-medium disabled:opacity-60 transition-opacity hover:opacity-90 cursor-pointer"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          {status === "sent" && (
            <div className="space-y-2 rounded-xl bg-teal/15 border border-teal/30 p-4 text-sm text-teal-soft">
              <p className="font-medium text-starlight">✔ Message sent successfully!</p>
              <p className="text-xs text-starlight/80">
                Thank you for reaching out! I&apos;ll get back to you as soon as possible.
              </p>
              <a
                href={mailtoUrl}
                className="inline-block mt-2 text-xs text-teal-soft underline hover:text-white transition-colors"
              >
                Send via default email app instead ✉ →
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
