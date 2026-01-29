"use client";

import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-[#b6ff00]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-bold"
          >
            <span className="text-white">&lt;</span>
            <span className="text-[#b6ff00]">Durjoy</span>
            <span className="text-white">/&gt;</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-[#b6ff00] transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b6ff00] group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          {/* Resume Button & Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-gray-300 hover:text-[#b6ff00] transition-colors" />
              ) : (
                <Moon className="w-5 h-5 text-gray-300 hover:text-[#b6ff00] transition-colors" />
              )}
            </motion.button>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#b6ff00] text-black font-semibold rounded-lg hover:bg-[#9ae600] transition-all duration-300 glow-neon-hover"
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-[#b6ff00] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-[#b6ff00]/20"
          >
            <div className="px-4 py-6 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-4 py-3 text-gray-300 hover:text-[#b6ff00] hover:bg-white/5 rounded-lg transition-all"
                >
                  {link.name}
                </button>
              ))}
              <div className="flex items-center space-x-3 pt-3 border-t border-gray-800">
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="flex-1 px-4 py-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center space-x-2"
                >
                  {isDarkMode ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                  <span className="text-sm">Theme</span>
                </button>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 bg-[#b6ff00] text-black font-semibold rounded-lg hover:bg-[#9ae600] transition-all text-center"
                >
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
