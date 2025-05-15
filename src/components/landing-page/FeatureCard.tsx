"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  media?: ReactNode[];
  isReversed?: boolean;
}

export default function FeatureCard({
  title,
  description,
  icon,
  media,
  isReversed = false,
}: FeatureCardProps) {
  return (
    <motion.div
      className="feature-card relative overflow-hidden rounded-lg bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
      whileHover={{ y: -5 }}
    >
      <div
        className={`flex flex-col ${isReversed ? "items-end text-right" : "items-start text-left"}`}
      >
        <div className="mb-4 text-stone-700">{icon}</div>

        <h3 className="mb-3 font-serif text-2xl">{title}</h3>

        <p className="leading-relaxed text-stone-600">{description}</p>

        {media && (
          <div
            className={`mt-6 flex space-x-3 ${isReversed ? "justify-end" : "justify-start"}`}
          >
            {media.map((item, index) => (
              <div
                key={index}
                className="rounded-full bg-stone-100 p-2 text-stone-600"
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Decorative elements */}
      <div
        className={`absolute ${isReversed ? "bottom-0 left-0" : "right-0 top-0"} h-16 w-16 opacity-5`}
      >
        <svg viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="40" />
        </svg>
      </div>
    </motion.div>
  );
}
