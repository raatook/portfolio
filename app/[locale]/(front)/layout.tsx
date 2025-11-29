// front/app/[locale]/(front)/layout.tsx
import { Inter } from "next/font/google";
import React from "react";
import "../../globals.css";
import { Providers } from "../providers";
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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers locale={locale}>
          {/* Structure en colonnes : contenu principal + sidebar */}
          <div className="flex min-h-screen bg-white">
            {/* Contenu principal */}
            <main className="flex-1">
              {children}
            </main>
            
            {/* Sidebar - visible uniquement sur grands écrans */}
            <ImprovedSidebar />
          </div>
        </Providers>
      </body>
    </html>
  );
}