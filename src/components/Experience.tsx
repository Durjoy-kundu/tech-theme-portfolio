"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const experiences = [
  {
    company: "TechCorp Solutions",
    position: "Senior Software Engineer",
    period: "January 2022 - Present",
    location: "San Francisco, CA",
    type: "CURRENT POSITION",
    description:
      "Leading development of cloud-native applications using microservices architecture. Mentoring junior developers and establishing best practices.",
    achievements: [
      "Architected and deployed scalable microservices handling 1M+ requests/day",
      "Reduced infrastructure costs by 40% through optimization",
      "Led team of 5 developers in agile environment",
    ],
    technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
  },
  {
    company: "Digital Innovations Inc",
    position: "Full Stack Developer",
    period: "March 2020 - December 2021",
    location: "Remote",
    type: "PAST ROLE",
    description:
      "Developed and maintained multiple client projects using modern web technologies. Collaborated with cross-functional teams.",
    achievements: [
      "Built 10+ production-ready web applications",
      "Improved application performance by 60%",
      "Implemented CI/CD pipelines reducing deployment time by 70%",
    ],
    technologies: ["Vue.js", "Express", "MongoDB", "Redis", "Azure"],
  },
  {
    company: "StartupXYZ",
    position: "Software Engineer",
    period: "June 2019 - February 2020",
    location: "New York, NY",
    type: "PAST ROLE",
    description:
      "Early-stage startup experience building MVP products. Wore multiple hats and contributed to product decisions.",
    achievements: [
      "Developed MVP from scratch in 3 months",
      "Integrated payment systems and third-party APIs",
      "Implemented responsive designs for mobile and web",
    ],
    technologies: ["React", "Firebase", "Stripe", "Tailwind CSS"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper
      id="experience"
      title="MISSION LOG"
      subtitle="Professional journey and career milestones"
    >
      <div ref={ref} className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-0 w-4 h-4 bg-[#b6ff00] rounded-full glow-neon hidden lg:block" />

            <div className="lg:ml-12 bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#b6ff00]/30 transition-all duration-300">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 bg-[#b6ff00]/10 border border-[#b6ff00]/30 rounded-full text-xs text-[#b6ff00] font-mono mb-3">
                    {exp.type}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {exp.position}
                  </h3>
                  <div className="text-[#b6ff00] font-semibold mb-2">
                    {exp.company}
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-4">{exp.description}</p>

              {/* Achievements */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">
                  Key Achievements:
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-[#b6ff00] mt-1">▹</span>
                      <span className="text-gray-300 text-sm">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-black/50 border border-white/10 rounded-md text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
