"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles, Calendar, User, Clock, Code2, Target, Lightbulb, ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Plateforme complète avec paiement intégré",
      images: [
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop"
      ],
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      client: "TechStore Inc.",
      year: "2024",
      duration: "6 mois",
      link: "https://example.com",
      challenge: "Créer une expérience d'achat fluide avec un système de paiement sécurisé et une gestion complexe des stocks en temps réel.",
      solution: "Architecture microservices avec React pour le front, Node.js pour l'API, et MongoDB pour la base de données. Intégration de Stripe pour les paiements sécurisés.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Visualisation de données en temps réel",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop"
      ],
      tags: ["Vue.js", "D3.js", "Python", "WebSocket"],
      client: "DataCorp",
      year: "2024",
      duration: "4 mois",
      link: "https://example.com",
      challenge: "Visualiser des millions de points de données de manière interactive et performante.",
      solution: "Utilisation de D3.js pour les visualisations et WebSocket pour les mises à jour en temps réel. Optimisation avec virtualisation des données.",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Application bancaire sécurisée",
      images: [
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop"
      ],
      tags: ["React Native", "Firebase", "Biometric"],
      client: "SecureBank",
      year: "2023",
      duration: "8 mois",
      link: "https://example.com",
      challenge: "Assurer une sécurité maximale tout en offrant une expérience utilisateur fluide.",
      solution: "Authentification biométrique, chiffrement end-to-end et architecture sécurisée avec des audits réguliers.",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "AI Chatbot",
      description: "Assistant virtuel intelligent",
      images: [
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&h=800&fit=crop"
      ],
      tags: ["Python", "TensorFlow", "NLP", "OpenAI"],
      client: "AI Solutions",
      year: "2024",
      duration: "5 mois",
      link: "https://example.com",
      challenge: "Créer un assistant capable de comprendre le contexte et les intentions utilisateur avec précision.",
      solution: "Modèles NLP avancés avec fine-tuning sur données spécifiques du domaine. Intégration de GPT-4 pour le traitement du langage naturel.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
    setCurrentImageIndex(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentProject.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentProject.images.length) % currentProject.images.length);
  };

  const currentProject = projects[currentSlide];

  // Auto-scroll images every 1s
  useEffect(() => {
    if (currentProject.images.length > 1 && !isHovering) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % currentProject.images.length);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [currentProject.images.length, isHovering]);

  return (
    <section className="relative min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 overflow-hidden px-4 sm:px-6 max-w-full py-8 md:py-12" id="projects">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative flex flex-col w-full flex-1">
        {/* Header - Compact */}
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-xl mb-3 md:mb-4">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-indigo-400" />
            <span className="text-xs md:text-sm font-semibold text-indigo-300">Projets Récents</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
            <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              Mes Réalisations
            </span>
          </h2>
        </div>

        {/* Main Slide with Details - Flex grow */}
        <div className="relative mb-4 md:mb-6 flex-1 flex flex-col">
          <div className="grid lg:grid-cols-2 gap-0 lg:gap-6 bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/10 overflow-hidden h-full">
            {/* Left: Image Gallery */}
            <div className="relative h-64 lg:h-auto">
              <div 
                className="relative w-full h-full group"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <img
                  src={currentProject.images[currentImageIndex]}
                  alt={`${currentProject.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-slate-950/50" />
                
                {/* Image Navigation (only if multiple images) */}
                {currentProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100"
                      aria-label="Image précédente"
                    >
                      <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100"
                      aria-label="Image suivante"
                    >
                      <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                    
                    {/* Image Counter */}
                    <div className="absolute bottom-2 md:bottom-3 left-1/2 -translate-x-1/2 px-2 md:px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium">
                      {currentImageIndex + 1} / {currentProject.images.length}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Right: Details - Scrollable si nécessaire */}
            <div className="p-4 md:p-6 lg:p-8 flex flex-col overflow-y-auto max-h-[calc(100vh-20rem)] lg:max-h-none">
              {/* Title & Description */}
              <div className="mb-3 md:mb-4">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white mb-2">
                  {currentProject.title}
                </h3>
                <p className="text-slate-300 text-sm md:text-base">
                  {currentProject.description}
                </p>
              </div>

              {/* Info Grid - Compact */}
              <div className="grid grid-cols-2 gap-2 mb-3 md:mb-4">
                <div className="p-2 md:p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center gap-1 md:gap-2 mb-1">
                    <User className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
                    <span className="text-xs text-slate-400">Client</span>
                  </div>
                  <p className="text-white font-semibold text-xs md:text-sm truncate">{currentProject.client}</p>
                </div>

                <div className="p-2 md:p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center gap-1 md:gap-2 mb-1">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4 text-purple-400" />
                    <span className="text-xs text-slate-400">Année</span>
                  </div>
                  <p className="text-white font-semibold text-xs md:text-sm">{currentProject.year}</p>
                </div>

                <div className="p-2 md:p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center gap-1 md:gap-2 mb-1">
                    <Clock className="w-3 h-3 md:w-4 md:h-4 text-cyan-400" />
                    <span className="text-xs text-slate-400">Durée</span>
                  </div>
                  <p className="text-white font-semibold text-xs md:text-sm">{currentProject.duration}</p>
                </div>

                <div className="p-2 md:p-3 bg-white/5 rounded-lg border border-white/10">
                  <a 
                    href={currentProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 md:gap-2 text-green-400 hover:text-green-300 transition-colors group"
                  >
                    <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="text-xs md:text-sm font-semibold">Voir</span>
                  </a>
                </div>
              </div>

              {/* Technologies - Compact */}
              <div className="mb-3 md:mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Code2 className="w-3 h-3 md:w-4 md:h-4 text-indigo-400" />
                  <h4 className="text-white font-bold text-xs md:text-sm">Technologies</h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 md:px-3 md:py-1 rounded-lg bg-white/10 backdrop-blur-xl border border-white/20 text-white text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenge & Solution - Compact */}
              <div className="space-y-2 md:space-y-3">
                <div className="p-2 md:p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Target className="w-3 h-3 md:w-4 md:h-4 text-orange-400" />
                    <h4 className="text-white font-bold text-xs md:text-sm">Challenge</h4>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-2 md:line-clamp-none">
                    {currentProject.challenge}
                  </p>
                </div>

                <div className="p-2 md:p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Lightbulb className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
                    <h4 className="text-white font-bold text-xs md:text-sm">Solution</h4>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-2 md:line-clamp-none">
                    {currentProject.solution}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Navigation Arrows - Hidden on mobile */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 items-center justify-center text-white hover:bg-white/20 transition-all z-10"
            aria-label="Projet précédent"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 items-center justify-center text-white hover:bg-white/20 transition-all z-10"
            aria-label="Projet suivant"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Project Thumbnails - Fixed at bottom */}
        <div className="flex gap-2 md:gap-3 justify-center overflow-x-auto pb-2 px-2">
          {projects.map((project, idx) => (
            <button
              key={project.id}
              onClick={() => {
                setCurrentSlide(idx);
                setCurrentImageIndex(0);
              }}
              className={`relative flex-shrink-0 w-14 h-14 md:w-20 md:h-20 rounded-lg md:rounded-xl overflow-hidden transition-all ${
                currentSlide === idx 
                  ? 'ring-2 md:ring-3 ring-white scale-110' 
                  : 'opacity-50 hover:opacity-100'
              }`}
              aria-label={`Voir ${project.title}`}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {currentSlide === idx && (
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
              )}
              {project.images.length > 1 && (
                <div className="absolute top-0.5 right-0.5 md:top-1 md:right-1 px-1 py-0.5 bg-black/70 rounded text-white text-xs font-bold">
                  {project.images.length}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}