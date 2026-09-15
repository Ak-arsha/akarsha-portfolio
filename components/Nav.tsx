"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#work", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-void/70 backdrop-blur-md border-b border-white/5" : ""
      }`}
    >
      <nav className="section-shell flex items-center justify-between py-5">
        <a href="#top" className="font-display text-sm tracking-tight text-starlight">
          Akarsha Agarwal
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-mist">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative transition-colors hover:text-starlight group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-teal to-violet transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-starlight hover:border-teal/60 hover:text-teal transition-colors"
        >
          Say hello
        </a>
      </nav>
    </header>
  );
}
