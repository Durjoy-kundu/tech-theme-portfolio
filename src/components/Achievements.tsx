"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, Star, TrendingUp } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const achievements = [
  {
    icon: Trophy,
    title: "Hackathon Winner",
    description: "First place at TechCon 2023",
    detail: "Built an AI-powered solution in 48 hours",
    date: "November 2023",
    color: "#b6ff00",
  },
  {
    icon: Award,
    title: "Open Source Contributor",
    description: "100+ contributions to major projects",
    detail: "Active maintainer of popular React libraries",
    date: "Ongoing",
    color: "#b6ff00",
  },
  {
    icon: Star,
    title: "GitHub Star",
    description: "Project reached 10K+ stars",
    detail: "Portfolio template used by 1000+ developers",
    date: "September 2023",
    color: "#b6ff00",
  },
  {
    icon: TrendingUp,
    title: "Tech Speaker",
    description: "Presented at 5+ conferences",
    detail: "Topics: React, Performance, Cloud Architecture",
    date: "2023",
    color: "#b6ff00",
  },
];

const stats = [
  { label: "Coffee Consumed", value: "∞", unit: "cups" },
  { label: "Code Written", value: "1M+", unit: "lines" },
  { label: "Bugs Fixed", value: "9999", unit: "issues" },
  { label: "Team Projects", value: "50+", unit: "delivered" },
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper
      id="achievements"
      title="ACHIEVEMENTS"
      subtitle="Milestones and recognitions along the journey"
    >
      <div ref={ref} className="space-y-12">
        {/* Main Achievements */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#b6ff00]/30 transition-all duration-300 relative overflow-hidden"
              >
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#b6ff00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex items-start space-x-4">
                  {/* Icon */}
                  <div className="p-3 bg-[#b6ff00]/10 border border-[#b6ff00]/30 rounded-lg">
                    <Icon className="w-6 h-6 text-[#b6ff00]" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="text-xs text-gray-400 mb-1">
                      {achievement.date}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-[#b6ff00] text-sm mb-2">
                      {achievement.description}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {achievement.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Fun Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-br from-[#b6ff00]/10 to-transparent border border-[#b6ff00]/20 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            By The Numbers
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-[#b6ff00] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.unit}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
