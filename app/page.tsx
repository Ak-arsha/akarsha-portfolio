import Nav from "@/components/Nav";
import Effects from "@/components/Effects";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Research from "@/components/sections/Research";
import LiveStats from "@/components/sections/LiveStats";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Effects />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-aurora" />

      <Nav />
      <main className="relative">
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Research />
        <LiveStats />
        <Contact />
      </main>
    </>
  );
}
