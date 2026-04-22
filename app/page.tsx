import About from "@/components/About";
import BackToTop from "@/components/BackToTop";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import GitHub from "@/components/GitHub";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main id="main-content" className="relative">
      <Navbar />
      <Hero />
      <SectionDivider color="rgba(59,130,246,0.05)" />
      <About />
      <SectionDivider color="rgba(6,182,212,0.05)" />
      <Experience />
      <SectionDivider color="rgba(244,63,94,0.05)" />
      <Projects />
      <Skills />
      <Certifications />
      <SectionDivider color="rgba(139,92,246,0.05)" />
      <GitHub />
      <Education />
      <SectionDivider color="rgba(59,130,246,0.05)" />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
