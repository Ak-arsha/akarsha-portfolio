"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/data";
import { SectionHeading } from "./Experience";

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="section-shell">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <SectionHeading
            kicker="Production & Research Systems"
            title="Featured Projects"
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-soft hover:underline"
          >
            <span>View All 11 Projects with Filters →</span>
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => {
            const hasLiveDemo = Boolean(project.link && project.link !== project.githubLink);

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/10 p-6 overflow-hidden bg-white/[0.02] hover:border-teal/50 hover:bg-white/[0.04] transition-all"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-aurora pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-0.5 rounded-full border border-teal/30 bg-teal/10 text-teal-soft">
                      {project.category}
                    </span>
                    {hasLiveDemo && (
                      <span className="flex items-center gap-1 text-[11px] text-teal-soft">
                        <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
                        Live Demo
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-xl font-bold text-starlight group-hover:text-teal-soft transition-colors leading-snug">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-xs text-teal-soft">{project.subtitle}</p>

                  {project.metrics && (
                    <p className="mt-2 text-[11px] font-mono text-mist/90 bg-white/[0.04] px-2 py-0.5 rounded border border-white/10 inline-block">
                      {project.metrics}
                    </p>
                  )}

                  <ul className="mt-4 space-y-2 text-xs md:text-sm text-starlight/80 leading-relaxed">
                    {project.points.slice(0, 2).map((point, idx) => (
                      <li key={idx}>• {point}</li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.stack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-0.5 text-[11px] text-mist"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 5 && (
                      <span className="text-[11px] text-mist/60 px-1 py-0.5">
                        +{project.stack.length - 5}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {hasLiveDemo && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-teal to-violet py-2 text-xs font-semibold text-void hover:opacity-90 transition-opacity"
                      >
                        <span>Demo</span>
                        <span>↗</span>
                      </a>
                    )}
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center justify-center gap-1 rounded-xl border border-white/15 py-2 px-3 text-xs text-mist hover:text-starlight hover:border-white/30 transition-colors ${
                        !hasLiveDemo ? "w-full" : ""
                      }`}
                    >
                      <span>Code ↗</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* View All Projects Bar */}
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-2xl border border-teal/40 bg-teal/10 px-8 py-4 font-display text-sm font-semibold text-teal-soft hover:bg-teal/20 hover:border-teal transition-all shadow-[0_0_20px_rgba(53,224,184,0.15)]"
          >
            <span>Explore All 11 Projects with Filters (Live Demos & Repos)</span>
            <span className="text-base">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
