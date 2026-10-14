import type { Metadata } from "next";
import Link from "next/link";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects & Engineering Systems — Akarsha Agarwal",
  description:
    "Explore all 11 engineering projects built by Akarsha Agarwal: Reinsurance Analytics, KrishiMitra, Picture Perfect, Deep Steganography, SVD Watermarking, DataPulse, Price Tracker, and more.",
};

export default function ProjectsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="section-shell">
        {/* Breadcrumb & Header */}
        <div>
          <div className="flex items-center gap-2 text-xs text-mist mb-3">
            <Link href="/" className="hover:text-teal-soft transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-starlight">Projects</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/10 px-3.5 py-1 text-xs font-medium text-teal-soft mb-4">
            <span>Production & Research Implementations</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-starlight font-bold tracking-tight">
            All Projects & Systems
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-starlight/75 leading-relaxed">
            Full-stack platforms, machine learning architectures, enterprise analytics, and computer
            vision research. Each project is engineered with attention to real-world performance,
            clean code, and deployed usability.
          </p>
        </div>

        {/* Client Interactive Filter & Grid */}
        <ProjectsClient />
      </div>
    </div>
  );
}
