// front/app/[locale]/(front)/page.tsx
import HomePageClient from "@/app/components/front/HomePageClient";
import { getI18n } from "@/app/locales/server";
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getI18n();

  return (
    <HomePageClient />
  );
}