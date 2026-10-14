import type { Metadata } from "next";
import Link from "next/link";
import { skills, profile } from "@/lib/data";
import LiveStats from "@/components/sections/LiveStats";

export const metadata: Metadata = {
  title: "Skills & Coding Profiles — Akarsha Agarwal",
  description:
    "Comprehensive technical skill set: Python, PyTorch, OpenCV, FastAPI, Next.js, SQL, and competitive programming profiles on Codeforces, LeetCode, and TUF+.",
};

export default function SkillsPage() {
  const skillGroups = Object.entries(skills);

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
            <span className="text-starlight">Skills</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/10 px-3.5 py-1 text-xs font-medium text-teal-soft mb-4">
            <span>⚙ Stack, Tools & Competitive Programming</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-starlight font-bold tracking-tight">
            Technical Skills & Profiles
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-starlight/75 leading-relaxed">
            Proficiencies developed across production web systems, machine learning pipelines,
            biometrics, and extensive competitive problem solving.
          </p>
        </div>

        {/* Live Stats Component */}
        <div className="mb-16 -mt-10">
          <LiveStats />
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map(([group, list]) => (
            <div
              key={group}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 hover:border-teal/40 transition-all"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <h2 className="font-display text-lg font-bold text-starlight">{group}</h2>
                <span className="text-xs text-teal-soft font-mono font-medium">
                  {list.length} skills
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {list.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs md:text-sm text-starlight/90 hover:border-teal/50 hover:text-teal-soft transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Coding Profiles & Social Hub */}
        <section className="mt-20">
          <div className="flex items-baseline gap-4 mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-starlight">
              Competitive & Professional Profiles
            </h2>
            <span className="text-xs text-mist">Verified Accounts</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href={profile.codeforces}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-teal/50 hover:bg-white/[0.04] transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-base font-bold text-starlight group-hover:text-teal-soft transition-colors">
                  Codeforces
                </span>
                <span className="text-xs text-teal-soft">↗</span>
              </div>
              <p className="mt-3 font-display text-3xl font-bold text-teal-soft">
                {profile.codeforcesRating}
              </p>
              <p className="mt-1 text-xs text-mist">Handle: @{profile.codeforcesHandle}</p>
            </a>

            <a
              href={profile.leetcode}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-teal/50 hover:bg-white/[0.04] transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-base font-bold text-starlight group-hover:text-teal-soft transition-colors">
                  LeetCode
                </span>
                <span className="text-xs text-teal-soft">↗</span>
              </div>
              <p className="mt-3 font-display text-3xl font-bold text-violet-soft">
                {profile.leetcodeSolved}
              </p>
              <p className="mt-1 text-xs text-mist">Problems Solved • @{profile.leetcodeHandle}</p>
            </a>

            <a
              href={profile.tuf}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-teal/50 hover:bg-white/[0.04] transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-base font-bold text-starlight group-hover:text-teal-soft transition-colors">
                  TakeUForward (TUF+)
                </span>
                <span className="text-xs text-teal-soft">↗</span>
              </div>
              <p className="mt-3 font-display text-3xl font-bold text-rose-soft">
                {profile.tufSolved}
              </p>
              <p className="mt-1 text-xs text-mist">Problems Solved • @{profile.tufHandle}</p>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-teal/50 hover:bg-white/[0.04] transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-base font-bold text-starlight group-hover:text-teal-soft transition-colors">
                  GitHub
                </span>
                <span className="text-xs text-teal-soft">↗</span>
              </div>
              <p className="mt-3 font-display text-3xl font-bold text-starlight">11+</p>
              <p className="mt-1 text-xs text-mist">Public Repositories • @{profile.githubHandle}</p>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-teal/50 hover:bg-white/[0.04] transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-base font-bold text-starlight group-hover:text-teal-soft transition-colors">
                  LinkedIn
                </span>
                <span className="text-xs text-teal-soft">↗</span>
              </div>
              <p className="mt-3 font-display text-xl font-bold text-starlight">Akarsha Agarwal</p>
              <p className="mt-1 text-xs text-mist">Connect for opportunities</p>
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-teal/50 hover:bg-white/[0.04] transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-base font-bold text-starlight group-hover:text-teal-soft transition-colors">
                  Direct Email
                </span>
                <span className="text-xs text-teal-soft">✉</span>
              </div>
              <p className="mt-3 font-display text-sm font-semibold text-teal-soft truncate">
                {profile.email}
              </p>
              <p className="mt-1 text-xs text-mist">Send an email inquiry</p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
