// lib/data/portfolio.ts
// Données centralisées pour SSR et SEO (structure uniquement, textes via i18n)

export interface Project {
  id: number;
  key: string; // Clé pour les traductions
  images: string[];
  tags: string[];
  client?: string;
  year: string;
  duration: string;
  link?: string;
  color: string;
}

export interface Service {
  id: number;
  key: string; // Clé pour les traductions
  icon: string;
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
  labelKey: string; // Clé pour les traductions
  emoji: string;
}

// ========================================
// DONNÉES PROJETS
// ========================================

export const projectsData: Project[] = [
  {
    id: 1,
    key: "cfm", // Référence à projects.list.cfm dans les traductions
    images: [
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
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    key: "monument",
    images: [
      "/images/projet/GA/4.png",
      "/images/projet/GA/5.png",
      "/images/projet/GA/6.png",
      "/images/projet/GA/8.png",
      "/images/projet/GA/9.png",
      "/images/projet/GA/10.png",
      "/images/projet/GA/13.png",
      "/images/projet/GA/15.png",
      "/images/projet/GA/16.png",
      "/images/projet/GA/22.png",
    ],
    tags: ["React", "Ionic", "Capacitor", "Three.js"],
    client: "",
    year: "2025",
    duration: "6 mois",
    link: "",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    key: "hotel",
    images: [
      "/images/projet/Matchroom/2.png",
      "/images/projet/Matchroom/3.png",
      "/images/projet/Matchroom/5.png",
      "/images/projet/Matchroom/8.png",
      "/images/projet/Matchroom/9.png",
      "/images/projet/Matchroom/11.png",
      "/images/projet/Matchroom/12.png",
      "/images/projet/Matchroom/14.png",
      "/images/projet/Matchroom/16.png",
    ],
    tags: ["Next.js", "Supabase", "Refine", "Stripe", "OpenGDS"],
    client: "",
    year: "2024",
    duration: "8 mois",
    link: "",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    key: "events",
    images: [
      "/images/projet/Tedispo/7.png",
      "/images/projet/Tedispo/10.png",
      "/images/projet/Tedispo/11.png",
      "/images/projet/Tedispo/16.png",
      "/images/projet/Tedispo/18.png",
      "/images/projet/Tedispo/20.png",
    ],
    tags: ["React", "Ionic", "Firebase", "Capacitor", "Strapi"],
    client: "",
    year: "2022",
    duration: "8 mois",
    link: "",
    color: "from-green-500 to-emerald-500",
  },
];

// ========================================
// DONNÉES SERVICES
// ========================================

export const servicesData: Service[] = [
  {
    id: 1,
    key: "web",
    icon: "fa-code",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
  },
  {
    id: 2,
    key: "mobile",
    icon: "fa-mobile-alt",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
  },
  {
    id: 3,
    key: "data",
    icon: "fa-database",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
  },
  {
    id: 4,
    key: "ai",
    icon: "fa-brain",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
  },
  {
    id: 5,
    key: "devops",
    icon: "fa-rocket",
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    id: 6,
    key: "maintenance",
    icon: "fa-tools",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10",
  },
];

// ========================================
// TECH STACK (pas de traduction nécessaire)
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
  { value: "Divers", labelKey: "hero.stats.projects", emoji: "💼" },
  { value: "5+", labelKey: "hero.stats.years", emoji: "🚀" },
  { value: "100%", labelKey: "hero.stats.satisfaction", emoji: "⭐" },
];