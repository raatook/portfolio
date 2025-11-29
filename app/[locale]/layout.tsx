import { Inter } from "next/font/google";
import React from "react";
import "../globals.css";
import { Providers } from "./providers";
import ImprovedSidebar from "@/app/components/ImprovedSidebar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: any = {
  title: "RTook - Développeur Full Stack",
  description:
    "Expert en développement web, data et IA. Créons ensemble des solutions innovantes.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default async function FrontLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <meta name="description" content={metadata.description + ""} />
        <title>{metadata.title + ""}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased overflow-x-hidden`}>
        <Providers locale={locale}>
          {/* Structure responsive : contenu + sidebar visible à partir de 720px */}
          <div className="relative min-h-screen bg-slate-950">
            {/* Contenu principal */}
            <main className="w-full min-[720px]:pr-80 lg:pr-96">
              {children}
            </main>
            
            {/* Sidebar - toujours présente dans le DOM, visibilité gérée par ImprovedSidebar */}
            <ImprovedSidebar />
          </div>
        </Providers>
      </body>
    </html>
  );
}