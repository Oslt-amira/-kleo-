"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function MediaRotator() {
  const [currentWord, setCurrentWord] = useState("media");
  const words = ["Productivity", "Media", "Emotion", "Art", "AI"];
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let wordIndex = 0;
    const interval = setInterval(() => {
      // Fade out current word
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          // Change word
          wordIndex = (wordIndex + 1) % words.length;
          setCurrentWord(words[wordIndex]);

          // Fade in new word
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
    <div className="inline-block rounded-lg border border-stone-600/60 px-2 py-1 text-center">
      <span ref={containerRef} className="mx-1 text-stone-600/60">
        {currentWord}
      </span>
    </div>
  );
}
