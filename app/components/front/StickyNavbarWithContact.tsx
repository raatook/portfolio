"use client";

import { useState, useEffect } from "react";
import { Globe, Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, MessageSquare, User, CheckCircle } from "lucide-react";
import { useChangeLocale, useCurrentLocale } from "@/app/locales/client";

export default function StickyNavbarWithContact() {
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Hooks i18n
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "projects", "about"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const navItems = [
    { id: "home", label: { fr: "Accueil", en: "Home" } },
    { id: "services", label: { fr: "Services", en: "Services" } },
    { id: "projects", label: { fr: "Projets", en: "Projects" } }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex">
      {/* Main Content Area */}
      <div className="flex-1">
        {/* Votre contenu principal ici */}
      </div>

      {/* Right Sidebar - Sticky Column */}
      <div className="hidden xl:block w-96 sticky top-0 h-screen overflow-y-auto bg-slate-950/95 backdrop-blur-xl border-l border-white/10">
        <div className="p-6 space-y-6">
          {/* Navigation Menu */}
          <div>
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full" />
              Navigation
            </h3>
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? "bg-indigo-600 text-white"
                      : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  {item.label[currentLocale as keyof typeof item.label]}
                </button>
              ))}
            </div>
          </div>

          {/* Language Switcher avec i18n */}
          <div>
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <Globe className="w-4 h-4 text-indigo-400" />
              Langue
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => changeLocale('fr')}
                className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  currentLocale === "fr"
                    ? "bg-indigo-600 text-white"
                    : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                🇫🇷 FR
              </button>
              <button
                onClick={() => changeLocale('en')}
                className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  currentLocale === "en"
                    ? "bg-indigo-600 text-white"
                    : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                🇬🇧 EN
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full" />
              Contact
            </h3>
            <div className="space-y-3">
              <a href="mailto:contact@exemple.com" className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all group">
                <Mail className="w-5 h-5 text-indigo-400" />
                <span className="text-slate-300 text-sm group-hover:text-white">contact@exemple.com</span>
              </a>
              <a href="tel:+33612345678" className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all group">
                <Phone className="w-5 h-5 text-purple-400" />
                <span className="text-slate-300 text-sm group-hover:text-white">+33 6 12 34 56 78</span>
              </a>
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                <MapPin className="w-5 h-5 text-pink-400" />
                <span className="text-slate-300 text-sm">Paris, France</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-2">
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Twitter, href: "#" }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all group"
              >
                <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white" />
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <h3 className="text-white font-bold mb-4">Message rapide</h3>
            
            <div className="space-y-3">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Nom"
                  className="w-full pl-10 pr-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="Email"
                  className="w-full pl-10 pr-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={3}
                  placeholder="Message..."
                  className="w-full pl-10 pr-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-slate-500 focus:border-indigo-500 focus:outline-none resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting || isSuccess}
                className="w-full py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all disabled:opacity-50"
              >
                {isSuccess ? (
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Envoyé !
                  </span>
                ) : isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Envoi...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Envoyer
                    <Send className="w-4 h-4" />
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}