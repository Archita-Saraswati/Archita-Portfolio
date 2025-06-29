import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import Experience from "../components/Experience";
import Education from "../components/Education";
import { CertificationsSection } from "../components/certificates";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <Education />
        <Experience />
        <SkillsSection />
        <ProjectsSection /> {/* ✅ Now placed before certifications */}
        <CertificationsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};
