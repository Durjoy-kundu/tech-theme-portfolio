"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const projects = [
  {
    title: "Mobile AI",
    category: "MOBILE APPLICATION",
    description:
      "AI-powered mobile app that provides personalized recommendations using machine learning algorithms. Built with React Native and TensorFlow.",
    image: "🤖",
    technologies: ["React Native", "TensorFlow", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "E-commerce Platform",
    category: "WEB APPLICATION",
    description:
      "Full-featured e-commerce platform with payment integration, inventory management, and real-time analytics dashboard.",
    image: "🛍️",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "SaaS Dashboard",
    category: "ENTERPRISE SOFTWARE",
    description:
      "Modern SaaS dashboard with multi-tenancy support, role-based access control, and comprehensive analytics.",
    image: "📊",
    technologies: ["React", "Express", "AWS", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "Real-time Chat",
    category: "WEB APPLICATION",
    description:
      "Real-time messaging platform with WebSocket support, file sharing, and end-to-end encryption.",
    image: "💬",
    technologies: ["Vue.js", "Socket.io", "Redis", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
  {
    title: "Task Manager Pro",
    category: "PRODUCTIVITY TOOL",
    description:
      "Advanced task management system with kanban boards, time tracking, and team collaboration features.",
    image: "✅",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
  {
    title: "Portfolio Generator",
    category: "DEVELOPER TOOL",
    description:
      "Automated portfolio generator that creates beautiful portfolios from GitHub data and user inputs.",
    image: "🎨",
    technologies: ["Next.js", "GitHub API", "Framer Motion"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper
      id="projects"
      title="SELECTED WORKS"
      subtitle="Showcasing innovative solutions and creative implementations"
    >
      <div ref={ref} className="space-y-6">
        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[#b6ff00]/30 transition-all duration-300"
              >
                {/* Project Image/Icon */}
                <div className="aspect-video bg-gradient-to-br from-[#b6ff00]/20 to-transparent flex items-center justify-center text-6xl">
                  {project.image}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <div className="text-xs text-[#b6ff00] font-mono mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-black/50 border border-white/10 rounded text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:border-[#b6ff00] hover:text-[#b6ff00] transition-all text-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 px-4 py-2 bg-[#b6ff00] text-black rounded-lg hover:bg-[#9ae600] transition-all text-sm font-semibold"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects
              .filter((p) => !p.featured)
              .map((project) => (
                <div
                  key={project.title}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[#b6ff00]/30 transition-all duration-300"
                >
                  <div className="text-3xl mb-3">{project.image}</div>
                  <div className="text-xs text-[#b6ff00] font-mono mb-2">
                    {project.category}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-gray-400 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#b6ff00] transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#b6ff00] transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
