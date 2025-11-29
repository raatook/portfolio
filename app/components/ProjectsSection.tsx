// app/components/ProjectsSection.tsx
"use client";

import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Calendar,
  User,
  Clock,
  Code2,
  Target,
  Lightbulb,
  ExternalLink,
} from "lucide-react";
import { Project } from "../lib/data/portfolio";

export default function ProjectsSection({
  projectsData,
}: {
  projectsData: Project[];
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Plateforme de gestion intégrale pour centre de formation",
      description:
        "Application web complète permettant d’administrer les élèves, les professeurs, les formations, les plannings, les notes, les devoirs, les documents et les absences grâce à un tableau de bord moderne et automatisé.",
      images: [
        "/images/projet/CFM/1.png",
        "/images/projet/CFM/2.png",
        "/images/projet/CFM/3.png",
        "/images/projet/CFM/4.png",
        "/images/projet/CFM/5.png",
        "/images/projet/CFM/8.png",
        "/images/projet/CFM/9.png",
        "/images/projet/CFM/10.png",
        "/images/projet/CFM/11.png",
      ],
      tags: ["Laravel", "Livewire", "Vue.js", "MySQL"],
      client: "",
      year: "2023",
      duration: "1 an",
      link: "",
      challenge:
        "Unifier dans une seule plateforme des modules auparavant gérés sur des outils dispersés (Excel, Google Drive, WhatsApp). Permettre une gestion fiable des plannings et notes avec des droits d’accès stricts.",
      solution:
        "Conception d’un back-office modulaire avec gestion des rôles, génération automatique de documents, notifications internes, suivi des élèves et système d’absences sophistiqué. Optimisation des performances avec Livewire.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title:
        "Application mobile ludique de découverte des édifices historiques",
      description:
        "Une expérience mobile immersive permettant de découvrir des églises et monuments grâce à des anecdotes, mini-jeux, contenus 3D, informations historiques et parcours guidés.",
      images: [
        "/images/projet/GA/1.png",
        "/images/projet/GA/2.png",
        "/images/projet/GA/3.png",
        "/images/projet/GA/4.png",
        "/images/projet/GA/5.png",
        "/images/projet/GA/6.png",
        "/images/projet/GA/7.png",
        "/images/projet/GA/8.png",
        "/images/projet/GA/9.png",
        "/images/projet/GA/10.png",
        "/images/projet/GA/11.png",
        "/images/projet/GA/12.png",
        "/images/projet/GA/13.png",
        "/images/projet/GA/14.png",
        "/images/projet/GA/15.png",
        "/images/projet/GA/16.png",
        "/images/projet/GA/17.png",
        "/images/projet/GA/18.png",
        "/images/projet/GA/19.png",
        "/images/projet/GA/20.png",
        "/images/projet/GA/21.png",
        "/images/projet/GA/22.png",
        "/images/projet/GA/23.png",
      ],
      tags: ["React", "Ionic", "Capacitor", "Three.js"],
      client: "",
      year: "2025",
      duration: "6 mois",
      link: "",
      challenge:
        "Créer une expérience culturelle attractive pour les jeunes tout en intégrant du contenu historique fiable, de la 3D et des mini-jeux, sans sacrifier les performances.",
      solution:
        "Développement d’un moteur 3D léger avec Three.js, mise en place d’un système de quiz/XP, optimisation du cache mobile et intégration d’un CMS pour la gestion des récits et médias.",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Plateforme de réservation d'hôtels avec négociation de prix",
      description:
        "Application mobile + backoffice hôtelier permettant de rechercher un hôtel selon dates, localisation, nb de personnes, négocier les prix, recevoir des contre-offres, payer en ligne et gérer les réservations.",
      images: [
        "/images/projet/Matchroom/BO/1.png",
        "/images/projet/Matchroom/BO/2.png",
        "/images/projet/Matchroom/BO/3.png",
        "/images/projet/Matchroom/BO/4.png",
        "/images/projet/Matchroom/BO/5.png",
        "/images/projet/Matchroom/BO/6.png",
        "/images/projet/Matchroom/Front/1.png",
        "/images/projet/Matchroom/Front/2.png",
        "/images/projet/Matchroom/Front/3.png",
        "/images/projet/Matchroom/Front/4.png",
        "/images/projet/Matchroom/Front/5.png",
        "/images/projet/Matchroom/Front/6.png",
        "/images/projet/Matchroom/Front/7.png",
        "/images/projet/Matchroom/Front/8.png",
        "/images/projet/Matchroom/Front/9.png",
        "/images/projet/Matchroom/Front/10.png",
        "/images/projet/Matchroom/Front/11.png",
        "/images/projet/Matchroom/Front/12.png",
        "/images/projet/Matchroom/Front/13.png",
        "/images/projet/Matchroom/Front/14.png",
        "/images/projet/Matchroom/Front/15.png",
        "/images/projet/Matchroom/Front/16.png",
        "/images/projet/Matchroom/Front/17.png",
      ],
      tags: ["Next.js", "Supabase", "Refine", "Stripe", "OpenGDS"],
      client: "",
      year: "2024",
      duration: "8 mois",
      link: "",
      challenge:
        "Intégrer un système de négociation en temps réel entre client et hôtelier, tout en synchronisant les disponibilités via OpenGDS et en assurant un paiement sécurisé.",
      solution:
        "Mise en place d’un système de chat transactionnel, gestion dynamique des tarifs, automatisation des notifications, tableaux de bord pour hôteliers et intégration Stripe pour les paiements.",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 4,
      title: "Application mobile sociale pour la gestion d’événements",
      description:
        "Créer et découvrir des événements, inviter des amis, gérer les participants, discuter en direct, réserver via wallet interne et payer en ligne.",
      images: [
        "/images/projet/Tedispo/7.png",
        "/images/projet/Tedispo/8.png",
        "/images/projet/Tedispo/9.png",
        "/images/projet/Tedispo/10.png",
        "/images/projet/Tedispo/11.png",
        "/images/projet/Tedispo/12.png",
        "/images/projet/Tedispo/15.png",
        "/images/projet/Tedispo/16.png",
        "/images/projet/Tedispo/17.png",
        "/images/projet/Tedispo/18.png",
        "/images/projet/Tedispo/19.png",
        "/images/projet/Tedispo/20.png",
        "/images/projet/Tedispo/21.png",
        "/images/projet/Tedispo/22.png",
        "/images/projet/Tedispo/23.png",
        "/images/projet/Tedispo/24.png",
        "/images/projet/Tedispo/25.png",
        "/images/projet/Tedispo/26.png",
      ],
      tags: ["React", "Ionic", "Firebase", "Capacitor", "Strapi"],
      client: "",
      year: "2022",
      duration: "8 mois",
      link: "",
      challenge:
        "Gérer en temps réel les participants, invitations, messages groupés et paiements — le tout dans une seule app performante.",
      solution:
        "Mise en place de Firebase pour le temps réel, Strapi pour la gestion des contenus, un wallet interne pour les réservations et une UX fluide inspirée des réseaux sociaux modernes.",
      color: "from-green-500 to-emerald-500",
    },
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
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + currentProject.images.length) % currentProject.images.length
    );
  };

  const currentProject = projects[currentSlide];

  // Auto-scroll images every 1s
  useEffect(() => {
    if (currentProject.images.length > 1 && !isHovering) {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prev) => (prev + 1) % currentProject.images.length
        );
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [currentProject.images.length, isHovering]);

  return (
    <section
      className="relative min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 overflow-hidden px-4 sm:px-6 max-w-full py-8 md:py-12"
      id="projects"
    >
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
            <span className="text-xs md:text-sm font-semibold text-indigo-300">
              Projets Récents
            </span>
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
            {/* Left: Image Gallery */}
            <div className="relative h-64 h-64 md:h-96 lg:h-150">
              <div
                className="relative w-full h-full group"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <img
                  src={currentProject.images[currentImageIndex]}
                  className="absolute inset-0 w-full h-full object-cover blur-lg scale-95"
                  aria-hidden="true"
                />
                <img
                  src={currentProject.images[currentImageIndex]}
                  alt={`${currentProject.title} - Image ${
                    currentImageIndex + 1
                  }`}
                  className="relative z-10 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
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

            {/* Right: Details */}
            <div className="p-4 md:p-6 lg:p-8 flex flex-col overflow-y-auto max-h-[calc(100vh-20rem)] lg:max-h-none">
              {/* Desktop Title & Description - hidden on mobile */}
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
                {!!currentProject.client && (
                  <div className="p-2 md:p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center gap-1 md:gap-2 mb-1">
                      <User className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
                      <span className="text-xs text-slate-400">Client</span>
                    </div>
                    <p className="text-white font-semibold text-xs md:text-sm truncate">
                      {currentProject.client}
                    </p>
                  </div>
                )}

                {/* <div className="p-2 md:p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center gap-1 md:gap-2 mb-1">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4 text-purple-400" />
                    <span className="text-xs text-slate-400">Année</span>
                  </div>
                  <p className="text-white font-semibold text-xs md:text-sm">
                    {currentProject.year}
                  </p>
                </div>

                <div className="p-2 md:p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center gap-1 md:gap-2 mb-1">
                    <Clock className="w-3 h-3 md:w-4 md:h-4 text-cyan-400" />
                    <span className="text-xs text-slate-400">Durée</span>
                  </div>
                  <p className="text-white font-semibold text-xs md:text-sm">
                    {currentProject.duration}
                  </p>
                </div> */}

                {!!currentProject.link && (
                  <div className="p-2 md:p-3 bg-white/5 rounded-lg border border-white/10">
                    <a
                      href={currentProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 md:gap-2 text-green-400 hover:text-green-300 transition-colors group"
                    >
                      <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                      <span className="text-xs md:text-sm font-semibold">
                        Voir
                      </span>
                    </a>
                  </div>
                )}
              </div>

              {/* Technologies - Compact */}
              <div className="mb-3 md:mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Code2 className="w-3 h-3 md:w-4 md:h-4 text-indigo-400" />
                  <h4 className="text-white font-bold text-xs md:text-sm">
                    Technologies
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5 z-50">
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
                    <h4 className="text-white font-bold text-xs md:text-sm">
                      Challenge
                    </h4>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-2 md:line-clamp-none">
                    {currentProject.challenge}
                  </p>
                </div>

                <div className="p-2 md:p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Lightbulb className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
                    <h4 className="text-white font-bold text-xs md:text-sm">
                      Solution
                    </h4>
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
                  ? "ring-2 md:ring-3 ring-white scale-110"
                  : "opacity-50 hover:opacity-100"
              }`}
              aria-label={`Voir ${project.title}`}
            >
              <img
                src={project.images[0]}
                className="absolute inset-0 w-full h-full object-cover blur-lg scale-110"
                aria-hidden="true"
              />
              <img
                src={project.images[0]}
                alt={project.title}
                className="relative z-10 w-full h-full object-contain"
              />
              {currentSlide === idx && (
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}
                />
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
