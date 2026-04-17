"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  title?: string;
  subtitle?: string;
  customTitle?: React.ReactNode;
}

export default function SectionWrapper({
  children,
  id,
  title,
  subtitle,
  customTitle,
}: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id={id}
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          {customTitle ? (
            customTitle
          ) : (
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">{title}</span>
            </h2>
          )}
          {subtitle && (
            <p className="text-gray-400 text-lg max-w-2xl">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
