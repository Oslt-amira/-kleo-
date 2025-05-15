"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface Media {
  type: string;
  src: string;
  alt: string;
}

interface NumberedSectionProps {
  index: number;
  title: string;
  description: string;
  media: Media[];
}

export default function NumberedSection({
  index,
  title,
  description,
  media,
}: NumberedSectionProps) {
  const isEven = index % 2 === 0;
  const imageRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    imageRefs.current.forEach((el, i) => {
      if (!el) return;

      gsap.fromTo(
        el,
        {
          opacity: 0,
          scale: 0.8,
          x: isEven ? -100 : 100,
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
          ease: "power2.out",
          duration: 1.2,
        },
      );
    });
  }, [isEven]);

  return (
    <div className="horizontal-section relative flex h-screen w-full items-start">
      <div
        className={`flex h-screen w-full flex-col justify-between px-2 py-16 pr-20 ${index === 3 ? "" : "border-r border-stone-300/30"}`}
      >
        <div className={isEven ? "order-2" : ""}>
          <h2 className="font-serif text-4xl">{title}</h2>
        </div>

        <div className={isEven ? "order-1" : "mt-auto"}>
          <p className="text-sm leading-relaxed text-stone-700 dark:text-stone-400">
            {description}
          </p>
        </div>

        {/* Floating Images */}
        <div className="pointer-events-none absolute inset-0">
          {media.map((item, i) => (
            <div
              key={i}
              ref={(el) => {
                imageRefs.current[i] = el!;
              }}
              className="absolute rounded-lg border-white bg-stone-200/10 blur-sm transition-all"
              style={{
                top: `${20 + i * 25}%`,
                left: isEven ? `${30 + i * 10}%` : `${50 - i * 10}%`,
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={200}
                height={200}
                className="scale-90 rounded-lg opacity-0 shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
