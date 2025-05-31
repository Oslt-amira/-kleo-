"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CrypticText from "./CrypticText";
gsap.registerPlugin(ScrollTrigger);

const tools = [
  {
    name: "Google Calendar",
    img: "/tools/google.png",
    x: "8%",
    y: "22%",
  },
  { name: "Notion", img: "/tools/notion.png", x: "28%", y: "12%" },
  { name: "Pinterest", img: "/tools/pinterest.png", x: "47%", y: "27%" },
  { name: "Figma", img: "/tools/figma.png", x: "69%", y: "18%" },
  { name: "Slack", img: "/tools/slack.png", x: "18%", y: "52%" },
  { name: "Spotify", img: "/tools/spotify.png", x: "38%", y: "63%" },
  { name: "Obsidian", img: "/tools/Obsidian.jpg", x: "58%", y: "48%" },
  { name: "Miro", img: "/tools/miro.png", x: "80%", y: "42%" },
];

export default function Integrations() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;

    const followCursor = (e: { clientX: number; clientY: number }) => {
      if (!container || !inner) return;
      const rect = container.getBoundingClientRect();
      const offsetX = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
      const offsetY = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
      gsap.to(inner, {
        x: offsetX,
        y: offsetY,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    container?.addEventListener("mousemove", followCursor);
    return () => container?.removeEventListener("mousemove", followCursor);
  }, []);

  return (
    <section
      ref={containerRef}
      id="integrations"
      className="relative flex min-h-screen flex-col px-8 pb-32 font-serif text-stone-900"
    >
      <motion.h2
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-20 mb-40 text-[2.75rem] leading-snug tracking-tight text-stone-800 dark:text-stone-200"
      >
        Integrate with
        <br /> your favorite <br /> tools and services
      </motion.h2>

      {/* SVG + Tools */}
      <div className="absolute top-64 h-full w-full -translate-y-20">
        {/* Background Connections */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={innerRef}
          className="pointer-events-none absolute inset-0 z-0"
        >
          <svg
            className="absolute h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {tools.map((tool, i) =>
              tools.map((t2, j) => {
                if (i < j && Math.random() > 0.5) {
                  return (
                    <line
                      key={`${i}-${j}`}
                      x1={tool.x}
                      y1={tool.y}
                      x2={t2.x}
                      y2={t2.y}
                      stroke="#999"
                      strokeWidth="0.5"
                    />
                  );
                }
                return null;
              }),
            )}
          </svg>
        </motion.div>

        {/* Tool Icons */}
        {tools.map((tool) => (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            key={tool.name}
            className="ease-[cubic-bezier(0.23,1,0.32,1)] group absolute z-10 flex h-20 w-20 items-center justify-center bg-white shadow-xl transition-transform duration-500 hover:scale-110"
            style={{ left: tool.x, top: tool.y }}
          >
            <Image
              src={tool.img}
              alt={tool.name}
              fill
              className="object-cover opacity-90"
            />
            <span className="pointer-events-none absolute left-[105%] top-[102%] mb-2 w-max rounded-lg bg-stone-800 bg-opacity-5 px-2 py-1 text-xs text-stone-500 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 dark:bg-stone-200 dark:bg-opacity-5 dark:text-stone-600">
              {tool.name}
            </span>
          </motion.div>
        ))}

        {/* Editorial Labels */}

        <CrypticText
          text="  Seamless Connections"
          className="absolute right-[10%] top-16 z-20 text-[0.7rem] italic tracking-wide text-neutral-500"
          speed={80}
          revealDirection="start"
          sequential
          useOriginalCharsOnly={false}
        />

        <CrypticText
          text="  Unify your digital life"
          className="absolute left-16 top-[40%] z-20 text-[0.7rem] italic text-neutral-500"
          speed={80}
          revealDirection="start"
          sequential
          useOriginalCharsOnly={false}
        />

        <CrypticText
          text=" Sync structure  with creativity "
          className="right-25 absolute top-[60%] h-1/3 max-h-52 -translate-y-1/2 transform overflow-hidden text-wrap text-[0.7rem] italic tracking-wide text-neutral-500"
          style={{
            writingMode: "vertical-lr",
            textOrientation: "upright",
          }}
          speed={80}
          revealDirection="start"
          sequential
          useOriginalCharsOnly={false}
        />
      </div>
    </section>
  );
}
