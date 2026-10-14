"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { publications, achievements } from "@/lib/data";
import { SectionHeading } from "./Experience";

export default function Research() {
  return (
    <section id="research" className="relative py-28 md:py-36">
      <div className="section-shell grid lg:grid-cols-2 gap-14">
        <div>
          <div className="flex items-center justify-between gap-4 mb-2">
            <SectionHeading kicker="Publication" title="Research" />
            <Link
              href="/research"
              className="text-xs text-teal-soft hover:underline font-semibold"
            >
              Full Details →
            </Link>
          </div>

          <div className="mt-10 space-y-6">
            {publications.map((pub, i) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="rounded-3xl border border-white/10 p-6 md:p-8 bg-white/[0.01] hover:border-teal/40 transition-all"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-[11px] font-semibold uppercase px-2.5 py-0.5 rounded-full bg-teal/15 text-teal-soft border border-teal/30">
                    {pub.status}
                  </span>
                  <span className="text-xs text-violet-soft">{pub.venue}</span>
                </div>

                <a
                  href={pub.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <h3 className="font-display text-xl text-starlight font-bold group-hover:text-teal-soft transition-colors leading-snug">
                    {pub.title} ↗
                  </h3>
                </a>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {pub.metrics.map((m) => (
                    <span
                      key={m}
                      className="text-[11px] font-mono font-medium text-teal-soft bg-teal/10 border border-teal/20 px-2.5 py-0.5 rounded-md"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-xs md:text-sm text-starlight/80 leading-relaxed">
                  {pub.detail}
                </p>

                {pub.driveLink && (
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <a
                      href={pub.driveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal to-violet px-4 py-2 text-xs font-semibold text-void hover:opacity-90 transition-opacity"
                    >
                      <span>View LocalMark Manuscript PDF ↗</span>
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between gap-4 mb-2">
            <SectionHeading kicker="Recognition" title="Achievements" />
            <Link
              href="/research"
              className="text-xs text-teal-soft hover:underline font-semibold"
            >
              All Honors →
            </Link>
          </div>

          <ul className="mt-10 space-y-5">
            {achievements.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="flex gap-4 border-t border-white/10 pt-5"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-rose-soft" />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-display text-base font-bold text-starlight">
                      {item.title}
                    </h4>
                    <span className="text-[10px] uppercase font-semibold text-rose-soft bg-rose/10 px-2 py-0.5 rounded-full border border-rose/20">
                      {item.badge}
                    </span>
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs md:text-sm text-starlight/85 leading-relaxed hover:text-teal-soft transition-colors block"
                  >
                    {item.text} ↗
                  </a>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
