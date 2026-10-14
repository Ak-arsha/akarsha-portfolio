"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="work" className="relative py-28 md:py-36">
      <div className="section-shell">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <SectionHeading kicker="2026" title="Experience" />
          <Link
            href="/experience"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-soft hover:underline"
          >
            <span>Full Internship & Work Experience Breakdown →</span>
          </Link>
        </div>

        <div className="mt-14 space-y-14">
          {experience.map((job, i) => (
            <motion.div
              key={job.org}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="grid md:grid-cols-[260px_1fr] gap-6 md:gap-10 border-t border-white/10 pt-8"
            >
              <div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-teal/15 text-teal-soft border border-teal/30">
                  {job.period}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-starlight">{job.role}</h3>
                <a
                  href={job.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-1 text-sm text-mist hover:text-teal-soft transition-colors"
                >
                  {job.org} ↗
                </a>

                {job.driveLink && (
                  <div className="mt-4">
                    <a
                      href={job.driveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl border border-teal/40 bg-teal/10 px-3.5 py-1.5 text-xs font-semibold text-teal-soft hover:bg-teal/20 transition-all"
                    >
                      <span>View Verified Certificate ↗</span>
                    </a>
                  </div>
                )}
              </div>

              <div>
                <ul className="space-y-3">
                  {job.points.map((point, idx) => (
                    <li key={idx} className="flex gap-3 text-sm md:text-base text-starlight/85 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-soft" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 text-xs text-mist"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
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
      <h2 className="font-display text-3xl md:text-4xl text-starlight font-bold">{title}</h2>
      <span className="text-sm text-mist">{kicker}</span>
    </div>
  );
}
