import type { Metadata } from "next";
import Link from "next/link";
import { publications, achievements } from "@/lib/data";

export const metadata: Metadata = {
  title: "Research & Publications — Akarsha Agarwal",
  description:
    "Medical image watermarking research under review at Journal of the Franklin Institute, deep steganography architectures, and Smart India Hackathon achievements.",
};

export default function ResearchPage() {
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
            <span className="text-starlight">Research</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/10 px-3.5 py-1 text-xs font-medium text-teal-soft mb-4">
            <span>Scientific Research & National Honors</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-starlight font-bold tracking-tight">
            Research & Publications
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-starlight/75 leading-relaxed">
            Exploring the frontiers of computer vision, image steganography, and medical watermark
            security. Advancing imperceptible message embedding, clinical diagnostic fidelity,
            and adversarial attack resilience.
          </p>
        </div>

        {/* Featured Research Paper */}
        <section className="mb-16">
          <div className="flex items-baseline gap-4 mb-6">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-starlight">
              Primary Research Publication
            </h2>
            <span className="text-xs text-mist">Peer-Reviewed Submission</span>
          </div>

          {publications.map((pub) => (
            <article
              key={pub.title}
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 md:p-10 hover:border-teal/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-teal/15 text-teal-soft border border-teal/30">
                      {pub.status}
                    </span>
                    <span className="text-xs text-violet-soft bg-violet/10 border border-violet/20 px-3 py-1 rounded-full">
                      {pub.venue}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl md:text-3xl font-bold text-starlight leading-snug">
                    {pub.title}
                  </h3>

                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-sm text-teal-soft hover:underline"
                  >
                    <span>ScienceDirect • Journal of the Franklin Institute</span>
                    <span>↗</span>
                  </a>
                </div>

                {pub.driveLink && (
                  <div className="shrink-0 mt-2 md:mt-0">
                    <a
                      href={pub.driveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal to-violet px-5 py-3 text-xs md:text-sm font-semibold text-void hover:opacity-90 transition-opacity"
                    >
                      <span>Read LocalMark Manuscript PDF ↗</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Research Metrics Pills */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                {pub.metrics.map((m) => (
                  <span
                    key={m}
                    className="rounded-xl border border-teal/30 bg-teal/5 px-3.5 py-1.5 text-xs font-mono font-medium text-teal-soft"
                  >
                    {m}
                  </span>
                ))}
              </div>

              <div className="mt-6 text-starlight/85 text-sm md:text-base leading-relaxed space-y-4">
                <p>{pub.detail}</p>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-xs md:text-sm text-mist space-y-2">
                  <p className="font-semibold text-starlight">Core Methodology & Innovations:</p>
                  <ul className="list-disc list-inside space-y-1.5">
                    <li>
                      Formulated a modified U-Net encoder-decoder capable of localizing message embedding in low-diagnostic-significance retinal tissue regions.
                    </li>
                    <li>
                      Designed the Enhanced Robust Decoder (ERD) with spatial attention mechanisms to recover bit strings under extreme distortion.
                    </li>
                    <li>
                      Exhaustively evaluated on 24 attack varieties: Gaussian noise, median filter, JPEG compression down to Q=20, rotation, contrast stretching, and cropping.
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* National Achievements & Leadership */}
        <section className="mt-20">
          <div className="flex items-baseline gap-4 mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-starlight">
              Honors, Leadership & Milestones
            </h2>
            <span className="text-xs text-mist">Recognitions</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((item) => (
              <div
                key={item.title}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-teal/40 transition-all"
              >
                <div>
                  <span className="inline-block text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-rose/15 text-rose-soft border border-rose/30 mb-3">
                    {item.badge}
                  </span>
                  <h3 className="font-display text-lg font-bold text-starlight leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-starlight/80 leading-relaxed">
                    {item.text}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-teal-soft hover:underline"
                  >
                    <span>Learn more ↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick link to related projects */}
        <div className="mt-20 text-center py-12 rounded-3xl border border-white/10 bg-white/[0.02]">
          <h3 className="font-display text-2xl font-bold text-starlight">
            Interested in the code behind the research?
          </h3>
          <p className="mt-2 text-sm text-starlight/70 max-w-xl mx-auto">
            Explore the open-source PyTorch steganography repository and SVD watermarking scripts on GitHub.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/projects"
              className="rounded-xl bg-gradient-to-r from-teal to-violet px-6 py-3 font-display text-sm font-semibold text-void hover:opacity-90 transition-opacity"
            >
              Explore Steganography & SVD Projects →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
