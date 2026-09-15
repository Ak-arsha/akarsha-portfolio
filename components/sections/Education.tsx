"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";
import { SectionHeading } from "./Experience";

export default function Education() {
  return (
    <section id="education" className="relative py-28 md:py-36">
      <div className="section-shell">
        <SectionHeading kicker="2021 — 2027" title="Education" />

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 p-6 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-teal/40 transition-all"
            >
              <p className="text-sm text-teal-soft">{item.years}</p>
              <h3 className="mt-2 font-display text-lg text-starlight leading-snug">
                {item.degree}
              </h3>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="block mt-1 text-sm text-mist hover:text-teal-soft transition-colors"
              >
                {item.institute} ↗
              </a>
              <p className="mt-4 text-sm font-medium text-violet-soft">{item.score}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
