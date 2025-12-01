// app/components/ProjectsSection.tsx
"use client";

import {
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Code2,
  Lightbulb,
  Sparkles,
  Target,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Project } from "../lib/data/portfolio";
import { useI18n } from "../locales/client";

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const t = useI18n();

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
              {t("projects.badge")}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
            <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              {t("projects.title")}
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
                  alt={
                    t(`projects.list.${currentProject.key}.title`) +
                    ` - Image ${currentImageIndex + 1}`
                  }
                  className="relative z-10 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-slate-950/50" />

                <div
                  className="z-52
                    absolute bottom-2 left-1/2 -translate-x-1/2 
                    px-3 py-1.5 
                    rounded-lg
                    bg-red-600/90 
                    text-white text-[10px] font-bold 
                    shadow-lg shadow-red-900/50 
                    border border-white/30 
                    flex items-center gap-1 
                    backdrop-blur-sm
                    w-full
                  "
                >
                  <AlertTriangle className="w-3 h-3 text-white" />
                  {t("projects.confidential")}
                </div>

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
                  </>
                )}
              </div>
            </div>

            {/* Right: Details */}
            <div className="p-4 md:p-6 lg:p-8 flex flex-col overflow-y-auto max-h-[calc(100vh-20rem)] lg:max-h-none">
              {/* Desktop Title & Description - hidden on mobile */}
              <div className="mb-3 md:mb-4">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white mb-2">
                  {t(`projects.list.${currentProject.key}.title`)}
                </h3>
                <p className="text-slate-300 text-sm md:text-base">
                  {t(`projects.list.${currentProject.key}.description`)}
                </p>
              </div>

              {/* Technologies - Compact */}
              <div className="mb-3 md:mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Code2 className="w-3 h-3 md:w-4 md:h-4 text-indigo-400" />
                  <h4 className="text-white font-bold text-xs md:text-sm">
                    {t("projects.technologies")}
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
                      {t("projects.challenge")}
                    </h4>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-2 md:line-clamp-none">
                    {t(`projects.list.${currentProject.key}.challenge`)}
                  </p>
                </div>

                <div className="p-2 md:p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Lightbulb className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
                    <h4 className="text-white font-bold text-xs md:text-sm">
                      {t("projects.solution")}
                    </h4>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-2 md:line-clamp-none">
                    {t(`projects.list.${currentProject.key}.solution`)}
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
              aria-label={
                "Voir " + t(`projects.list.${currentProject.key}.title`)
              }
            >
              <img
                src={project.images[0]}
                className="absolute inset-0 w-full h-full object-cover blur-lg scale-110"
                aria-hidden="true"
              />
              <img
                src={project.images[0]}
                alt={t(`projects.list.${currentProject.key}.title`)}
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
