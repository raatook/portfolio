"use client";

import { useState, useEffect } from "react";
import { Sparkles, Zap, Shield, Rocket, Users, Cog, TrendingUp } from "lucide-react";

// Logo RTook intégré
function RTookLogo({ className = "w-32 h-32" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#d946ef', stopOpacity: 1 }} />
        </linearGradient>
        
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <circle 
        cx="100" 
        cy="100" 
        r="95" 
        fill="url(#gradient1)" 
        opacity="0.1"
      />
      
      <path 
        d="M 50 60 L 50 140 M 50 60 L 90 60 Q 110 60 110 80 Q 110 100 90 100 L 50 100 M 75 100 L 110 140" 
        stroke="url(#gradient1)" 
        strokeWidth="12" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
        filter="url(#glow)"
      />
      
      <path 
        d="M 120 70 L 170 70 M 145 70 L 145 140" 
        stroke="url(#gradient1)" 
        strokeWidth="12" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
        filter="url(#glow)"
      />
      
      <circle 
        cx="145" 
        cy="150" 
        r="6" 
        fill="url(#gradient1)"
        filter="url(#glow)"
      />
    </svg>
  );
}

export default function HeroWithValuesSection() {
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
      title: "Performance Optimale",
      description: "Code optimisé et architectures scalables",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Sécurité Renforcée",
      description: "Protection des données et best practices",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Rocket,
      title: "Déploiement Rapide",
      description: "Méthodologies agiles et CI/CD",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "UX Exceptionnelle",
      description: "Interfaces intuitives et modernes",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Cog,
      title: "Maintenance Facilitée",
      description: "Code propre et documenté",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: TrendingUp,
      title: "ROI Maximisé",
      description: "Solutions rentables et mesurables",
      color: "from-red-500 to-pink-500"
    }
  ];

  const stats = [
    { value: "50+", label: "Projets", emoji: "💼" },
    { value: "5+", label: "Années", emoji: "🚀" },
    { value: "100%", label: "Satisfaction", emoji: "⭐" }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 overflow-hidden flex items-center pt-20" id="home">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 80%)`,
            transition: "background-image 0.3s ease"
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Hero Content with Logo */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Logo RTook */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
                <RTookLogo className="w-24 h-24 relative animate-float" />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-xl mb-6">
              <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
              <span className="text-sm font-medium text-indigo-300">Développeur Full Stack</span>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="inline-block bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                Créons l'Avenir
              </span>
              <br />
              <span className="inline-block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ensemble
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Expert en développement <span className="text-indigo-400 font-semibold">Web</span>, <span className="text-purple-400 font-semibold">Data</span> & <span className="text-pink-400 font-semibold">IA</span>. Je transforme vos idées en solutions digitales innovantes et performantes.
            </p>

            {/* Stats compact */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10">
                  <div className="text-2xl mb-1">{stat.emoji}</div>
                  <div className="text-2xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-xs font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Added Values Cards */}
          <div className="grid grid-cols-2 gap-4">
            {addedValues.map((value, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveValue(idx)}
                onMouseLeave={() => setActiveValue(null)}
                className="group relative"
                style={{ 
                  transitionDelay: `${idx * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                  {activeValue === idx && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-10`} />
                  )}

                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                    <span className="text-white/40 font-bold text-xs">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="relative">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>
                      <value.icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                      {value.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                      {value.description}
                    </p>
                  </div>

                  <div 
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${value.color} transition-all duration-500 rounded-full`}
                    style={{ width: activeValue === idx ? '100%' : '0%' }}
                  />

                  <div 
                    className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${value.color} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}