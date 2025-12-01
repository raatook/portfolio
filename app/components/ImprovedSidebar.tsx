//app/components/ImprovedSidebar.tsx
"use client";

import { useState, useEffect } from "react";
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  MessageSquare,
  User,
  CheckCircle,
} from "lucide-react";
import { useChangeLocale, useCurrentLocale } from "@/app/locales/client";

export default function ImprovedSidebar() {
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Hooks i18n
  const currentLocale = useCurrentLocale();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "projects"];
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
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        alert("Erreur lors de l'envoi du message");
      }
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'envoi du message");
    } finally {
      setIsSubmitting(false);
    }
  };

  const navItems = [
    { id: "home", label: { fr: "Accueil", en: "Home" } },
    { id: "services", label: { fr: "Services", en: "Services" } },
    { id: "projects", label: { fr: "Projets", en: "Projects" } },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside
      className="
  max-[720px]:hidden min-[720px]:fixed
  right-0 top-0
  w-80 lg:w-96
  h-screen
  overflow-y-auto
  bg-slate-50 border-l-4 border-slate-200 shadow-xl
  z-50
"
    >
      <div className="space-y-4">
        {/* Navigation Menu - Compact */}
        {/* Navigation Menu - Icons only */}
        <div className="flex justify-around w-full mb-4 mt-2">
          {navItems.map((item) => {
            let IconComponent;
            switch (item.id) {
              case "home":
                IconComponent = User;
                break;
              case "services":
                IconComponent = Globe;
                break;
              case "projects":
                IconComponent = CheckCircle;
                break;
              default:
                IconComponent = User;
            }

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex-1 p-3 rounded-lg transition-all flex flex-col items-center justify-center gap-1 ${
                  activeSection === item.id
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-slate-600 bg-slate-100 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="text-[10px] font-medium">
                  {item.label[currentLocale]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Contact Info - Ultra Compact */}
        <div className="p-4 space-y-3">
          <h3 className="text-slate-900 font-semibold mb-2 text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            {currentLocale === "fr" ? "Contactez-moi" : "Contact Me"}
          </h3>
          <div className="space-y-2">
            <a
              href="mailto:contact@exemple.com"
              className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-indigo-100 via-indigo-50 to-indigo-100 shadow-md hover:scale-105 hover:shadow-xl transition-all"
            >
              <Mail className="w-5 h-5 text-indigo-600 flex-shrink-0" />
              <span className="text-slate-900 font-medium truncate">
                contact@exemple.com
              </span>
            </a>
            <a
              href="tel:+33612345678"
              className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-purple-100 via-purple-50 to-purple-100 shadow-md hover:scale-105 hover:shadow-xl transition-all"
            >
              <Phone className="w-5 h-5 text-purple-600 flex-shrink-0" />
              <span className="text-slate-900 font-medium">
                +33 6 12 34 56 78
              </span>
            </a>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-pink-100 via-pink-50 to-pink-100 shadow-md hover:scale-105 hover:shadow-xl transition-all">
              <MapPin className="w-5 h-5 text-pink-600 flex-shrink-0" />
              <span className="text-slate-900 font-medium">Paris, France</span>
            </div>
          </div>
        </div>

        {/* Social Links - Compact */}
        <div className="flex gap-2 justify-center p-4">
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white rounded-lg flex items-center justify-center hover:bg-slate-100 transition-all group border border-slate-200 shadow-sm"
              aria-label={social.label}
            >
              <social.icon className="w-4 h-4 text-slate-600 group-hover:text-slate-900 transition-colors" />
            </a>
          ))}
        </div>

        {/* Separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent my-2" />

        {/* Contact Form - Highlighted */}
        <div className="relative bg-gradient-to-br from-white via-red-50 to-orange-50 rounded-2xl p-5 border-2 border-red-300 shadow-2xl animate-bounce-slow">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg">
              <Send className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-slate-900 font-bold text-base">
              {currentLocale === "fr" ? "Envoyez un message" : "Send a message"}
            </h3>
          </div>

          <div className="space-y-3">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder={currentLocale === "fr" ? "Votre nom" : "Your name"}
                className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:border-red-400 focus:ring-2 focus:ring-red-100 focus:outline-none transition-all"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Email"
                className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:border-red-400 focus:ring-2 focus:ring-red-100 focus:outline-none transition-all"
              />
            </div>

            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                placeholder={
                  currentLocale === "fr"
                    ? "Votre message..."
                    : "Your message..."
                }
                className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:border-red-400 focus:ring-2 focus:ring-red-100 focus:outline-none resize-none transition-all"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting || isSuccess}
              className="w-full py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white text-sm font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-red-500/50 hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
            >
              {isSuccess ? (
                <span className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  {currentLocale === "fr"
                    ? "Message envoyé !"
                    : "Message sent!"}
                </span>
              ) : isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {currentLocale === "fr" ? "Envoi en cours..." : "Sending..."}
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  {currentLocale === "fr"
                    ? "Envoyer le message"
                    : "Send message"}
                  <Send className="w-4 h-4" />
                </span>
              )}
            </button>
            <p className="mt-3 text-center text-sm text-slate-500 italic">
              {currentLocale === "fr"
                ? "Parlez-moi de votre projet !"
                : "Tell me about your project!"}
            </p>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-200/30 to-transparent rounded-full blur-2xl -z-10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-200/30 to-transparent rounded-full blur-2xl -z-10" />
        </div>
      </div>
    </aside>
  );
}
