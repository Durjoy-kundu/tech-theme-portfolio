"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Green Compare Ltd",
    position: "Software Developer",
    period: "Nov 2025 - Present",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    description:
      "Contributed to 10+ projects, developing high-performance Next.js frontends and AI-driven interfaces with seamless API integration to deliver scalable, pixel-perfect experiences.",
    achievements: [
      "Architected and deployed responsive web applications using Next.js and Tailwind CSS, ensuring 95+ Core Web Vitals scores.",
      "Optimized frontend performance and asset loading, reducing initial page load times by 40% across key projects.",
      "Transformed complex Figma designs into pixel-perfect, reusable React component libraries for scalable development.",
    ],
    technologies: ["React", "Next.js", "React Native", "Docker", "PostgreSQL"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center gap-6"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-wide whitespace-nowrap">
            <span className="text-white">MISSION </span>
            <span className="text-[#b6ff00]">LOG</span>
          </h2>
          {/* Horizontal dashed line */}
          <div className="flex-1 border-t-2 border-dashed border-[#b6ff00]/50" />
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Vertical dotted line */}
          <div
            className="absolute left-[11px] top-0 bottom-0 w-[2px] hidden sm:block"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, rgba(182,255,0,0.4) 0px, rgba(182,255,0,0.4) 6px, transparent 6px, transparent 12px)",
            }}
          />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }
                }
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex gap-8 sm:gap-10"
              >
                {/* Diamond node */}
                <div className="hidden sm:flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-6 h-6 bg-[#b6ff00] mt-1 flex-shrink-0"
                    style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                  />
                </div>

                {/* Card */}
                <div className="flex-1 bg-[#111111] border border-white/10 p-6 hover:border-[#b6ff00]/40 transition-all duration-300 group relative">
                  {/* Corner brackets */}
                  <span className="absolute top-[-2px] left-[-2px] w-4 h-4 border-t-2 border-l-2 border-[#b6ff00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-[-2px] right-[-2px] w-4 h-4 border-t-2 border-r-2 border-[#b6ff00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute bottom-[-2px] left-[-2px] w-4 h-4 border-b-2 border-l-2 border-[#b6ff00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute bottom-[-2px] right-[-2px] w-4 h-4 border-b-2 border-r-2 border-[#b6ff00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Position & company */}
                  <h3 className="text-[#b6ff00] font-bold text-lg tracking-wide mb-1">
                    {exp.position.toUpperCase()}
                  </h3>
                  <p className="text-white font-mono text-sm mb-1">{exp.company}</p>

                  {/* Period & location */}
                  <div className="flex flex-wrap gap-4 text-xs text-gray-400 font-mono mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-5">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-[#b6ff00] font-bold mt-0.5 flex-shrink-0">&gt;</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 border border-white/20 text-white/80 text-xs font-mono bg-black/30 hover:border-[#b6ff00]/50 hover:text-[#b6ff00] transition-colors duration-200"
                      >
                        {tech.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
