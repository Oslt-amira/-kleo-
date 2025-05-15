"use client";

import { motion } from "framer-motion";

interface Media {
  type: string;
  src: string;
  alt: string;
}

interface NumberedSectionProps {
  number: string;
  title: string;
  description: string;
  media: Media[];
  reversed?: boolean;
}

export default function NumberedSection({
  number,
  title,
  description,
  media,
  reversed = false,
}: NumberedSectionProps) {
  return (
    <div className="horizontal-section min-w-screen flex h-screen items-center px-10 md:px-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className={`order-2 ${reversed ? "md:order-2" : "md:order-1"}`}>
            <div className="relative">
              <div className="absolute -left-16 -top-16 font-serif text-9xl opacity-10">
                {number}
              </div>
              <h2 className="mb-6 font-serif text-4xl md:text-5xl">{title}</h2>
              <p className="max-w-xl text-lg leading-relaxed text-white/70">
                {description}
              </p>
            </div>
          </div>

          <div className={`order-1 ${reversed ? "md:order-1" : "md:order-2"}`}>
            <div className="grid grid-cols-2 gap-4">
              {media.map((item, index) => (
                <div
                  key={index}
                  className={`overflow-hidden border border-white/20 ${
                    index === 0 && media.length > 1 ? "col-span-2" : ""
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={item.src || "/placeholder.svg"}
                      alt={item.alt}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
