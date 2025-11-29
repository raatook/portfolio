"use client";

import { useState } from "react";
import { Sparkles, Check } from "lucide-react";

export default function AddedValueSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const values = [
    {
      id: 1,
      icon: "fa-bolt",
      title: "Performance Optimale",
      description: "Code optimisé et architectures scalables pour des performances maximales",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 2,
      icon: "fa-shield-alt",
      title: "Sécurité Renforcée",
      description: "Implémentation des meilleures pratiques de sécurité et protection des données",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      icon: "fa-rocket",
      title: "Déploiement Rapide",
      description: "Méthodologies agiles et CI/CD pour des livraisons continues",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      icon: "fa-users",
      title: "UX Centrée Utilisateur",
      description: "Interfaces intuitives pensées pour une expérience utilisateur exceptionnelle",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 5,
      icon: "fa-cogs",
      title: "Maintenance Facilitée",
      description: "Code propre, documenté et maintenable pour une évolution sereine",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      icon: "fa-chart-line",
      title: "ROI Maximisé",
      description: "Solutions rentables qui génèrent de la valeur business mesurable",
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 backdrop-blur-xl mb-6">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-semibold text-indigo-300">Valeurs Ajoutées</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              Pourquoi me choisir
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light">
            Un engagement qualité sur chaque aspect de vos projets
          </p>
        </div>

        {/* Values Grid - Compact Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={value.id}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className="group relative"
            >
              <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                {/* Gradient Background on Hover */}
                {activeIndex === index && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-10`} />
                )}

                {/* Number Badge */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <span className="text-white/40 font-bold text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>
                    <i className={`fas ${value.icon} text-2xl text-white`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                    {value.description}
                  </p>

                  {/* Check Icon */}
                  <div className="mt-6 flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center`}>
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-500 text-xs font-medium">Garanti</span>
                  </div>
                </div>

                {/* Bottom Line Animation */}
                <div 
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${value.color} transition-all duration-500 rounded-full`}
                  style={{ width: activeIndex === index ? '100%' : '0%' }}
                />

                {/* Corner Glow */}
                <div 
                  className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${value.color} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { value: "100%", label: "Satisfaction Client" },
            { value: "50+", label: "Projets Livrés" },
            { value: "5+", label: "Années d'Expérience" },
            { value: "24/7", label: "Support Disponible" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
              <div className="text-4xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}