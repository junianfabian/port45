import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Qualifications } from "@/components/Qualifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ParticleField } from "@/components/ParticleField";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticleField />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Qualifications />
        <Contact />
      </main>
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}
