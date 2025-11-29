"use client";

import AddedValueSection from "./home/AddedValueSection";
import ContactSection from "./home/ContactSection";
import HeroSection from "./home/HeroSection";
import ProjectsSection from "./home/ProjectsSection";
import ServicesExpertiseSection from "./home/ServicesExpertiseSection";


export default function HomePageClient() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <ServicesExpertiseSection />

      <AddedValueSection />

      <ProjectsSection />

      <ContactSection />
    </div>
  );
}
