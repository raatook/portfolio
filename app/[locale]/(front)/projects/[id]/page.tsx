// app/[locale]/(front)/projects/[id]/page.tsx
"use client";

import { useState } from "react";
import { ArrowLeft, Calendar, Clock, User, ExternalLink, Code2, Target, Lightbulb, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectDetailPage() {
  const [currentImage, setCurrentImage] = useState(0);

  // Mock data
  const project = {
    title: "E-Commerce Platform",
    description: "Plateforme e-commerce moderne avec gestion avancée des stocks",
    client: "TechStore Inc.",
    year: "2024",
    duration: "6 mois",
    link: "https://example.com",
    images: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop"
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Stripe", "AWS"],
    challenge: "Créer une expérience d'achat fluide avec un système de paiement sécurisé et une gestion complexe des stocks en temps réel.",
    solution: "Architecture microservices avec React pour le front, Node.js pour l'API, et MongoDB pour la base de données. Intégration de Stripe pour les paiements sécurisés."
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Compact Header */}
      <header className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <button className="group inline-flex items-center gap-2 text-indigo-300 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Retour aux projets
          </button>

          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            {project.description}
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Image Gallery - Compact Carousel */}
        <div className="relative mb-16 -mt-32">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group">
            <img
              src={project.images[currentImage]}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Navigation Arrows */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-xl text-white text-sm font-medium">
              {currentImage + 1} / {project.images.length}
            </div>
          </div>

          {/* Thumbnails */}
          {project.images.length > 1 && (
            <div className="flex gap-3 justify-center mt-4">
              {project.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden transition-all ${
                    currentImage === idx ? 'ring-4 ring-indigo-500 scale-110' : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Compact Info Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-16">
          {[
            { icon: User, label: "Client", value: project.client, color: "blue" },
            { icon: Calendar, label: "Année", value: project.year, color: "purple" },
            { icon: Clock, label: "Durée", value: project.duration, color: "cyan" },
            { icon: ExternalLink, label: "Lien", value: "Voir", color: "green", isLink: true }
          ].map((item, idx) => (
            <div key={idx} className="group p-6 bg-white rounded-2xl border-2 border-slate-200 hover:border-indigo-400 transition-all hover:shadow-xl">
              <div className={`w-12 h-12 rounded-xl bg-${item.color}-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className={`w-6 h-6 text-${item.color}-600`} />
              </div>
              <p className="text-sm text-slate-500 mb-1">{item.label}</p>
              {item.isLink ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-semibold flex items-center gap-1">
                  {item.value} →
                </a>
              ) : (
                <p className="text-slate-900 font-bold">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Technologies - Compact */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-black text-slate-900">Technologies</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-5 py-3 bg-white rounded-xl border-2 border-slate-200 text-slate-700 font-semibold hover:border-indigo-400 hover:bg-indigo-50 transition-all hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenge & Solution - Side by Side Compact */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          <div className="group p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl border-2 border-orange-200 hover:shadow-xl transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-black text-slate-900">Challenge</h2>
            </div>
            <p className="text-slate-700 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="group p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl border-2 border-green-200 hover:shadow-xl transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-black text-slate-900">Solution</h2>
            </div>
            <p className="text-slate-700 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] transition-all hover:scale-105">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Retour aux projets
          </button>
        </div>
      </div>
    </div>
  );
}