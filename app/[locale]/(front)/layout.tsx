// front/app/[locale]/(front)/layout.tsx
import Navbar from "@/app/components/front/Navbar";
import { Inter } from "next/font/google";
import React from "react";
import "../../globals.css";
import { Providers } from "../providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// ✅ Metadata complet avec favicon et Font Awesome
export const metadata: any = {
  title: "Vitasoft - Développeur Full Stack",
  description:
    "Expert en développement web, data et IA. Créons ensemble des solutions innovantes.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  stylesheets: [
    {
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
      rel: "stylesheet",
      integrity:
        "sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==",
      crossOrigin: "anonymous",
      referrerPolicy: "no-referrer",
    },
  ],
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
          <div className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <main className="flex-grow">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
