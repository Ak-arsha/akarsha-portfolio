"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Overview" },
  { href: "/education", label: "Education" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/research", label: "Research" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu whenever path changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-void/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <nav className="section-shell flex items-center justify-between py-4">
        {/* Brand / Name */}
        <Link
          href="/"
          className="group flex items-center gap-2 font-display text-base tracking-tight text-starlight transition-colors"
        >
          <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
          <span className="font-semibold group-hover:text-teal-soft transition-colors">
            Akarsha Agarwal
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-1 text-sm">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(link.href + "/");

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-starlight bg-white/[0.08] font-medium border border-teal/30 shadow-[0_0_12px_rgba(53,224,184,0.15)]"
                      : "text-mist hover:text-starlight hover:bg-white/[0.03]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-4 bg-gradient-to-r from-teal to-violet rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-teal/40 bg-teal/10 px-4 py-1.5 text-xs md:text-sm font-medium text-teal-soft hover:bg-teal/20 hover:border-teal transition-all"
          >
            <span>Say hello ✉</span>
          </Link>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-mist hover:text-starlight hover:bg-white/5 transition-colors focus:outline-none"
            aria-label="Toggle mobile navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-void/95 backdrop-blur-xl px-6 py-5">
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(link.href + "/");

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2.5 rounded-xl text-base transition-all ${
                      isActive
                        ? "bg-teal/15 text-teal-soft font-semibold border border-teal/30"
                        : "text-mist hover:text-starlight hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2 border-t border-white/10 mt-1">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center rounded-xl bg-gradient-to-r from-teal to-violet py-2.5 font-display text-sm font-semibold text-void"
              >
                Say hello ✉
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
