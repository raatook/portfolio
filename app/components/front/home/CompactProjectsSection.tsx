"use client";

import { useState } from "react";
import { ExternalLink, X, Calendar, User, Clock, Code2, Target, Lightbulb, ChevronLeft, ChevronRight } from "lucide-react";

export default function CompactProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Plateforme complète avec paiement intégré",
      shortDesc: "Solution e-commerce moderne",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop"
      ],
      tags: ["React", "Node.js", "MongoDB"],
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
      shortDesc: "Tableau de bord analytique",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop"
      ],
      tags: ["Vue.js", "D3.js", "Python"],
      client: "DataCorp",
      year: "2024",
      duration: "4 mois",
      link: "https://example.com",
      challenge: "Visualiser des millions de points de données de manière interactive et performante.",
      solution: "Utilisation de D3.js pour les visualisations et WebSocket pour les mises à jour en temps réel.",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Application bancaire sécurisée",
      shortDesc: "App mobile bancaire",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop"
      ],
      tags: ["React Native", "Firebase"],
      client: "SecureBank",
      year: "2023",
      duration: "8 mois",
      link: "https://example.com",
      challenge: "Assurer une sécurité maximale tout en offrant une expérience utilisateur fluide.",
      solution: "Authentification biométrique, chiffrement end-to-end et architecture sécurisée.",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "AI Chatbot",
      description: "Assistant virtuel intelligent",
      shortDesc: "Chatbot IA",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&h=800&fit=crop"
      ],
      tags: ["Python", "TensorFlow", "NLP"],
      client: "AI Solutions",
      year: "2024",
      duration: "5 mois",
      link: "https://example.com",
      challenge: "Créer un assistant capable de comprendre le contexte et les intentions utilisateur.",
      solution: "Modèles NLP avancés avec fine-tuning sur données spécifiques du domaine.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const openModal = (projectId: number) => {
    setSelectedProject(projectId);
    setCurrentImage(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const project = selectedProject !== null ? projects.find(p => p.id === selectedProject) : null;

  const nextImage = () => {
    if (project) {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (project) {
      setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-slate-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent">
              Mes Réalisations
            </span>
          </h2>
          <p className="text-slate-600 text-lg">Projets récents et cas d'usage</p>
        </div>

        {/* Compact Grid - 4 cards visible */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((proj) => (
            <button
              key={proj.id}
              onClick={() => openModal(proj.id)}
              className="group relative bg-white rounded-xl overflow-hidden border-2 border-slate-200 hover:border-indigo-400 transition-all hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white font-bold text-sm mb-1">{proj.title}</h3>
                  <p className="text-slate-300 text-xs">{proj.shortDesc}</p>
                </div>
              </div>

              <div className="p-3">
                <div className="flex flex-wrap gap-1 mb-2">
                  {proj.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-slate-100 rounded text-slate-600 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                  {proj.tags.length > 2 && (
                    <span className="px-2 py-1 bg-slate-100 rounded text-slate-600 text-xs font-medium">
                      +{proj.tags.length - 2}
                    </span>
                  )}
                </div>
                <div className="text-indigo-600 text-xs font-semibold flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Voir détails <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal - Compact & Scrollable */}
      {selectedProject !== null && project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={closeModal}>
          <div 
            className="relative bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-slate-100 transition-all"
            >
              <X className="w-5 h-5 text-slate-900" />
            </button>

            {/* Content */}
            <div className="p-8">
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-3xl font-black text-slate-900 mb-2">{project.title}</h2>
                <p className="text-slate-600">{project.description}</p>
              </div>

              {/* Image Gallery - Compact */}
              <div className="relative mb-6">
                <div className="relative aspect-video rounded-2xl overflow-hidden">
                  <img
                    src={project.images[currentImage]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />

                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-all"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-all"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/50 text-white text-xs font-medium">
                        {currentImage + 1} / {project.images.length}
                      </div>
                    </>
                  )}
                </div>

                {project.images.length > 1 && (
                  <div className="flex gap-2 justify-center mt-3">
                    {project.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImage(idx)}
                        className={`w-16 h-16 rounded-lg overflow-hidden transition-all ${
                          currentImage === idx ? 'ring-2 ring-indigo-500 scale-110' : 'opacity-50 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Info Grid - Compact */}
              <div className="grid grid-cols-4 gap-3 mb-6">
                {[
                  { icon: User, label: "Client", value: project.client, color: "blue" },
                  { icon: Calendar, label: "Année", value: project.year, color: "purple" },
                  { icon: Clock, label: "Durée", value: project.duration, color: "cyan" },
                  { icon: ExternalLink, label: "Lien", value: "Voir", color: "green", isLink: true }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <div className={`w-8 h-8 rounded-lg bg-${item.color}-100 flex items-center justify-center mb-2`}>
                      <item.icon className={`w-4 h-4 text-${item.color}-600`} />
                    </div>
                    <p className="text-xs text-slate-500 mb-1">{item.label}</p>
                    {item.isLink ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-semibold text-sm">
                        {item.value} →
                      </a>
                    ) : (
                      <p className="text-slate-900 font-bold text-sm">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-indigo-600" />
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-100 rounded-lg text-slate-700 font-semibold text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenge & Solution - Compact */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-orange-50 rounded-xl border border-orange-200">
                  <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4 text-orange-600" />
                    Challenge
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">{project.challenge}</p>
                </div>

                <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                  <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-green-600" />
                    Solution
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">{project.solution}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}