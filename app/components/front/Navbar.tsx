// front/app/components/front/Navbar.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useI18n } from "@/app/locales/client";

export default function Navbar() {
  const t = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split("/")[1];

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setActiveSection(hash);

      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          setTimeout(() => setActiveSection(hash), 100);
        }
      }, 300);
    } else {
      setActiveSection("");
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["services", "projects", "about"];
      let currentSection = "";

      // Vérifier si on est en haut de la page (section home)
      if (window.scrollY < 100) {
        setActiveSection("");
        return;
      }

      // Détecter la section visible
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Ajuster le seuil de détection : section active si elle est visible dans le viewport
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
            break;
          }
        }
      }

      // Si aucune section n'est détectée mais qu'on a scrollé, vérifier si on est près du bas
      if (!currentSection && sections.length > 0) {
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 100) {
          currentSection = sections[sections.length - 1];
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    const timer = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [pathname]);

  const changeLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");
    router.push(newPath);
    setShowLangMenu(false);
  };

  const isLinkActive = (href: string) => {
    if (href.includes("#")) {
      const section = href.split("#")[1];
      const isHomePage =
        pathname === `/${currentLocale}` || pathname === `/${currentLocale}/`;

      if (section === "accueil") {
        return isHomePage && (activeSection === "" || activeSection === "accueil");
      }
      
      return isHomePage && activeSection === section;
    }
    

    if (href === `/${currentLocale}` || href === `/${currentLocale}/`) {
      return (
        (pathname === `/${currentLocale}` ||
          pathname === `/${currentLocale}/`) &&
        !activeSection
      );
    }

    return pathname.startsWith(href) && href !== `/${currentLocale}`;
  };

  const navLinks = [
    { href: `/${currentLocale}#accueil`, label: t("home.label") },
    { href: `/${currentLocale}#services`, label: t("services") },
    { href: `/${currentLocale}#projects`, label: t("projects.projects") },
    { href: `/${currentLocale}#about`, label: t("about") },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.includes("#")) {
      e.preventDefault();
      const section = href.split("#")[1];
      const baseUrl = href.split("#")[0];

      // Mettre à jour immédiatement la section active
      setActiveSection(section);

      if (pathname !== baseUrl && pathname !== `${baseUrl}/`) {
        router.push(`${baseUrl}#${section}`);
      } else {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
      setIsOpen(false);
    } else {
      // Si on clique sur "Accueil", réinitialiser la section active
      setActiveSection("");
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-lg shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link
                href={`/${currentLocale}`}
                className="flex items-center"
                onClick={() => setActiveSection("")}
            >
              <img className="w-20 h-20" src={"/logo.png"} alt="Vitasoft"/>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = isLinkActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`text-sm font-medium transition-colors relative group ${
                      isActive
                        ? scrolled
                          ? "text-blue-600"
                          : "text-blue-400"
                        : scrolled
                        ? "text-gray-700 hover:text-blue-600"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full ${
                        isActive ? "w-full" : ""
                      }`}
                    ></span>
                  </Link>
                );
              })}

              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-gray-700 hover:text-blue-600"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  <Globe className="w-4 h-4" />
                  <span className="uppercase">{currentLocale}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>

                {showLangMenu && (
                  <div className="absolute right-0 mt-3 w-36 bg-white rounded-xl shadow-lg border border-gray-100 py-2 overflow-hidden">
                    <button
                      onClick={() => changeLocale("fr")}
                      className={`w-full px-4 py-2.5 text-left text-sm hover:bg-blue-50 transition-colors ${
                        currentLocale === "fr"
                          ? "text-blue-600 font-semibold bg-blue-50"
                          : "text-gray-700"
                      }`}
                    >
                      🇫🇷 Français
                    </button>
                    <button
                      onClick={() => changeLocale("en")}
                      className={`w-full px-4 py-2.5 text-left text-sm hover:bg-blue-50 transition-colors ${
                        currentLocale === "en"
                          ? "text-blue-600 font-semibold bg-blue-50"
                          : "text-gray-700"
                      }`}
                    >
                      🇬🇧 English
                    </button>
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <Link
                href={`/${currentLocale}#contact`}
                onClick={(e) => handleLinkClick(e, `/${currentLocale}#contact`)}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t("contact")}
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-gray-900 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden py-6 bg-white rounded-b-2xl shadow-lg">
              <div className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = isLinkActive(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        handleLinkClick(e, link.href);
                        setIsOpen(false);
                      }}
                      className={`block px-4 py-3 text-sm font-medium transition-colors rounded-lg ${
                        isActive
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Language Switcher */}
              <div className="mt-6 pt-6 border-t border-gray-200 px-4 space-y-2">
                <p className="text-xs font-semibold text-gray-500 uppercase mb-3">
                  {t("language")}
                </p>
                <button
                  onClick={() => {
                    changeLocale("fr");
                    setIsOpen(false);
                  }}
                  className={`flex items-center space-x-2 w-full px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    currentLocale === "fr"
                      ? "text-blue-600 bg-blue-50 font-semibold"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span>🇫🇷</span>
                  <span>Français</span>
                </button>
                <button
                  onClick={() => {
                    changeLocale("en");
                    setIsOpen(false);
                  }}
                  className={`flex items-center space-x-2 w-full px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    currentLocale === "en"
                      ? "text-blue-600 bg-blue-50 font-semibold"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span>🇬🇧</span>
                  <span>English</span>
                </button>
              </div>

              {/* Mobile CTA */}
              <div className="mt-6 px-4">
                <Link
                  href={`/${currentLocale}#contact`}
                  onClick={(e) => {
                    handleLinkClick(e, `/${currentLocale}#contact`);
                    setIsOpen(false);
                  }}
                  className="block w-full text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition-all"
                >
                  {t("contact")}
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}