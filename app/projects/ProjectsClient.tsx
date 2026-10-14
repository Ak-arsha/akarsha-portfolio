"use client";

import { useState, useMemo } from "react";
import { projects, ProjectItem } from "@/lib/data";

const CATEGORIES = [
  "All Projects",
  "AI / ML & CV",
  "Data Analytics & Systems",
  "Full-Stack & Web",
  "Image Security",
] as const;

export default function ProjectsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Projects");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All Projects" || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        project.name.toLowerCase().includes(q) ||
        project.subtitle.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        project.stack.some((tech) => tech.toLowerCase().includes(q)) ||
        project.points.some((p) => p.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="mt-10">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => {
            const count =
              cat === "All Projects"
                ? projects.length
                : projects.filter((p) => p.category === cat).length;
            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs md:text-sm font-medium transition-all ${
                  isSelected
                    ? "bg-teal/20 text-teal-soft border border-teal/40 shadow-[0_0_15px_rgba(53,224,184,0.15)]"
                    : "bg-white/[0.03] text-mist border border-white/10 hover:text-starlight hover:border-white/20"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? "bg-teal/30 text-starlight" : "bg-white/10 text-mist"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search stack, title, keywords…"
            className="w-full rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 pl-9 text-xs md:text-sm text-starlight placeholder:text-mist/50 outline-none focus:border-teal/60 transition-colors"
          />
          <svg
            className="absolute left-3 top-2.5 h-4 w-4 text-mist/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-2.5 text-xs text-mist hover:text-white"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="py-4 flex items-center justify-between text-xs text-mist">
        <p>
          Showing <span className="text-teal-soft font-semibold">{filteredProjects.length}</span>{" "}
          of {projects.length} projects
        </p>
        {selectedCategory !== "All Projects" && (
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All Projects");
              setSearchQuery("");
            }}
            className="text-teal-soft hover:underline"
          >
            Reset filters
          </button>
        )}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20 rounded-3xl border border-white/10 bg-white/[0.02]">
          <p className="text-mist text-lg">No projects found matching your query.</p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All Projects");
              setSearchQuery("");
            }}
            className="mt-4 rounded-xl border border-teal/40 bg-teal/10 px-5 py-2 text-sm text-teal-soft hover:bg-teal/20"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: ProjectItem }) {
  const hasLiveDemo = Boolean(project.link && project.link !== project.githubLink);

  return (
    <article className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.02] p-6 hover:border-teal/50 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden">
      {/* Background glow on hover */}
      <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-teal/10 via-transparent to-violet/10 rounded-3xl" />

      <div className="relative z-10">
        {/* Category & Metrics badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-0.5 rounded-full border border-teal/30 bg-teal/10 text-teal-soft">
            {project.category}
          </span>
          {project.featured && (
            <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-violet/20 text-violet-soft border border-violet/30">
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-bold text-starlight group-hover:text-teal-soft transition-colors leading-snug">
          {project.name}
        </h3>
        <p className="mt-1 text-xs font-medium text-teal-soft/90">{project.subtitle}</p>

        {/* Metrics Pill */}
        {project.metrics && (
          <div className="mt-3 inline-block text-[11px] font-mono text-mist/90 bg-white/[0.04] border border-white/10 rounded-lg px-2.5 py-1">
            {project.metrics}
          </div>
        )}

        {/* Points */}
        <ul className="mt-4 space-y-2 text-xs md:text-sm text-starlight/80 leading-relaxed">
          {project.points.map((pt, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-soft" />
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative z-10 mt-6 pt-5 border-t border-white/10">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-0.5 text-[11px] text-mist"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-3">
          {hasLiveDemo && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-teal to-violet px-3 py-2 text-xs font-semibold text-void hover:opacity-90 transition-opacity"
            >
              <span>Live Demo</span>
              <span className="text-sm leading-none">↗</span>
            </a>
          )}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/20 px-3 py-2 text-xs font-semibold text-starlight hover:border-teal/60 hover:text-teal-soft transition-all ${
              !hasLiveDemo ? "w-full" : ""
            }`}
          >
            <span>GitHub</span>
            <span className="text-sm leading-none">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}
