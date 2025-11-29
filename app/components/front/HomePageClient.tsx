"use client";

import FloatingContactButton from "../FloatingContactButton";
import AddedValueSection from "./home/AddedValueSection";
import CompactProjectsSection from "./home/CompactProjectsSection";
import ContactSection from "./home/ContactSection";
import HeroExpertiseSection from "./home/HeroExpertiseSection";
import HeroSection from "./home/HeroSection";
import ProjectsSection from "./home/ProjectsSection";
import ServicesExpertiseSection from "./home/ServicesExpertiseSection";


export default function HomePageClient() {
  return (
    <div className="min-h-screen">
      <HeroExpertiseSection />

      <ServicesExpertiseSection />

      <ProjectsSection />

      <FloatingContactButton />

    </div>
  );
}
