"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FloatingGallery from "./FloatingGallery";

export function Hero() {
  return (
    <motion.div
      className="flex h-screen flex-col items-center justify-center space-y-0 pb-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeIn" }}
    >
      <FloatingGallery />
      <div className="z-20 ml-4 w-[30vw] sm:-mb-8 sm:w-[20vw]">
        <Image
          src="/kleoTextLogo.svg"
          alt="Main"
          layout="responsive"
          width={120}
          height={80}
          className="opacity-75 filter dark:invert"
          unoptimized
        />
      </div>
      <div className="relative -top-8 z-20 mx-auto max-w-xl font-serif text-sm text-stone-800 opacity-80 dark:text-stone-400 sm:-top-10">
        Productivity as a creative archive.
      </div>
    </motion.div>
  );
}
