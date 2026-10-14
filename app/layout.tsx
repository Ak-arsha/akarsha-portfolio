import type { Metadata } from "next";
import "@fontsource/sora/400.css";
import "@fontsource/sora/500.css";
import "@fontsource/sora/600.css";
import "@fontsource/sora/700.css";
import "@fontsource/sora/800.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";
import Nav from "@/components/Nav";
import Effects from "@/components/Effects";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Akarsha Agarwal — Computer Science Engineer",
  description:
    "Portfolio of Akarsha Agarwal: ML/CV research, full-stack systems, education, and interactive 3D engineering projects.",
  metadataBase: new URL("https://akarsha-portfolio.vercel.app"),
  openGraph: {
    title: "Akarsha Agarwal — Computer Science Engineer",
    description:
      "ML/CV research, full-stack systems, education, and interactive 3D engineering projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-void text-starlight font-body antialiased min-h-screen flex flex-col selection:bg-teal/30 selection:text-white">
        <Effects />
        <div className="pointer-events-none fixed inset-0 -z-10 bg-aurora" />
        <Nav />
        <main className="flex-1 relative pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
