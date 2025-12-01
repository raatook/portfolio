// app/[locale]/layout.tsx
import { Inter } from "next/font/google";
import React from "react";
import "../globals.css";
import { Providers } from "./providers";
import ImprovedSidebar from "@/app/components/ImprovedSidebar";
import LanguageSwitcher from "../components/LanguageSwitcher";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Métadonnées dynamiques par locale
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const metadata = {
    fr: {
      title: "RTook - Développeur Full Stack | Web, Mobile, Data & IA",
      description: "Développeur Full Stack expert en React, Next.js, Laravel, Ionic. Création d'applications web, mobile, solutions data et IA. 5+ ans d'expérience. Portfolio et projets.",
      keywords: "développeur full stack, react, next.js, laravel, ionic, développement web, développement mobile, data engineering, intelligence artificielle, paris, freelance",
    },
    en: {
      title: "RTook - Full Stack Developer | Web, Mobile, Data & AI",
      description: "Full Stack Developer expert in React, Next.js, Laravel, Ionic. Web & mobile app development, data solutions and AI. 5+ years experience. Portfolio and projects.",
      keywords: "full stack developer, react, next.js, laravel, ionic, web development, mobile development, data engineering, artificial intelligence, paris, freelance",
    },
  };

  const content = metadata[locale as keyof typeof metadata] || metadata.fr;

  return {
    title: {
      default: content.title,
      template: `%s | RTook`,
    },
    description: content.description,
    keywords: content.keywords,
    authors: [{ name: "RTook" }],
    creator: "RTook",
    publisher: "RTook",
    formatDetection: {
      telephone: true,
      email: true,
    },
    // openGraph: {
    //   type: "website",
    //   locale: locale === "fr" ? "fr_FR" : "en_US",
    //   url: `https://votre-domaine.com/${locale}`,
    //   siteName: "RTook Portfolio",
    //   title: content.title,
    //   description: content.description,
    //   images: [
    //     {
    //       url: "/og-image.png",
    //       width: 1200,
    //       height: 630,
    //       alt: "RTook - Développeur Full Stack",
    //     },
    //   ],
    // },
    // twitter: {
    //   card: "summary_large_image",
    //   title: content.title,
    //   description: content.description,
    //   images: ["/og-image.png"],
    //   creator: "@votre_twitter",
    // },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    // alternates: {
    //   canonical: `https://votre-domaine.com/${locale}`,
    //   languages: {
    //     "fr": "/fr",
    //     "en": "/en",
    //   },
    // },
    icons: {
      icon: "/logo.svg",
      shortcut: "/logo.svg",
      apple: "/logo.svg",
    },
    // verification: {
    //   google: "votre-code-google-verification",
    //   // yandex: "votre-code-yandex",
    //   // bing: "votre-code-bing",
    // },
  };
}

export default async function FrontLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Schema.org JSON-LD pour les rich snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "RTook",
    jobTitle: "Développeur Full Stack",
    description: "Expert en développement web, mobile, data et IA",
    url: `https://votre-domaine.com/${locale}`,
    image: "https://votre-domaine.com/logo.png",
    sameAs: [
      "https://github.com/votre-username",
      "https://linkedin.com/in/votre-username",
      "https://twitter.com/votre-username",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "Laravel",
      "Ionic",
      "TypeScript",
      "Python",
      "Data Engineering",
      "Intelligence Artificielle",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
    email: "contact@exemple.com",
    telephone: "+33612345678",
  };

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        
        {/* Preconnect pour optimisation */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        
        {/* Canonical et alternates gérés par Next.js metadata */}
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased overflow-x-hidden`}
      >
        <Providers locale={locale}>
          <div className="relative min-h-screen bg-slate-950">
            <main className="w-full min-[720px]:pr-80 lg:pr-96 relative">
              <div className="fixed top-8 right-2 min-[720px]:right-87 lg:right-96 z-50 flex justify-end pr-4">
                <LanguageSwitcher />
              </div>
              {children}
            </main>
            <ImprovedSidebar />
          </div>
        </Providers>
      </body>
    </html>
  );
}