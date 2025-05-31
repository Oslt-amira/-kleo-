"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function MediaRotator() {
  const [currentWord, setCurrentWord] = useState("media");
  const words = ["Productivity", "Media", "Emotion", "Art", "AI"];
  const containerRef = useRef<HTMLSpanElement>(null);
  const wordIndexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
          setCurrentWord(words[wordIndexRef.current]);

          gsap.to(containerRef.current, {
            opacity: 1,
            duration: 0.3,
          });
        },
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mx-2 inline-block rounded-lg border border-stone-600/60 px-2 py-0.5 text-center">
      <span ref={containerRef} className="mx-1 text-stone-600/60">
        {currentWord}
      </span>
    </section>
  );
}
