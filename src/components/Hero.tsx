"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, MapPin } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import the Globe component to avoid SSR issues with Three.js
const Globe3D = dynamic(() => import("./Globe3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-[#b6ff00] border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="inline-flex">
              <div className="flex items-center space-x-2 px-4 py-2 bg-[#b6ff00]/10 border border-[#b6ff00]/30 rounded-full">
                <div className="w-2 h-2 bg-[#b6ff00] rounded-full animate-pulse" />
                <span className="text-sm text-[#b6ff00] font-mono">
                  SYSTEM ONLINE
                </span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="text-white">DURJOY</span>
              <br />
              <span className="text-[#b6ff00]">KUNDU</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-mono">
                <span className="text-[#b6ff00]">//</span> Software Engineer
              </h2>
              <p className="text-base sm:text-lg text-gray-400 max-w-xl">
                Building scalable applications with modern technologies.
                Specializing in full-stack development, cloud solutions, and
                cutting-edge web experiences.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:border-[#b6ff00] hover:bg-white/10 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 group-hover:text-[#b6ff00] transition-colors" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-[#b6ff00] text-black font-semibold rounded-lg hover:bg-[#9ae600] transition-all duration-300 glow-neon-hover"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-8 max-w-md"
            >
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-[#b6ff00]">
                  1+
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  Years Experience
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-[#b6ff00]">
                  5+
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  Projects Done
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-[#b6ff00]">
                  5+
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  Technologies
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Globe and Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            {/* 3D Globe */}
            <div className="w-full aspect-square max-w-lg mx-auto relative">
              <Globe3D />

              {/* Profile Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute bottom-8 right-0 bg-black/80 backdrop-blur-md border border-[#b6ff00]/30 rounded-lg p-4 glow-neon"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#b6ff00] to-[#9ae600] rounded-full flex items-center justify-center text-black font-bold text-xl">
                    BS
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Badhan Sen
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-gray-400">
                      <MapPin className="w-3 h-3" />
                      <span>San Francisco, CA</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs text-gray-500 font-mono">SCROLL</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-500 rounded-full p-1"
            >
              <div className="w-1 h-3 bg-[#b6ff00] rounded-full mx-auto" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
