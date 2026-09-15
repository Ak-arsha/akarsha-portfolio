"use client";

import { motion } from "framer-motion";
import { publications, achievements } from "@/lib/data";
import { SectionHeading } from "./Experience";

export default function Research() {
  return (
    <section id="research" className="relative py-28 md:py-36">
      <div className="section-shell grid md:grid-cols-2 gap-14">
        <div>
          <SectionHeading kicker="publication" title="Research" />
          <div className="mt-10 space-y-6">
            {publications.map((pub, i) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 p-6 bg-white/[0.01] hover:border-teal/40 transition-all"
              >
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <h3 className="font-display text-lg text-starlight group-hover:text-teal-soft transition-colors leading-snug">
                    {pub.title} ↗
                  </h3>
                  <p className="mt-2 text-sm text-teal-soft">{pub.venue}</p>
                </a>
                <p className="mt-3 text-sm text-starlight/80 leading-relaxed">{pub.detail}</p>

                {pub.driveLink && (
                  <div className="mt-4 pt-3 border-t border-white/10">
                    <a
                      href={pub.driveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-teal/40 bg-teal/10 px-3 py-1 text-xs font-medium text-teal-soft hover:bg-teal/20 transition-all"
                    >
                      <span>📄 View Research Paper PDF ↗</span>
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading kicker="recognition" title="Achievements" />
          <ul className="mt-10 space-y-5">
            {achievements.map((item, i) => (
              <motion.li
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="flex gap-4 border-t border-white/10 pt-5"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-rose-soft" />
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-starlight/85 leading-relaxed hover:text-teal-soft transition-colors"
                >
                  {item.text} ↗
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
