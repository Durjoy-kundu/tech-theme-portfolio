"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "LANGUAGES",
    skills: ["JavaScript", "TypeScript", "C++", "Python"],
  },
  {
    title: "FRONTEND",
    skills: ["React", "Next.js", "CSS", "Tailwind CSS"],
  },
  {
    title: "BACKEND",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
  },
  {
    title: "TOOLS & DEVOPS",
    skills: ["Git", "Docker", "CI/CD"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-3 tracking-wide">
            <span className="text-white">TECHNICAL </span>
            <span className="text-[#b6ff00]">ARSENAL</span>
          </h2>
          <div className="h-[3px] w-52 bg-[#b6ff00]" />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="group relative bg-[#111111] border border-white/10 p-6 hover:border-[#b6ff00]/40 transition-all duration-300"
            >
              {/* Corner bracket decorations */}
              <span className="absolute top-[-2px] left-[-2px] w-4 h-4 border-t-2 border-l-2 border-[#b6ff00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute top-[-2px] right-[-2px] w-4 h-4 border-t-2 border-r-2 border-[#b6ff00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-[-2px] left-[-2px] w-4 h-4 border-b-2 border-l-2 border-[#b6ff00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-[-2px] right-[-2px] w-4 h-4 border-b-2 border-r-2 border-[#b6ff00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <h3 className="text-[#b6ff00] font-bold text-sm tracking-widest mb-3 font-mono">
                {category.title}
              </h3>
              <div className="h-px bg-white/10 mb-4" />
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 border border-white/20 text-white/90 text-xs font-mono bg-black/30 hover:border-[#b6ff00]/50 hover:text-[#b6ff00] transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
