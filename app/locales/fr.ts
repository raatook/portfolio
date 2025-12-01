// app/locales/fr.ts
export default {
  // Layout & Navigation
  nav: {
    home: "Accueil",
    services: "Services",
    projects: "Projets",
  },

  // Hero Section
  hero: {
    badge: "Développeur Full Stack",
    title1: "Créons l'Avenir",
    title2: "Ensemble",
    description: "Expert en développement {web}, {data} & {ia}. Je transforme vos idées en solutions digitales innovantes et performantes.",
    web: "Web",
    data: "Data",
    ia: "IA",
    stats: {
      projects: "Projets",
      years: "Années",
      satisfaction: "Satisfaction",
    },
    values: {
      performance: {
        title: "Performance Optimale",
        description: "Code optimisé et architectures scalables",
      },
      security: {
        title: "Sécurité Renforcée",
        description: "Protection des données et best practices",
      },
      deployment: {
        title: "Déploiement Rapide",
        description: "Méthodologies agiles et CI/CD",
      },
      ux: {
        title: "UX Exceptionnelle",
        description: "Interfaces intuitives et modernes",
      },
      maintenance: {
        title: "Maintenance Facilitée",
        description: "Code propre et documenté",
      },
      roi: {
        title: "ROI Maximisé",
        description: "Solutions rentables et mesurables",
      },
    },
  },

  // Services Section
  services: {
    badge: "Services & Expertise",
    title: "Ce que je propose",
    subtitle: "Solutions puissantes, rapides et modernes",
    techStack: "Stack Technique",
    techStackSubtitle: "Technologies principales",
    list: {
      web: {
        title: "Développement Web",
        description: "Applications web modernes, performantes et responsive",
      },
      mobile: {
        title: "Développement Mobile",
        description: "Apps natives et cross-platform iOS & Android",
      },
      data: {
        title: "Data Engineering",
        description: "Architecture data, ETL, analyse de données",
      },
      ai: {
        title: "Intelligence Artificielle",
        description: "Solutions IA, Machine Learning, NLP",
      },
      devops: {
        title: "Déploiement & DevOps",
        description: "CI/CD, containerisation, cloud",
      },
      maintenance: {
        title: "Maintenance & Support",
        description: "Monitoring, debugging, évolutions",
      },
    },
  },

  // Projects Section
  projects: {
    badge: "Projets Récents",
    title: "Mes Réalisations",
    client: "Client",
    year: "Année",
    duration: "Durée",
    technologies: "Technologies",
    challenge: "Challenge",
    solution: "Solution",
    viewProject: "Voir",
    viewMore: "Voir plus",
    prevImage: "Image précédente",
    nextImage: "Image suivante",
    prevProject: "Projet précédent",
    nextProject: "Projet suivant",
    list: {
      cfm: {
        title: "Plateforme de gestion intégrale pour centre de formation",
        description: "Application web complète permettant d'administrer les élèves, les professeurs, les formations, les plannings, les notes, les devoirs, les documents et les absences grâce à un tableau de bord moderne et automatisé.",
        challenge: "Unifier dans une seule plateforme des modules auparavant gérés sur des outils dispersés (Excel, Google Drive, WhatsApp). Permettre une gestion fiable des plannings et notes avec des droits d'accès stricts.",
        solution: "Conception d'un back-office modulaire avec gestion des rôles, génération automatique de documents, notifications internes, suivi des élèves et système d'absences sophistiqué. Optimisation des performances avec Livewire.",
      },
      monument: {
        title: "Application mobile ludique de découverte des édifices historiques",
        description: "Une expérience mobile immersive permettant de découvrir des églises et monuments grâce à des anecdotes, mini-jeux, contenus 3D, informations historiques et parcours guidés.",
        challenge: "Créer une expérience culturelle attractive pour les jeunes tout en intégrant du contenu historique fiable, de la 3D et des mini-jeux, sans sacrifier les performances.",
        solution: "Développement d'un moteur 3D léger avec Three.js, mise en place d'un système de quiz/XP, optimisation du cache mobile et intégration d'un CMS pour la gestion des récits et médias.",
      },
      hotel: {
        title: "Plateforme de réservation d'hôtels avec négociation de prix",
        description: "Application mobile + backoffice hôtelier permettant de rechercher un hôtel selon dates, localisation, nb de personnes, négocier les prix, recevoir des contre-offres, payer en ligne et gérer les réservations.",
        challenge: "Intégrer un système de négociation en temps réel entre client et hôtelier, tout en synchronisant les disponibilités via OpenGDS et en assurant un paiement sécurisé.",
        solution: "Mise en place d'un système de chat transactionnel, gestion dynamique des tarifs, automatisation des notifications, tableaux de bord pour hôteliers et intégration Stripe pour les paiements.",
      },
      events: {
        title: "Application mobile sociale pour la gestion d'événements",
        description: "Créer et découvrir des événements, inviter des amis, gérer les participants, discuter en direct, réserver via wallet interne et payer en ligne.",
        challenge: "Gérer en temps réel les participants, invitations, messages groupés et paiements — le tout dans une seule app performante.",
        solution: "Mise en place de Firebase pour le temps réel, Strapi pour la gestion des contenus, un wallet interne pour les réservations et une UX fluide inspirée des réseaux sociaux modernes.",
      },
    },
    confidential: "Certaines images sont floutées pour respecter la confidentialité du client."
  },

  // Contact Section (Sidebar & Floating Button)
  contact: {
    title: "Contactez-moi",
    quickMessage: "Message rapide",
    sendMessage: "Envoyez un message",
    name: "Votre nom",
    email: "Votre email",
    emailPlaceholder: "Email",
    message: "Votre message...",
    send: "Envoyer le message",
    sending: "Envoi en cours...",
    success: "Message envoyé !",
    responseTime: "Je vous répondrai dans les plus brefs délais",
    talkAboutProject: "Parlez-moi de votre projet !",
    close: "Fermer",
    location: "Paris, France",
  },

  // SEO & Meta
  seo: {
    title: "RTook - Développeur Full Stack | Web, Mobile, Data & IA",
    description: "Développeur Full Stack expert en React, Next.js, Laravel, Ionic. Création d'applications web, mobile, solutions data et IA. 5+ ans d'expérience. Portfolio et projets.",
    keywords: "développeur full stack, react, next.js, laravel, ionic, développement web, développement mobile, data engineering, intelligence artificielle, paris, freelance",
  },
} as const;