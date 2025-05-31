"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CrypticText from "./CrypticText";
type FAQItem = {
  id: number;
  title: string;
  description: string;
};

const faqItems: FAQItem[] = [
  {
    id: 1,
    title: "What exactly is Kleo?",
    description:
      "A digital calendar reinvented as a creative archive. Kleo blends planning with storytelling — combining events, memories, media, AI, and emotion. It’s a diary, scrapbook, planner, and personal assistant all in one.",
  },
  {
    id: 1,
    title: "Who is Kleo for?",
    description:
      "For those who live fully and feel deeply — artists, thinkers, dreamers, and planners who want to capture more than deadlines. Kleo treats time as something to remember, not just manage.",
  },
  {
    id: 3,
    title: "How is Kleo different from other calendars?",
    description:
      "Kleo turns scheduling into memory-making. Add photos, audio, sketches, and thoughts to your plans. It sees moments where others see tasks, blending productivity with personal storytelling.",
  },
  {
    id: 4,
    title: "Can I stay productive using Kleo?",
    description:
      "Yes. Kleo has all standard calendar features plus AI-powered scheduling that adapts to your habits, mood, and creativity—helping you plan intuitively without stress.",
  },
  {
    id: 5,
    title: "What media can I add?",
    description:
      "Photos, videos, audio clips, voice notes, sketches, song links, and quick thoughts. If it helps capture the moment, Kleo supports it.",
  },
  {
    id: 6,
    title: "Is Kleo private?",
    description:
      "Absolutely. Your entries are private unless you choose to share. You can also create and share beautiful visual timelines, like personal zines.",
  },
  {
    id: 7,
    title: "What happened to the old Kleo?",
    description:
      "Kleo’s first iteration was a straightforward productivity app — It was too timid to stand out. Rather than walk away, we evolved it. The new Kleo is a metamorphosis: more personal, more creative, combining productivity with expression. A place to imprint moments and preserve a unique archive of each life.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(6);
  const containerVariants = {
    hidden: { opacity: 0, x: -250 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <div
      className="relative flex h-full min-h-screen w-full flex-col px-8 pt-40 sm:flex-row"
      id="faq"
    >
      <motion.h2
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-20 mb-8 font-serif text-[2.75rem] leading-snug tracking-tight text-stone-800 dark:text-stone-200 sm:mb-40"
      >
        Cut Through the Noise—
        <br />
        Get Straight Answers.
      </motion.h2>

      <motion.div
        className="my-8 flex h-[90vh] w-full items-start justify-end gap-1 pt-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        {faqItems.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={item.id}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(index)}
              animate={{
                width: isActive ? 300 : 50,
                opacity: isActive ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              variants={itemVariants}
              className="flex h-full cursor-none items-center overflow-hidden rounded-2xl border-[1px] border-stone-600/30 bg-stone-300 bg-opacity-20 px-2 backdrop-blur-sm dark:bg-stone-700/20"
            >
              <div className="flex h-full items-end justify-center py-4 pl-1">
                <p
                  className="rotate-180 transform whitespace-nowrap text-center text-base font-normal text-stone-600/80 dark:text-stone-300"
                  style={{ writingMode: "vertical-lr" }}
                >
                  {item.title}
                </p>
              </div>

              {/* Horizontal answer on hover */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    key="answer"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.8 }}
                    className="flex h-full flex-col justify-end px-4 py-6"
                  >
                    <span className="mb-1 text-lg text-stone-600/80 dark:text-stone-500">
                      0{item.id}
                    </span>

                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-stone-500/80 dark:text-stone-400">
                      {item.description}
                    </p>

                    {/* Underline detail */}
                    <motion.div
                      layoutId="underline"
                      className="mt-4 h-[2px] w-24 bg-stone-600/60 dark:bg-stone-200"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>

      <CrypticText
        text="Because clarity should never be boring."
        className="right-25 absolute top-[85%] hidden h-1/3 max-h-52 -translate-y-1/2 transform overflow-hidden text-wrap text-[0.7rem] italic tracking-wide text-neutral-500 sm:block"
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
  );
}
