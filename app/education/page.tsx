import type { Metadata } from "next";
import Link from "next/link";
import { education, certifications, profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Education & Academics — Akarsha Agarwal",
  description:
    "Comprehensive academic background, B.Tech coursework at JIIT Noida (CGPA 7.17), Class XII (94.75%) and Class X (93.8%) at CMS Lucknow, certifications and honors.",
};

export default function EducationPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="section-shell">
        {/* Breadcrumb & Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs text-mist mb-3">
            <Link href="/" className="hover:text-teal-soft transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-starlight">Education</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/10 px-3.5 py-1 text-xs font-medium text-teal-soft mb-4">
            <span>Academic Background & Milestones</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-starlight font-bold tracking-tight">
            Education & Academics
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-starlight/75 leading-relaxed">
            From foundational sciences and distinction at City Montessori School to rigorous
            computer science engineering at Jaypee Institute of Information Technology,
            here is my complete academic journey, coursework, and technical training.
          </p>
        </div>

        {/* Academic Highlights Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <p className="text-xs text-mist uppercase tracking-wider">B.Tech CGPA</p>
            <p className="mt-2 font-display text-3xl font-bold text-teal-soft">7.17</p>
            <p className="mt-1 text-xs text-starlight/60">JIIT Noida (2023–2027)</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <p className="text-xs text-mist uppercase tracking-wider">Class XII (ISC)</p>
            <p className="mt-2 font-display text-3xl font-bold text-violet-soft">94.75%</p>
            <p className="mt-1 text-xs text-starlight/60">CMS Lucknow (2023)</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <p className="text-xs text-mist uppercase tracking-wider">Class X (ICSE)</p>
            <p className="mt-2 font-display text-3xl font-bold text-rose-soft">93.8%</p>
            <p className="mt-1 text-xs text-starlight/60">CMS Lucknow (2022)</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <p className="text-xs text-mist uppercase tracking-wider">Leadership</p>
            <p className="mt-2 font-display text-xl font-bold text-starlight">Team Lead</p>
            <p className="mt-1 text-xs text-teal-soft">AI/ML Domain, GDG JIIT</p>
          </div>
        </div>

        {/* Detailed Education Timeline */}
        <div className="space-y-12">
          {education.map((item, index) => (
            <article
              key={item.id}
              className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-6 md:p-10 hover:border-teal/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-teal/15 text-teal-soft border border-teal/30">
                      {item.years}
                    </span>
                    {item.board && (
                      <span className="text-xs text-mist bg-white/5 px-2.5 py-1 rounded-md">
                        {item.board}
                      </span>
                    )}
                  </div>
                  <h2 className="mt-3 font-display text-2xl md:text-3xl font-semibold text-starlight">
                    {item.degree}
                  </h2>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-base text-teal-soft hover:text-white transition-colors"
                  >
                    <span>{item.institute}</span>
                    <span className="text-sm">↗</span>
                  </a>
                </div>

                <div className="md:text-right shrink-0">
                  <span className="text-xs text-mist block">Score / CGPA</span>
                  <span className="font-display text-2xl md:text-3xl font-bold text-teal-soft">
                    {item.score}
                  </span>
                </div>
              </div>

              <p className="mt-6 text-starlight/85 text-base leading-relaxed">
                {item.description}
              </p>

              {/* Coursework if present */}
              {item.coursework && item.coursework.length > 0 && (
                <div className="mt-8">
                  <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-violet-soft mb-3">
                    Relevant Coursework & Labs
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.coursework.map((course) => (
                      <span
                        key={course}
                        className="rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-starlight/90 hover:border-teal/40 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              <div className="mt-8">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-mist mb-3">
                  Academic Milestones & Leadership
                </h3>
                <ul className="space-y-2.5">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-sm text-starlight/80 leading-relaxed"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Professional & Specialized Certifications */}
        <section className="mt-20">
          <div className="flex items-baseline gap-4 mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-starlight">
              Certifications & Specialized Training
            </h2>
            <span className="text-xs text-mist">Verified Credentials</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-teal/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs text-teal-soft font-medium">{cert.date}</span>
                    <span className="text-[11px] text-mist/70">Certificate</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-starlight leading-snug">
                    {cert.name}
                  </h3>
                  <p className="mt-1 text-sm text-mist">{cert.issuer}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cert.topics.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-0.5 text-[11px] text-starlight/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {cert.credentialUrl && (
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-teal-soft hover:underline"
                    >
                      <span>View Verified Certificate ↗</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Quick Next Steps */}
        <div className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-r from-teal/10 via-violet/10 to-transparent p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold text-starlight">
              Explore Engineered Projects & Research
            </h3>
            <p className="mt-2 text-sm text-starlight/75 max-w-xl">
              See how this theoretical and algorithmic foundation is translated into real-world
              ML architectures, farm advisory platforms, and enterprise data pipelines.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              href="/projects"
              className="rounded-xl bg-gradient-to-r from-teal to-violet px-6 py-3 font-display text-sm font-semibold text-void hover:opacity-90 transition-opacity"
            >
              View All 11 Projects →
            </Link>
            <Link
              href="/experience"
              className="rounded-xl border border-white/20 px-6 py-3 font-display text-sm font-semibold text-starlight hover:border-teal/60 transition-colors"
            >
              View Work Experience →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
