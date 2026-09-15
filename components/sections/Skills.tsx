"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { SectionHeading } from "./Experience";

export default function Skills() {
  const groups = Object.entries(skills);
  return (
    <section id="skills" className="relative py-28 md:py-36">
      <div className="section-shell">
        <SectionHeading kicker={`${groups.length} areas`} title="Skills" />

        <div className="mt-14 grid md:grid-cols-2 gap-x-12 gap-y-10">
          {groups.map(([group, list], i) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <h3 className="font-display text-sm text-violet-soft mb-4">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {list.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-sm text-starlight/85 hover:border-teal/50 hover:text-teal-soft transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
