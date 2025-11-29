// app/[locale]/(front)/page.tsx
import FloatingContactButton from "@/app/components/FloatingContactButton";
import HeroExpertiseSection from "@/app/components/HeroExpertiseSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import ServicesExpertiseSection from "@/app/components/ServicesExpertiseSection";
import { getI18n } from "@/app/locales/server";
import type { Metadata } from "next";
import { projectsData, servicesData, techStackData } from "../lib/data/portfolio";


// Métadonnées spécifiques à la page d'accueil
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    alternates: {
      canonical: `https://votre-domaine.com/${locale}`,
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getI18n();

  // Schema.org pour les projets/travaux - basé sur les données réelles
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projectsData.map((project, index) => ({
      "@type": "CreativeWork",
      position: index + 1,
      name: project.title,
      description: project.description,
      author: {
        "@type": "Person",
        name: "RTook"
      },
      dateCreated: project.year,
      keywords: project.tags.join(", ")
    }))
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Développement Web et Mobile",
    provider: {
      "@type": "Person",
      name: "RTook"
    },
    areaServed: "FR",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de développement",
      itemListElement: servicesData.map(service => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description
        }
      }))
    }
  };

  return (
    <>
      {/* Schemas JSON-LD pour les sections */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      <div className="min-h-screen">
        {/* Sections avec balises sémantiques HTML5 + données server-side */}
        <HeroExpertiseSection />
        <ServicesExpertiseSection services={servicesData} techStack={techStackData}/>
        <ProjectsSection projectsData={projectsData} />
        <FloatingContactButton />
      </div>
    </>
  );
}