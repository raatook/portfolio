// app/locales/en.ts
export default {
  // Layout & Navigation
  nav: {
    home: "Home",
    services: "Services",
    projects: "Projects",
  },

  // Hero Section
  hero: {
    badge: "Full Stack Developer",
    title1: "Let's Build the Future",
    title2: "Together",
    description: "Expert in {web}, {data} & {ai} development. I transform your ideas into innovative and high-performance digital solutions.",
    web: "Web",
    data: "Data",
    ia: "AI",
    stats: {
      projects: "Projects",
      years: "Years",
      satisfaction: "Satisfaction",
    },
    values: {
      performance: {
        title: "Optimal Performance",
        description: "Optimized code and scalable architectures",
      },
      security: {
        title: "Enhanced Security",
        description: "Data protection and best practices",
      },
      deployment: {
        title: "Fast Deployment",
        description: "Agile methodologies and CI/CD",
      },
      ux: {
        title: "Exceptional UX",
        description: "Intuitive and modern interfaces",
      },
      maintenance: {
        title: "Easy Maintenance",
        description: "Clean and documented code",
      },
      roi: {
        title: "Maximized ROI",
        description: "Profitable and measurable solutions",
      },
    },
  },

  // Services Section
  services: {
    badge: "Services & Expertise",
    title: "What I Offer",
    subtitle: "Powerful, fast and modern solutions",
    techStack: "Tech Stack",
    techStackSubtitle: "Main technologies",
    list: {
      web: {
        title: "Web Development",
        description: "Modern, high-performance and responsive web applications",
      },
      mobile: {
        title: "Mobile Development",
        description: "Native and cross-platform iOS & Android apps",
      },
      data: {
        title: "Data Engineering",
        description: "Data architecture, ETL, data analysis",
      },
      ai: {
        title: "Artificial Intelligence",
        description: "AI solutions, Machine Learning, NLP",
      },
      devops: {
        title: "Deployment & DevOps",
        description: "CI/CD, containerization, cloud",
      },
      maintenance: {
        title: "Maintenance & Support",
        description: "Monitoring, debugging, evolutions",
      },
    },
  },

  // Projects Section
  projects: {
    badge: "Recent Projects",
    title: "My Work",
    client: "Client",
    year: "Year",
    duration: "Duration",
    technologies: "Technologies",
    challenge: "Challenge",
    solution: "Solution",
    viewProject: "View",
    viewMore: "View more",
    prevImage: "Previous image",
    nextImage: "Next image",
    prevProject: "Previous project",
    nextProject: "Next project",
    list: {
      cfm: {
        title: "Comprehensive management platform for training center",
        description: "Complete web application for managing students, teachers, courses, schedules, grades, assignments, documents and absences through a modern and automated dashboard.",
        challenge: "Unifying modules previously managed on scattered tools (Excel, Google Drive, WhatsApp) into a single platform. Enabling reliable schedule and grade management with strict access rights.",
        solution: "Design of a modular back-office with role management, automatic document generation, internal notifications, student tracking and sophisticated absence system. Performance optimization with Livewire.",
      },
      monument: {
        title: "Educational mobile app for discovering historical buildings",
        description: "An immersive mobile experience to discover churches and monuments through anecdotes, mini-games, 3D content, historical information and guided tours.",
        challenge: "Creating an attractive cultural experience for young people while integrating reliable historical content, 3D and mini-games, without sacrificing performance.",
        solution: "Development of a lightweight 3D engine with Three.js, implementation of a quiz/XP system, mobile cache optimization and integration of a CMS for managing stories and media.",
      },
      hotel: {
        title: "Hotel booking platform with price negotiation",
        description: "Mobile application + hotel back-office allowing to search for a hotel by dates, location, number of people, negotiate prices, receive counter-offers, pay online and manage bookings.",
        challenge: "Integrating a real-time negotiation system between client and hotelier, while synchronizing availability via OpenGDS and ensuring secure payment.",
        solution: "Implementation of a transactional chat system, dynamic pricing management, notification automation, dashboards for hoteliers and Stripe integration for payments.",
      },
      events: {
        title: "Social mobile app for event management",
        description: "Create and discover events, invite friends, manage participants, chat in real-time, book via internal wallet and pay online.",
        challenge: "Managing participants, invitations, group messages and payments in real-time — all in a single high-performance app.",
        solution: "Implementation of Firebase for real-time, Strapi for content management, an internal wallet for bookings and a fluid UX inspired by modern social networks.",
      },
    },
    confidential: "Some images are blurred to respect client confidentiality."
  },

  // Contact Section (Sidebar & Floating Button)
  contact: {
    title: "Contact Me",
    quickMessage: "Quick message",
    sendMessage: "Send a message",
    name: "Your name",
    email: "Your email",
    emailPlaceholder: "Email",
    message: "Your message...",
    send: "Send message",
    sending: "Sending...",
    success: "Message sent!",
    responseTime: "I'll get back to you as soon as possible",
    talkAboutProject: "Tell me about your project!",
    close: "Close",
    location: "Paris, France",
  },

  // SEO & Meta
  seo: {
    title: "RTook - Full Stack Developer | Web, Mobile, Data & AI",
    description: "Full Stack Developer expert in React, Next.js, Laravel, Ionic. Web & mobile app development, data solutions and AI. 5+ years experience. Portfolio and projects.",
    keywords: "full stack developer, react, next.js, laravel, ionic, web development, mobile development, data engineering, artificial intelligence, paris, freelance",
  },
} as const;