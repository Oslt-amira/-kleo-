"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface FeatureSectionProps {
  title: string;
  description: string;
  icon: ReactNode;
  number: string;
}

export default function FeatureSection({
  title,
  description,
  icon,
  number,
}: FeatureSectionProps) {
  return (
    <motion.div
      className="feature-item relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute -left-4 top-0 font-serif text-5xl opacity-20">
        {number}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <div className="mb-4 text-white/80">{icon}</div>
          <h3 className="mb-4 font-serif text-3xl">{title}</h3>
          <p className="leading-relaxed text-white/70">{description}</p>
        </div>

        <div className="flex aspect-square items-center justify-center border border-white/20">
          <span className="text-sm text-white/50">Feature Preview</span>
        </div>
      </div>
    </motion.div>
  );
}
