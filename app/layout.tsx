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

export const metadata: Metadata = {
  title: "Akarsha Agarwal — Computer Science Engineer",
  description:
    "Portfolio of Akarsha Agarwal: ML/CV research, full-stack systems, and a night sky that reacts to your cursor.",
  metadataBase: new URL("https://akarsha-agarwal.vercel.app"),
  openGraph: {
    title: "Akarsha Agarwal — Computer Science Engineer",
    description:
      "ML/CV research, full-stack systems, and a night sky that reacts to your cursor.",
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
      <body className="bg-void text-starlight font-body antialiased">
        {children}
      </body>
    </html>
  );
}
