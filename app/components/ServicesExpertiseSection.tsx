"use client";

import { useState, useEffect } from "react";
import { Sparkles, Code2 } from "lucide-react";

export default function ServicesExpertiseSection() {
  const [activeService, setActiveService] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const services = [
    {
      id: 1,
      icon: "fa-code",
      title: "Développement Web",
      description: "Applications web modernes, performantes et responsive",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
    },
    {
      id: 2,
      icon: "fa-mobile-alt",
      title: "Développement Mobile",
      description: "Apps natives et cross-platform iOS & Android",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
    },
    {
      id: 3,
      icon: "fa-database",
      title: "Data Engineering",
      description: "Architecture data, ETL, analyse de données",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
    },
    {
      id: 4,
      icon: "fa-brain",
      title: "Intelligence Artificielle",
      description: "Solutions IA, Machine Learning, NLP",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
    },
    {
      id: 5,
      icon: "fa-rocket",
      title: "Déploiement & DevOps",
      description: "CI/CD, containerisation, cloud",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-500/10",
    },
    {
      id: 6,
      icon: "fa-tools",
      title: "Maintenance & Support",
      description: "Monitoring, debugging, évolutions",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10",
    },
  ];

  const techStack = [
    { name: "React", icon: "fa-brands fa-react", color: "#61DAFB" },
    { name: "Next.js", icon: "fa-solid fa-n", color: "#FFFFFF" },
    { name: "Vue.js", icon: "fa-brands fa-vuejs", color: "#4FC08D" },
    { name: "Node.js", icon: "fa-brands fa-node-js", color: "#339933" },
    { name: "Python", icon: "fa-brands fa-python", color: "#3776AB" },
    { name: "TypeScript", icon: "fa-solid fa-code", color: "#3178C6" },
    { name: "Docker", icon: "fa-brands fa-docker", color: "#2496ED" },
    { name: "AWS", icon: "fa-brands fa-aws", color: "#FF9900" },
    { name: "MongoDB", icon: "fa-solid fa-database", color: "#47A248" },
    { name: "PostgreSQL", icon: "fa-solid fa-database", color: "#4169E1" },
  ];

  // Auto-scroll (carrousel)
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [techStack.length]);

  return (
    <section
      className="
        relative px-4 sm:px-6 
        py-10 md:py-12 
        bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950
        overflow-hidden
      "
      id="services"
    >
      {/* Pattern + Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-4 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-4 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* HEADER */}
      <div className="relative text-center mb-6 md:mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-xl mb-3">
          <Sparkles className="w-3 h-3 text-indigo-300" />
          <span className="text-xs font-semibold text-indigo-200">
            Services & Expertise
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-2 leading-tight bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
          Ce que je propose
        </h2>

        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
          Solutions puissantes, rapides et modernes
        </p>
      </div>

      {/* SERVICES GRID — compact version */}
      <div
        className="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3
        gap-3 md:gap-4
        mb-6 md:mb-8
      "
      >
        {services.map((service, index) => (
          <div
            key={service.id}
            onMouseEnter={() => setActiveService(index)}
            className="group relative"
          >
            <div
              className={`
                relative p-3 md:p-4 rounded-xl border-2 transition-all 
                duration-300 cursor-pointer bg-white/5 backdrop-blur-xl h-full
                ${
                  activeService === index
                    ? "border-white/20 shadow-xl scale-[1.04]"
                    : "border-white/10 hover:border-white/20"
                }
              `}
            >
              {activeService === index && (
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.color} opacity-10 blur-lg -z-10`}
                />
              )}

              {/* Icon */}
              <div
                className={`
                w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center mb-2
                ${service.bgColor} transition-all
                ${activeService === index ? "scale-110 rotate-3" : ""}
              `}
              >
                <i
                  className={`fas ${service.icon} text-lg md:text-xl bg-gradient-to-br ${service.color} bg-clip-text text-transparent`}
                />
              </div>

              {/* Title */}
              <h3 className="text-sm md:text-base font-bold text-white mb-1">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-[11px] md:text-sm leading-snug">
                {service.description}
              </p>

              {/* Line animation */}
              <div
                className={`
                  h-1 mt-3 rounded-full bg-gradient-to-r ${service.color}
                  transition-all duration-500
                  ${activeService === index ? "w-full" : "w-0"}
                `}
              />
            </div>
          </div>
        ))}
      </div>

      {/* TECH STACK — compact */}
      <div className="relative">
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Code2 className="w-4 h-4 text-indigo-300" />
            <h3 className="text-lg md:text-xl font-bold text-white">
              Stack Technique
            </h3>
          </div>
          <p className="text-xs md:text-sm text-slate-400">
            Technologies principales
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-slate-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-slate-950 to-transparent z-10" />

          <div className="flex gap-3 animate-scroll py-4">
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={index}
                className="
                  flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl 
                  bg-white/5 backdrop-blur-xl border border-white/10 
                  flex flex-col items-center justify-center gap-1 
                  transition-all hover:scale-110 cursor-pointer
                "
              >
                <i
                  className={`${tech.icon} text-xl md:text-2xl`}
                  style={{ color: tech.color }}
                />
                <span className="text-[10px] md:text-xs text-slate-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 5s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
}
