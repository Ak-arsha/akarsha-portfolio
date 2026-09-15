"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end pb-20 pt-40">
      <div className="section-shell w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-sm text-teal-soft mb-6"
        >
          {profile.location} · open to research & engineering roles
        </motion.p>

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
            <p className="text-lg md:text-xl text-starlight/90 leading-relaxed">
              {profile.tagline}
            </p>
            <p className="mt-4 text-sm text-mist">{profile.role}</p>
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
