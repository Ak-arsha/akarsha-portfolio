import Link from "next/link";
import { profile } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-void/60 backdrop-blur-sm mt-32">
      <div className="section-shell py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
              <span className="font-display font-semibold text-starlight text-lg tracking-tight">
                {profile.name}
              </span>
            </div>
            <p className="text-sm text-mist leading-relaxed max-w-md">
              {profile.tagline}
            </p>
            <div className="flex items-center gap-2 text-xs text-teal-soft pt-1">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal" />
              <span>{profile.status} • Based in {profile.location}</span>
            </div>
          </div>

          {/* Col 2: Navigation Pages */}
          <div>
            <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-starlight/70 mb-3">
              Pages
            </h4>
            <ul className="space-y-2 text-sm text-mist">
              <li>
                <Link href="/" className="hover:text-teal-soft transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/education" className="hover:text-teal-soft transition-colors">
                  Education & Academics
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-teal-soft transition-colors">
                  All Projects (11)
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-teal-soft transition-colors">
                  Experience & Internships
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-teal-soft transition-colors">
                  Research & Publications
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-teal-soft transition-colors">
                  Skills & Profiles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-soft transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Profiles & Connect */}
          <div>
            <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-starlight/70 mb-3">
              Connect
            </h4>
            <ul className="space-y-2 text-sm text-mist">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-teal-soft transition-colors"
                >
                  Email ↗
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-teal-soft transition-colors"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-teal-soft transition-colors"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href={profile.codeforces}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-teal-soft transition-colors"
                >
                  Codeforces (1388) ↗
                </a>
              </li>
              <li>
                <a
                  href={profile.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-teal-soft transition-colors"
                >
                  LeetCode (300+) ↗
                </a>
              </li>
              <li>
                <a
                  href={profile.tuf}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-teal-soft transition-colors"
                >
                  TUF+ (360+) ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-mist/60">
          <p>© {currentYear} {profile.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built with Next.js 15, Three.js & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
