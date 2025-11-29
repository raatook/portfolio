// front/app/[locale]/(front)/page.tsx
import FloatingContactButton from "@/app/components/FloatingContactButton";
import HeroExpertiseSection from "@/app/components/HeroExpertiseSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import ServicesExpertiseSection from "@/app/components/ServicesExpertiseSection";
import { getI18n } from "@/app/locales/server";
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getI18n();

  return (
    <div className="min-h-screen">
      <HeroExpertiseSection />

      <ServicesExpertiseSection />

      <ProjectsSection />

      <FloatingContactButton />

    </div>
  );
}