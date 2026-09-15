"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end pb-20 pt-40">
      <div className="section-shell w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-teal/40 bg-teal/10 px-3 py-1 text-xs font-medium text-teal-soft">
            <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
            {profile.status}
          </span>
          <span className="font-display text-sm text-mist/80">
            {profile.location}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-semibold text-balance leading-[0.98] text-[13vw] md:text-[6.4rem] lg:text-[7.2rem] text-starlight"
        >
          Akarsha
          <br />
          Agarwal
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 max-w-2xl grid gap-6 md:grid-cols-[auto_1fr] md:items-start"
        >
          <div className="hidden md:block h-full w-px bg-gradient-to-b from-teal via-violet to-transparent mt-1" />
          <div>
            <p className="text-lg md:text-xl text-starlight/90 leading-relaxed font-normal">
              {profile.intro}
            </p>
            <p className="mt-4 text-sm text-teal-soft font-medium">{profile.role}</p>

            {/* Quick Profile Links */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/[0.03] px-3.5 py-1.5 text-starlight hover:border-teal/60 hover:text-teal-soft transition-all"
              >
                GitHub ↗
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/[0.03] px-3.5 py-1.5 text-starlight hover:border-teal/60 hover:text-teal-soft transition-all"
              >
                LinkedIn ↗
              </a>
              <a
                href={profile.codeforces}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/[0.03] px-3.5 py-1.5 text-starlight hover:border-teal/60 hover:text-teal-soft transition-all"
              >
                Codeforces (1388) ↗
              </a>
              <a
                href={profile.leetcode}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/[0.03] px-3.5 py-1.5 text-starlight hover:border-teal/60 hover:text-teal-soft transition-all"
              >
                LeetCode (300+) ↗
              </a>
              <a
                href={profile.tuf}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/[0.03] px-3.5 py-1.5 text-starlight hover:border-teal/60 hover:text-teal-soft transition-all"
              >
                TUF+ (360+) ↗
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 right-6 md:right-10 text-xs text-mist/70 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
        move your cursor, then click
      </div>
    </section>
  );
}
