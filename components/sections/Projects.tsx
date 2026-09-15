"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { SectionHeading } from "./Experience";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="section-shell">
        <SectionHeading kicker={`${projects.length} featured`} title="Projects" />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 p-6 overflow-hidden bg-white/[0.01] hover:border-teal/50 transition-all"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-aurora pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl text-starlight group-hover:text-teal-soft transition-colors">
                    {project.name}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-mist/70 hover:text-teal-soft transition-colors text-sm"
                    aria-label={`View ${project.name}`}
                  >
                    ↗
                  </a>
                </div>
                <p className="mt-1 text-sm text-teal-soft">{project.subtitle}</p>

                <ul className="mt-4 space-y-2.5 text-sm text-starlight/80 leading-relaxed">
                  {project.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-mist"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-mist hover:text-starlight underline ml-2 shrink-0 transition-colors"
                >
                  GitHub ↗
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
