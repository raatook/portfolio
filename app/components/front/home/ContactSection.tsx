"use client";

import { useState } from "react";
import { Send, Mail, User, MessageSquare, CheckCircle, Sparkles, Github, Linkedin, Twitter, MapPin, Phone, Heart } from "lucide-react";

export default function ContactFooterSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Mock settings data
  const settings = {
    email: "contact@exemple.com",
    phone: "+33 6 12 34 56 78",
    location: "Paris, France",
    github_url: "https://github.com",
    linkedin_url: "https://linkedin.com",
    twitter_url: "https://twitter.com",
    footer_description: "Développeur Full Stack passionné par les technologies web modernes. Créons ensemble des solutions innovantes qui font la différence."
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="max-w-7xl mx-auto px-6 py-24 relative">
        {/* Contact Form Section */}
        <div className="mb-20">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-xl mb-6">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-semibold text-indigo-300">Contact</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                Travaillons ensemble
              </span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Un projet en tête ? Discutons-en autour d'un café ☕
            </p>
          </div>

          {/* Compact Form + Contact Info Side by Side */}
          <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {/* Contact Form - 3 columns */}
            <div className="lg:col-span-3">
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
                <div className="p-8">
                  {/* Name & Email in one row */}
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="group relative">
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Nom
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          placeholder="John Doe"
                          className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-white/10 bg-white/5 text-white placeholder-slate-500 focus:border-indigo-500 focus:bg-white/10 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="group relative">
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="john@exemple.com"
                          className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-white/10 bg-white/5 text-white placeholder-slate-500 focus:border-indigo-500 focus:bg-white/10 focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="group relative mb-6">
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                      <textarea
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        rows={5}
                        placeholder="Parlez-moi de votre projet..."
                        className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-white/10 bg-white/5 text-white placeholder-slate-500 focus:border-indigo-500 focus:bg-white/10 focus:outline-none transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting || isSuccess}
                    className="group relative w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSuccess ? (
                      <span className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Message envoyé !
                      </span>
                    ) : isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Envoi...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Envoyer
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    )}
                  </button>
                </div>

                <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
              </div>
            </div>

            {/* Contact Info Cards - 2 columns */}
            <div className="lg:col-span-2 space-y-4">
              {/* Email */}
              <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Email</p>
                    <a
                      href={`mailto:${settings.email}`}
                      className="text-white font-semibold hover:text-indigo-400 transition-colors break-words"
                    >
                      {settings.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Téléphone</p>
                    <a
                      href={`tel:${settings.phone}`}
                      className="text-white font-semibold hover:text-purple-400 transition-colors"
                    >
                      {settings.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-pink-500/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Localisation</p>
                    <p className="text-white font-semibold">
                      {settings.location}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                {[
                  { icon: Github, url: settings.github_url, color: 'hover:from-gray-600 hover:to-gray-700' },
                  { icon: Linkedin, url: settings.linkedin_url, color: 'hover:from-blue-600 hover:to-blue-700' },
                  { icon: Twitter, url: settings.twitter_url, color: 'hover:from-sky-500 hover:to-sky-600' }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:scale-110 hover:border-white/20 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}