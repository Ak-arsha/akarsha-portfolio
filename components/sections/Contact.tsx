"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          company: data.get("company") ?? "",
        }),
      });

      const json = await res.json();

      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "Something went wrong.");
      }

      setStatus("sent");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message ?? "Something went wrong.");
    }
  }

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
              {profile.email}
            </a>
            <a href={`tel:${profile.phone}`} className="block text-starlight/70 hover:text-teal-soft transition-colors">
              {profile.phone}
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
          {/* honeypot — hidden from real visitors */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div>
            <label htmlFor="name" className="text-sm text-mist">
              Your name
            </label>
            <input
              id="name"
              name="name"
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
            className="w-full rounded-xl bg-gradient-to-r from-teal to-violet px-5 py-3 font-display text-void font-medium disabled:opacity-60 transition-opacity"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          {status === "sent" && (
            <p className="text-sm text-teal-soft">Message sent. I&apos;ll reply soon.</p>
          )}
          {status === "error" && <p className="text-sm text-rose-soft">{errorMsg}</p>}
        </motion.form>
      </div>

      <div className="section-shell mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-mist/70">
        <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js, Three.js, and a night sky.</p>
        <p>Deployed on Vercel</p>
      </div>
    </section>
  );
}
