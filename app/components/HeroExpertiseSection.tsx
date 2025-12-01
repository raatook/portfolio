// app/components/HeroExpertiseSection.tsx
"use client";

import { useState, useEffect } from "react";
import { useI18n } from "@/app/locales/client";
import {
  Sparkles,
  Zap,
  Shield,
  Rocket,
  Users,
  Cog,
  TrendingUp,
} from "lucide-react";
import { statsData } from "@/app/lib/data/portfolio";

export default function HeroWithValuesSection() {
  const t = useI18n();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [activeValue, setActiveValue] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const addedValues = [
    {
      icon: Zap,
      key: "performance",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      key: "security",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Rocket,
      key: "deployment",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      key: "ux",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Cog,
      key: "maintenance",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: TrendingUp,
      key: "roi",
      color: "from-red-500 to-pink-500",
    },
  ];

  const stats = [
    { value: "Divers", labelKey: "hero.stats.projects", emoji: "💼" },
    { value: "5+", labelKey: "hero.stats.years", emoji: "🚀" },
    { value: "100%", labelKey: "hero.stats.satisfaction", emoji: "⭐" },
  ];

  return (
    <section
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 overflow-hidden flex items-center px-4 sm:px-6 max-w-full py-8 md:py-12"
      id="home"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 80%)`,
            transition: "background-image 0.3s ease",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* Floating Orbs */}
      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-4 md:mb-6 flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
                <img
                  src="/logo.svg"
                  alt="RTdev Logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 relative animate-float"
                />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-xl mb-3 md:mb-4 max-[720px]:flex max-[720px]:mx-auto max-[720px]:justify-center max-[720px]:block">
              <Sparkles className="w-3 md:w-4 h-3 md:h-4 text-indigo-400 animate-pulse" />
              <span className="text-xs md:text-sm font-medium text-indigo-300">
                {t("hero.badge")} {/* ✅ Traduit */}
              </span>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-400 animate-pulse" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-4 leading-tight">
              <span className="inline-block bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                {t("hero.title1")} {/* ✅ Traduit */}
              </span>
              <br />
              <span className="inline-block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t("hero.title2")} {/* ✅ Traduit */}
              </span>
            </h1>

            {/* <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-4 md:mb-6 leading-relaxed">
              {t('hero.description', {
                web: <span className="text-indigo-400 font-semibold">{t('hero.web')}</span>,
                data: <span className="text-purple-400 font-semibold">{t('hero.data')}</span>,
                ia: <span className="text-pink-400 font-semibold">{t('hero.ia')}</span>,
              })}
            </p> */}

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-2 md:gap-3">
              {statsData.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-xl rounded-lg p-2 md:p-3 border border-white/10"
                >
                  <div className="text-lg md:text-xl mb-0.5">{stat.emoji}</div>
                  <div className="text-lg md:text-xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-xs font-medium">
                    {stat.labelKey}
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right: Added Values Cards */}
          <div className="grid grid-cols-2 gap-2 md:gap-3">
            {addedValues.map((value, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveValue(idx)}
                onMouseLeave={() => setActiveValue(null)}
                className="group relative"
                style={{
                  transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                  transitionDelay: `${idx * 100 + 200}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-xl p-3 md:p-4 border border-white/10 hover:border-white/20 overflow-hidden">
                  {activeValue === idx && (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-10`}
                    />
                  )}

                  <div className="absolute top-2 right-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/5 flex items-center justify-center">
                    <span className="text-white/40 font-bold text-xs">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="relative">
                    <div
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br ${value.color} flex items-center justify-center mb-2 md:mb-3 transition-transform duration-700 group-hover:scale-125 group-hover:rotate-12 shadow-lg animate-fade-in-up`}
                    >
                      <value.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>

                    <h3 className="text-xs md:text-sm font-bold text-white mb-1 group-hover:text-indigo-200 transition-colors animate-fade-in-up delay-100">
                      {/* @ts-ignore */}
                      {t(`hero.values.${value.key}.title`)}
                    </h3>

                    <p className="text-slate-400 text-xs leading-relaxed group-hover:text-slate-300 transition-colors animate-fade-in-up delay-200">
                      {/* @ts-ignore */}
                      {t(`hero.values.${value.key}.description`)}
                    </p>
                  </div>

                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${value.color} transition-all duration-500 rounded-full`}
                    style={{ width: activeValue === idx ? "100%" : "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Styles identiques */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease forwards; }
      `}</style>
    </section>
  );
}
