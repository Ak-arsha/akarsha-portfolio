"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="work" className="relative py-28 md:py-36">
      <div className="section-shell">
        <SectionHeading kicker="2026" title="Experience" />

        <div className="mt-14 space-y-14">
          {experience.map((job, i) => (
            <motion.div
              key={job.org}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="grid md:grid-cols-[220px_1fr] gap-4 md:gap-10 border-t border-white/10 pt-8"
            >
              <div>
                <p className="text-sm text-teal-soft">{job.period}</p>
                <h3 className="mt-1 font-display text-xl text-starlight">{job.role}</h3>
                <a
                  href={job.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-0.5 text-sm text-mist hover:text-teal-soft transition-colors"
                >
                  {job.org} ↗
                </a>
              </div>
              <ul className="space-y-3">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-starlight/85 leading-relaxed">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-soft" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <h2 className="font-display text-3xl md:text-4xl text-starlight">{title}</h2>
      <span className="text-sm text-mist">{kicker}</span>
    </div>
  );
}
