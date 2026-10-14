import type { Metadata } from "next";
import Link from "next/link";
import { experience } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience & Internships — Akarsha Agarwal",
  description:
    "Professional software engineering and research experience: Research Intern at IIT (BHU) Varanasi and Python Developer Intern at Eglogics Softech Pvt. Ltd.",
};

export default function ExperiencePage() {
  return (
    <div className="py-16 md:py-24">
      <div className="section-shell">
        {/* Breadcrumb & Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs text-mist mb-3">
            <Link href="/" className="hover:text-teal-soft transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-starlight">Experience</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/10 px-3.5 py-1 text-xs font-medium text-teal-soft mb-4">
            <span>Engineering & Research Internships</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-starlight font-bold tracking-tight">
            Work Experience
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-starlight/75 leading-relaxed">
            Hands-on technical engineering roles across industry backend development and premier
            institutional AI research, building computer vision pipelines, microservices, and
            biometric systems.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-12">
          {experience.map((job) => (
            <article
              key={job.org}
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-6 md:p-10 hover:border-teal/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-teal/15 text-teal-soft border border-teal/30">
                      {job.period}
                    </span>
                    <span className="text-xs text-mist bg-white/5 px-2.5 py-1 rounded-md">
                      {job.type}
                    </span>
                    <span className="text-xs text-mist/70">{job.location}</span>
                  </div>

                  <h2 className="mt-3 font-display text-2xl md:text-3xl font-semibold text-starlight">
                    {job.role}
                  </h2>

                  <a
                    href={job.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 mt-1 text-base text-teal-soft hover:text-white transition-colors"
                  >
                    <span>{job.org}</span>
                    <span className="text-sm">↗</span>
                  </a>
                </div>

                {job.driveLink && (
                  <div className="shrink-0">
                    <a
                      href={job.driveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-teal/15 border border-teal/40 px-4 py-2.5 text-xs md:text-sm font-semibold text-teal-soft hover:bg-teal/25 hover:border-teal transition-all"
                    >
                      <span>View Verified Certificate ↗</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Points */}
              <div className="mt-6">
                <h3 className="font-display text-xs font-semibold uppercase tracking-wider text-mist mb-4">
                  Key Technical Contributions & Impact
                </h3>
                <ul className="space-y-3.5">
                  {job.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3.5 text-sm md:text-base text-starlight/85 leading-relaxed"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs text-mist font-medium mr-2">Technologies:</span>
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-1 text-xs text-starlight/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center py-12 rounded-3xl border border-white/10 bg-white/[0.02]">
          <h3 className="font-display text-2xl font-bold text-starlight">
            Looking for an SDE, ML/AI, or Python Backend Engineer?
          </h3>
          <p className="mt-2 text-sm text-starlight/70 max-w-xl mx-auto">
            I am currently open to internship and full-time opportunities. Let&apos;s talk about how I can contribute to your engineering team.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-gradient-to-r from-teal to-violet px-6 py-3 font-display text-sm font-semibold text-void hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </Link>
            <Link
              href="/projects"
              className="rounded-xl border border-white/20 px-6 py-3 font-display text-sm font-semibold text-starlight hover:border-teal/60 transition-colors"
            >
              Explore Projects →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
