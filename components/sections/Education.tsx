"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { education } from "@/lib/data";
import { SectionHeading } from "./Experience";

export default function Education() {
  return (
    <section id="education" className="relative py-28 md:py-36">
      <div className="section-shell">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <SectionHeading kicker="2021 — 2027" title="Education" />
          <Link
            href="/education"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-soft hover:underline"
          >
            <span>Full Academic Breakdown & Coursework →</span>
          </Link>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {education.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="flex flex-col justify-between rounded-3xl border border-white/10 p-6 md:p-8 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-teal/40 transition-all"
            >
              <div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-teal/15 text-teal-soft border border-teal/30">
                  {item.years}
                </span>
                <h3 className="mt-4 font-display text-xl text-starlight font-bold leading-snug">
                  {item.degree}
                </h3>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-2 text-sm text-mist hover:text-teal-soft transition-colors"
                >
                  {item.institute} ↗
                </a>
                <p className="mt-3 text-xs text-starlight/75 line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-mist block">Score</span>
                  <span className="font-display text-lg font-bold text-violet-soft">
                    {item.score}
                  </span>
                </div>
                <Link
                  href="/education"
                  className="text-xs text-teal-soft hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dedicated Page Link Banner */}
        <div className="mt-10 text-center">
          <Link
            href="/education"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.03] px-6 py-3 font-display text-sm font-semibold text-starlight hover:border-teal/50 hover:text-teal-soft transition-all"
          >
            <span>Open Dedicated Education Page (Coursework, Lab Grades & Certifications) →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
