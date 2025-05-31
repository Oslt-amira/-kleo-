"use client";

import { useEffect, useState, useRef } from "react";

interface CrypticTextProps {
  text: string;
  speed?: number;
  sequential?: boolean;
  revealDirection?: "start" | "end" | "center";
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  style?: React.CSSProperties;
}

const scrambleChars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=<>[]{}";

export default function CrypticText({
  text,
  speed = 60,
  sequential = true,
  revealDirection = "start",
  useOriginalCharsOnly = false,
  characters = scrambleChars,
  className = "",
  style = {},
}: CrypticTextProps) {
  const [displayText, setDisplayText] = useState<string>(text);
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const ref = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const getNextIndex = (set: Set<number>): number => {
    const len = text.length;
    if (revealDirection === "end") return len - 1 - set.size;
    if (revealDirection === "center") {
      const middle = Math.floor(len / 2);
      const offset = Math.floor(set.size / 2);
      return set.size % 2 === 0 ? middle + offset : middle - offset - 1;
    }
    return set.size;
  };

const shuffleText = (revealedSet: Set<number>) => {
  const availableChars = useOriginalCharsOnly
    ? [...new Set(text.replace(/ /g, "").split(""))]
    : characters.split("");

  return text
    .split("")
    .map((char, i) => {
      if (char === " ") return " ";
      if (revealedSet.has(i)) return char;
      const scrambledChar =
        availableChars[Math.floor(Math.random() * availableChars.length)];
      return scrambledChar || " ";
    })
    .join("")
    .slice(0, text.length); // Safety: never exceed original length
};


  const startScrambling = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setRevealed(new Set());
    let currentRevealed = new Set<number>();

    intervalRef.current = setInterval(() => {
      if (currentRevealed.size >= text.length) {
        clearInterval(intervalRef.current!);
        return;
      }
      const next = new Set(currentRevealed);
      const idx = getNextIndex(next);
      next.add(idx);
      currentRevealed = next;
      setRevealed(new Set(next));
      setDisplayText(shuffleText(next));
    }, speed);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startScrambling();
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div ref={ref} className={className} style={style}>
      {displayText}
    </div>
  );
}
