"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "/search/graphic1.jpg",
  "/search/graphic2.jpg",
  "/search/graphic3.jpg",
  "/search/graphic4.jpg",
  "/search/graphic5.jpg",
];

export default function MemorySearchSection() {
  const sectionRef = useRef(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageTargets = useRef<{ x: number; y: number }[]>([]);
  const phrase = " March Graphic designs";
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);
  const typingDirection = useRef<1 | -1>(1);
  const isAnimating = useRef(false);

  // Precompute explosion coordinates
  useEffect(() => {
    imageTargets.current = images.map((_, i) => {
      const angle = (Math.PI * 2 * i) / images.length;
      const radius = 200 + (i % 2 === 0 ? 100 : 50);
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
      };
    });
  }, []);

  // Typing + animation sync
  useEffect(() => {
    const interval = setInterval(async () => {
      if (isAnimating.current) return;

      const currentIndex = indexRef.current;

      setDisplayedText(phrase.slice(0, currentIndex));

      if (typingDirection.current === 1 && currentIndex >= phrase.length) {
        isAnimating.current = true;
        await explodeImages();
        typingDirection.current = -1;
        setTimeout(() => (isAnimating.current = false), 300);
      } else if (typingDirection.current === -1 && currentIndex <= 0) {
        isAnimating.current = true;
        await revertImages();
        typingDirection.current = 1;
        setTimeout(() => (isAnimating.current = false), 300);
      }

      indexRef.current += typingDirection.current;
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Scroll-trigger text
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".memory-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const explodeImages = () => {
    return Promise.all(
      imageRefs.current.map((img, i) => {
        if (!img) return;
        const { x, y } = imageTargets.current[i];
        return gsap
          .to(img, {
            x,
            y,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          })
          .then();
      }),
    );
  };

  const revertImages = () => {
    return Promise.all(
      imageRefs.current.map((img) => {
        if (!img) return;
        return gsap
          .to(img, {
            x: 0,
            y: 0,
            scale: 0,
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
          })
          .then();
      }),
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* Left Text */}
      <div className="absolute left-8 top-44 z-10 max-w-md -translate-y-1/2">
        <motion.h2
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative font-serif text-[2.75rem] leading-snug tracking-tight text-stone-800 dark:text-stone-200"
        >
          Search your <br />
          memories instantly
        </motion.h2>
        <motion.p
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="memory-text text-lg text-neutral-400"
        >
          Kleo lets you resurface emotions, thoughts, or events like browsing
          your mind’s archive.
        </motion.p>
      </div>

      {/* Right: Typing + Images */}
      <div className="absolute top-[60%]
       -z-10 -translate-y-1/2
       sm:right-64 sm:top-1/2">
        {/* Typing */}
        <div className="flex w-56 items-center gap-2 rounded-xl bg-neutral-800/15 px-4 py-3 pr-6 shadow-lg backdrop-blur-md">
          <Search strokeWidth={0.75} className="text-stone-400" />
          <motion.span className="whitespace-pre text-sm font-light text-stone-500">
            {displayedText}
            <motion.span
              className="ml-0.5 inline-block h-[1em] w-[1px] bg-stone-500"
              animate={{ opacity: [0, 1] }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                ease: "easeInOut",
              }}
            />
          </motion.span>
        </div>

        {/* Floating Images */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          {images.map((src, i) => (
            <div
              key={i}
              className="absolute scale-0 opacity-0"
              ref={(el) => {
                imageRefs.current[i] = el;
              }}
            >
              <Image
                src={src}
                alt={`Memory ${i}`}
                width={140}
                height={180}
                className="rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
