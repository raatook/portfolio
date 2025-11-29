"use client";

import { useState, useEffect } from "react";
import { Sparkles, ArrowRight, Code2 } from "lucide-react";

export default function ServicesExpertiseSection() {
  const [activeService, setActiveService] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Services principaux
  const services = [
    {
      id: 1,
      icon: "fa-code",
      title: "Développement Web",
      description: "Applications web modernes, performantes et responsive",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10"
    },
    {
      id: 2,
      icon: "fa-mobile-alt",
      title: "Développement Mobile",
      description: "Apps natives et cross-platform iOS & Android",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10"
    },
    {
      id: 3,
      icon: "fa-database",
      title: "Data Engineering",
      description: "Architecture data, ETL et analyse de données",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10"
    },
    {
      id: 4,
      icon: "fa-brain",
      title: "Intelligence Artificielle",
      description: "Solutions IA, Machine Learning et NLP",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10"
    },
    {
      id: 5,
      icon: "fa-rocket",
      title: "Déploiement & DevOps",
      description: "CI/CD, containerisation et cloud infrastructure",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-500/10"
    },
    {
      id: 6,
      icon: "fa-tools",
      title: "Maintenance & Support",
      description: "Monitoring, debugging et évolutions continues",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10"
    }
  ];

  // Stack technique avec icônes
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
    { name: "Flutter", icon: "fa-solid fa-mobile", color: "#02569B" },
    { name: "Firebase", icon: "fa-solid fa-fire", color: "#FFCA28" },
    { name: "TensorFlow", icon: "fa-solid fa-brain", color: "#FF6F00" },
    { name: "Git", icon: "fa-brands fa-git-alt", color: "#F05032" },
    { name: "Linux", icon: "fa-brands fa-linux", color: "#FCC624" },
    { name: "Angular", icon: "fa-brands fa-angular", color: "#DD0031" }
  ];

  // Auto-scroll pour le carrousel de technologies
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [techStack.length]);

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 overflow-hidden" id="services">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-xl mb-6">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-semibold text-indigo-300">Services & Expertise</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              Ce que je propose
            </span>
          </h2>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Des solutions complètes pour tous vos besoins digitaux
          </p>
        </div>

        {/* Services Grid - Compact 3x2 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              onMouseEnter={() => setActiveService(index)}
              className="group relative"
            >
              <div className={`relative h-full p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer bg-white/5 backdrop-blur-xl ${
                activeService === index
                  ? 'border-white/20 shadow-2xl scale-105'
                  : 'border-white/10 hover:border-white/20'
              }`}>
                {/* Gradient glow on hover */}
                {activeService === index && (
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-10 blur-xl -z-10`} />
                )}

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${service.bgColor} flex items-center justify-center mb-4 transition-all duration-500 ${
                  activeService === index ? 'scale-110 rotate-6' : ''
                }`}>
                  <i className={`fas ${service.icon} text-2xl bg-gradient-to-br ${service.color} bg-clip-text text-transparent`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Animated line */}
                <div className={`h-1 mt-4 rounded-full bg-gradient-to-r ${service.color} transition-all duration-500 ${
                  activeService === index ? 'w-full' : 'w-0'
                }`} />
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Showcase */}
        <div className="relative">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Code2 className="w-5 h-5 text-indigo-400" />
              <h3 className="text-2xl font-bold text-white">Stack Technique</h3>
            </div>
            <p className="text-slate-400">Technologies que je maîtrise</p>
          </div>

          {/* Infinite scroll carousel */}
          <div className="relative overflow-hidden">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10" />

            {/* Scrolling container */}
            <div className="flex gap-6 animate-scroll py-8">
              {/* Duplicate array for seamless loop */}
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={index}
                  className="group flex-shrink-0 w-20 h-20 bg-white/5 backdrop-blur-xl rounded-2xl border-2 border-white/10 hover:border-indigo-400 flex flex-col items-center justify-center gap-2 transition-all hover:scale-110 hover:shadow-xl cursor-pointer"
                  title={tech.name}
                >
                  <i 
                    className={`${tech.icon} text-3xl transition-colors`}
                    style={{ color: tech.color }}
                  />
                  <span className="text-xs font-semibold text-slate-400 group-hover:text-white transition-colors text-center px-1">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}