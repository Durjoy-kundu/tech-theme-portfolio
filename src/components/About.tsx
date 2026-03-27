"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "./SectionWrapper";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper
      id="about"
      title="ABOUT ME"
      subtitle="Software engineer with a passion for creating innovative solutions"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="grid lg:grid-cols-2 gap-12"
      >
        {/* Left - Bio */}
        <div className="space-y-6">
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              I'm a passionate software engineer with over 1 year of experience
              in building scalable web applications. My
              journey in tech started with a curiosity for how things work, and
              it's evolved into a career focused on creating meaningful digital
              experiences.
            </p>
            <p>
              I specialize in full-stack development using modern technologies
              like React, Next.js, Node.js, MongoDB, Postgress. I
              believe in writing clean, maintainable code and following best
              practices to deliver high-quality solutions.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, solving coding problems, reading books, traveling, playing cricket, or contributing to open-source projects.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            {["Problem Solving", "Team Collaboration", "Continuous Learning"].map(
              (trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-[#b6ff00]/10 border border-[#b6ff00]/30 rounded-lg text-sm text-[#b6ff00]"
                >
                  {trait}
                </span>
              )
            )}
          </div>
        </div>

        {/* Right - Quick Facts */}
        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4 hover:border-[#b6ff00]/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#b6ff00] mb-4">
              Quick Facts
            </h3>
            <div className="space-y-3">
              {[
                { label: "Location", value: "Dhaka, Bangladesh" },
                { label: "Email", value: "durjoykundu07@gmail.com" },
                { label: "Education", value: "B.S. Computer Science" },
                { label: "Experience", value: "1+ Years" },
                { label: "Focus", value: "Full-Stack Development" },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="flex justify-between items-center pb-3 border-b border-white/5 last:border-0"
                >
                  <span className="text-gray-400">{fact.label}</span>
                  <span className="text-white font-medium">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#b6ff00]/10 to-transparent border border-[#b6ff00]/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-3 text-white">
              Current Status
            </h3>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#b6ff00] rounded-full animate-pulse" />
              <span className="text-gray-300">
                Available for freelance opportunities
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
