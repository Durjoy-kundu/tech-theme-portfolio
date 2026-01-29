"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Message sent! (This is a demo)");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <SectionWrapper
      id="contact"
      title="READY TO DEPLOY?"
      subtitle="Let's build something amazing together"
    >
      <div ref={ref} className="grid lg:grid-cols-2 gap-12">
        {/* Left - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Get In Touch</h3>
            <p className="text-gray-400 leading-relaxed">
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              feel free to reach out!
            </p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-4">
            <a
              href="mailto:contact@example.com"
              className="flex items-center space-x-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:border-[#b6ff00]/30 transition-all duration-300 group"
            >
              <div className="p-3 bg-[#b6ff00]/10 border border-[#b6ff00]/30 rounded-lg group-hover:bg-[#b6ff00]/20 transition-colors">
                <Mail className="w-5 h-5 text-[#b6ff00]" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Email</div>
                <div className="text-white font-medium">
                  contact@example.com
                </div>
              </div>
            </a>

            <div className="flex items-center space-x-4 p-4 bg-white/5 border border-white/10 rounded-lg">
              <div className="p-3 bg-[#b6ff00]/10 border border-[#b6ff00]/30 rounded-lg">
                <MapPin className="w-5 h-5 text-[#b6ff00]" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Location</div>
                <div className="text-white font-medium">
                  San Francisco, CA
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Connect With Me
            </h4>
            <div className="flex gap-4">
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
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-[#b6ff00] hover:bg-[#b6ff00]/10 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6 text-gray-400 group-hover:text-[#b6ff00] transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Availability Status */}
          <div className="bg-gradient-to-br from-[#b6ff00]/10 to-transparent border border-[#b6ff00]/20 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-3 h-3 bg-[#b6ff00] rounded-full animate-pulse" />
              <span className="text-white font-semibold">
                Available for Work
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Currently accepting freelance projects and full-time opportunities
            </p>
          </div>
        </motion.div>

        {/* Right - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/5 border border-white/10 rounded-xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#b6ff00] focus:outline-none focus:ring-2 focus:ring-[#b6ff00]/20 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#b6ff00] focus:outline-none focus:ring-2 focus:ring-[#b6ff00]/20 transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#b6ff00] focus:outline-none focus:ring-2 focus:ring-[#b6ff00]/20 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-[#b6ff00] text-black font-semibold rounded-lg hover:bg-[#9ae600] transition-all duration-300 glow-neon-hover"
            >
              <span>Send Message</span>
              <Send className="w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-20 pt-8 border-t border-white/10 text-center"
      >
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Badhan Sen. Built with Next.js, TypeScript & Tailwind CSS
        </p>
        <p className="text-gray-500 text-xs mt-2">
          Designed & Developed with <span className="text-[#b6ff00]">♥</span> in San Francisco
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
