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
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <Research />
      <Skills />
      <LiveStats />
      <Contact />
    </>
  );
}
