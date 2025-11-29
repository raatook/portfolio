// lib/data/portfolio.ts
// Données centralisées pour SSR et SEO

export interface Project {
    id: number;
    title: string;
    description: string;
    images: string[];
    tags: string[];
    client?: string;
    year: string;
    duration: string;
    link?: string;
    challenge: string;
    solution: string;
    color: string;
  }
  
  export interface Service {
    id: number;
    icon: string;
    title: string;
    description: string;
    color: string;
    bgColor: string;
  }
  
  export interface TechStack {
    name: string;
    icon: string;
    color: string;
  }
  
  export interface Stat {
    value: string;
    label: string;
    emoji: string;
  }
  
  export interface AddedValue {
    icon: any; // Lucide icon component
    title: string;
    description: string;
    color: string;
  }
  
  // ========================================
  // DONNÉES PROJETS
  // ========================================
  
  export const projectsData: Project[] = [
    {
      id: 1,
      title: "Plateforme de gestion intégrale pour centre de formation",
      description:
        "Application web complète permettant d'administrer les élèves, les professeurs, les formations, les plannings, les notes, les devoirs, les documents et les absences grâce à un tableau de bord moderne et automatisé.",
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
        "Unifier dans une seule plateforme des modules auparavant gérés sur des outils dispersés (Excel, Google Drive, WhatsApp). Permettre une gestion fiable des plannings et notes avec des droits d'accès stricts.",
      solution:
        "Conception d'un back-office modulaire avec gestion des rôles, génération automatique de documents, notifications internes, suivi des élèves et système d'absences sophistiqué. Optimisation des performances avec Livewire.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Application mobile ludique de découverte des édifices historiques",
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
        "Développement d'un moteur 3D léger avec Three.js, mise en place d'un système de quiz/XP, optimisation du cache mobile et intégration d'un CMS pour la gestion des récits et médias.",
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
        "Mise en place d'un système de chat transactionnel, gestion dynamique des tarifs, automatisation des notifications, tableaux de bord pour hôteliers et intégration Stripe pour les paiements.",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 4,
      title: "Application mobile sociale pour la gestion d'événements",
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
  
  // ========================================
  // DONNÉES SERVICES
  // ========================================
  
  export const servicesData: Service[] = [
    {
      id: 1,
      icon: "fa-code",
      title: "Développement Web",
      description: "Applications web modernes, performantes et responsive",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
    },
    {
      id: 2,
      icon: "fa-mobile-alt",
      title: "Développement Mobile",
      description: "Apps natives et cross-platform iOS & Android",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
    },
    {
      id: 3,
      icon: "fa-database",
      title: "Data Engineering",
      description: "Architecture data, ETL, analyse de données",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
    },
    {
      id: 4,
      icon: "fa-brain",
      title: "Intelligence Artificielle",
      description: "Solutions IA, Machine Learning, NLP",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
    },
    {
      id: 5,
      icon: "fa-rocket",
      title: "Déploiement & DevOps",
      description: "CI/CD, containerisation, cloud",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-500/10",
    },
    {
      id: 6,
      icon: "fa-tools",
      title: "Maintenance & Support",
      description: "Monitoring, debugging, évolutions",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10",
    },
  ];
  
  // ========================================
  // TECH STACK
  // ========================================
  
  export const techStackData: TechStack[] = [
    { name: "ReactJS", icon: "fa-brands fa-react", color: "#61DAFB" },
    { name: "Ionic", icon: "fa-brands fa-react", color: "#61DAFB" },
    { name: "Next.js", icon: "fa-solid fa-n", color: "#000000" },
    { name: "Vue.js", icon: "fa-brands fa-vuejs", color: "#4FC08D" },
    { name: "Angular", icon: "fa-brands fa-angular", color: "#DD0031" },
    { name: "Node.js", icon: "fa-brands fa-node-js", color: "#339933" },
    { name: "PHP", icon: "fa-brands fa-php", color: "#777BB4" },
    { name: "Laravel", icon: "fa-brands fa-laravel", color: "#FF2D20" },
    { name: "Symfony", icon: "fa-brands fa-symfony", color: "#000000" },
    { name: "TypeScript", icon: "fa-solid fa-code", color: "#3178C6" },
    { name: "Python", icon: "fa-brands fa-python", color: "#3776AB" },
    { name: "MySQL", icon: "fa-solid fa-database", color: "#4479A1" },
    { name: "PostgreSQL", icon: "fa-solid fa-database", color: "#4169E1" },
    { name: "MongoDB", icon: "fa-solid fa-database", color: "#47A248" },
    { name: "SQLite", icon: "fa-solid fa-database", color: "#003B57" },
    { name: "Docker", icon: "fa-brands fa-docker", color: "#2496ED" },
    { name: "AWS", icon: "fa-brands fa-aws", color: "#FF9900" },
    { name: "Stripe", icon: "fa-brands fa-cc-stripe", color: "#635BFF" },
    { name: "Paypal", icon: "fa-brands fa-paypal", color: "#003087" },
    { name: "Firebase", icon: "fa-brands fa-google", color: "#FFCA28" },
    { name: "GraphQL", icon: "fa-brands fa-graphql", color: "#E10098" },
    { name: "Strapi", icon: "fa-solid fa-server", color: "#000000" },
    { name: "TailwindCSS", icon: "fa-brands fa-css3-alt", color: "#06B6D4" },
    { name: "jQuery", icon: "fa-brands fa-js", color: "#0769AD" },
    { name: "Wordpress", icon: "fa-brands fa-wordpress", color: "#21759B" },
  ];
  
  // ========================================
  // STATS
  // ========================================
  
  export const statsData: Stat[] = [
    { value: "Divers", label: "Projets", emoji: "💼" },
    { value: "5+", label: "Années", emoji: "🚀" },
    { value: "100%", label: "Satisfaction", emoji: "⭐" },
  ];