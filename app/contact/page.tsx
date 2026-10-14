import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact — Akarsha Agarwal",
  description:
    "Get in touch with Akarsha Agarwal for software engineering, ML/AI roles, research collaborations, or full-stack projects.",
};

export default function ContactPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="section-shell">
        <div className="flex items-center gap-2 text-xs text-mist mb-6">
          <Link href="/" className="hover:text-teal-soft transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-starlight">Contact</span>
        </div>
      </div>
      <Contact />
    </div>
  );
}
