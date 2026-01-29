"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "./SectionWrapper";

const skillCategories = [
  {
    title: "LANGUAGES",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
    ],
  },
  {
    title: "FRONTEND",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Vue.js", level: 80 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    title: "BACKEND",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 85 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    title: "TOOLS & DEVOPS",
    skills: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 85 },
      { name: "AWS", level: 80 },
      { name: "CI/CD", level: 85 },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper
      id="skills"
      title="TECHNICAL ARSENAL"
      subtitle="Technologies and tools I use to bring ideas to life"
    >
      <div
        ref={ref}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#b6ff00]/30 transition-all duration-300"
          >
            <h3 className="text-[#b6ff00] font-semibold mb-6 text-sm tracking-wider">
              {category.title}
            </h3>
            <div className="space-y-5">
              {category.skills.map((skill, skillIndex) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white text-sm">{skill.name}</span>
                    <span className="text-gray-400 text-xs">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={
                        isInView ? { width: `${skill.level}%` } : { width: 0 }
                      }
                      transition={{
                        duration: 1,
                        delay: categoryIndex * 0.1 + skillIndex * 0.1,
                        ease: "easeOut",
                      }}
                      className="h-full bg-gradient-to-r from-[#b6ff00] to-[#9ae600] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
