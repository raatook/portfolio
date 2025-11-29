"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Sparkles } from "lucide-react";

export default function ProjectsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Plateforme complète avec paiement intégré",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      tags: ["React", "Node.js", "MongoDB"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Dashboard Analytics",
      description: "Visualisation de données en temps réel",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["Vue.js", "D3.js", "Python"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Mobile Banking App",
      description: "Application bancaire sécurisée",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      tags: ["React Native", "Firebase"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI Chatbot",
      description: "Assistant virtuel intelligent",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
      tags: ["Python", "TensorFlow", "NLP"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-xl mb-6">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-semibold text-indigo-300">Projets Récents</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              Mes Réalisations
            </span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Main Slide */}
          <div className="relative aspect-video rounded-3xl overflow-hidden group mb-8">
            <img
              src={projects[currentSlide].image}
              alt={projects[currentSlide].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[currentSlide].tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-3xl md:text-4xl font-black text-white mb-2">
                {projects[currentSlide].title}
              </h3>
              <p className="text-slate-300 text-lg mb-6">
                {projects[currentSlide].description}
              </p>

              <button className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${projects[currentSlide].color} text-white font-semibold hover:scale-105 transition-all`}>
                Voir le projet
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 justify-center">
            {projects.map((project, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`relative w-24 h-24 rounded-2xl overflow-hidden transition-all ${
                  currentSlide === idx 
                    ? 'ring-4 ring-white scale-110' 
                    : 'opacity-50 hover:opacity-100'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {currentSlide === idx && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="group px-8 py-4 bg-white/5 backdrop-blur-xl text-white font-semibold rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all inline-flex items-center gap-2">
            Voir tous les projets
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}