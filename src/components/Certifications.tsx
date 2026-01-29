"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "December 2023",
    credentialId: "AWS-SA-2023-12345",
    logo: "☁️",
    link: "https://aws.amazon.com",
  },
  {
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "October 2023",
    credentialId: "GCP-DEV-2023-67890",
    logo: "🌐",
    link: "https://cloud.google.com",
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Meta (Facebook)",
    date: "August 2023",
    credentialId: "META-FE-2023-11223",
    logo: "⚛️",
    link: "https://developers.facebook.com",
  },
  {
    title: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "June 2023",
    credentialId: "MONGO-DEV-2023-44556",
    logo: "🍃",
    link: "https://university.mongodb.com",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper
      id="certifications"
      title="CERTIFICATIONS"
      subtitle="Professional certifications and credentials"
    >
      <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#b6ff00]/30 transition-all duration-300 relative overflow-hidden"
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#b6ff00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              {/* Logo */}
              <div className="text-5xl mb-4">{cert.logo}</div>

              {/* Content */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-[#b6ff00]">{cert.issuer}</p>
                </div>

                <div className="text-xs text-gray-400 space-y-1">
                  <div className="flex items-center space-x-1">
                    <Award className="w-3 h-3" />
                    <span>{cert.date}</span>
                  </div>
                  <div className="font-mono">ID: {cert.credentialId}</div>
                </div>

                {/* Verify Link */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-sm text-gray-400 hover:text-[#b6ff00] transition-colors pt-2"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
