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
                className="rounded-2xl border border-white/10 p-6"
              >
                <h3 className="font-display text-lg text-starlight leading-snug">{pub.title}</h3>
                <p className="mt-2 text-sm text-teal-soft">{pub.venue}</p>
                <p className="mt-3 text-sm text-starlight/80 leading-relaxed">{pub.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading kicker="recognition" title="Achievements" />
          <ul className="mt-10 space-y-5">
            {achievements.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="flex gap-4 border-t border-white/10 pt-5"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-soft" />
                <span className="text-starlight/85 leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
