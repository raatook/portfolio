//app/components/FloatingContactButton.tsx
"use client";

import { useState } from "react";
import {
  MessageCircle,
  X,
  Mail,
  User,
  Send,
  CheckCircle,
  MessageSquare,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useI18n } from "../locales/client";

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const t = useI18n();

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
        setTimeout(() => {
          setIsSuccess(false);
          setIsOpen(false);
        }, 2000);
      } else {
        alert("Erreur lors de l'envoi du message : " + data.error);
      }
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'envoi du message");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Button - visible uniquement < 720px */}
      <button
        onClick={() => setIsOpen(true)}
        className="min-[720px]:hidden fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-2xl flex items-center justify-center text-white z-50 hover:scale-110 transition-transform animate-pulse-button"
        aria-label="Ouvrir le formulaire de contact"
      >
        <MessageCircle className="w-6 h-6" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="min-[720px]:hidden fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative bg-slate-900/95 backdrop-blur-xl rounded-t-3xl sm:rounded-3xl border border-white/10 w-full max-w-md shadow-2xl animate-slideUp overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {t("contact.quickMessage")}
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <div className="p-6 space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder={t("contact.name")}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder={t("contact.email")}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  placeholder={t("contact.message")}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none resize-none transition-colors"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting || isSuccess}
                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSuccess ? (
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    {t("contact.success")}
                  </span>
                ) : isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {t("contact.sending")}
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    {t("contact.send")}
                    <Send className="w-5 h-5" />
                  </span>
                )}
              </button>

              <p className="text-center text-xs text-slate-400">
                {t("contact.responseTime")}
              </p>

              {/* Contact Infos */}
              <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
                <div className="flex items-center gap-2 text-white text-sm">
                  <Mail className="w-4 h-4 text-indigo-400" />
                  <span>tokyfreel@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-white text-sm">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span>+261 37 76 574 42</span>
                </div>
                {/* <div className="flex items-center gap-2 text-white text-sm">
                  <MapPin className="w-4 h-4 text-pink-400" />
                  <span>Paris, France</span>
                </div> */}
              </div>

              {/* Social Links */}
              {/* <div className="mt-4 flex gap-3 justify-center">
                {[
                  { icon: Github, href: "https://github.com", label: "GitHub" },
                  {
                    icon: Linkedin,
                    href: "https://linkedin.com",
                    label: "LinkedIn",
                  },
                  {
                    icon: Twitter,
                    href: "https://twitter.com",
                    label: "Twitter",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        @keyframes pulse-button {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-pulse-button {
          animation: pulse-button 1.2s infinite;
        }
      `}</style>
    </>
  );
}
