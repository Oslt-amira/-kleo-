"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Noise from "./Noise"; // adjust this import path as needed

const Loader = () => (
  <div className="loader fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-stone-950">
    <Noise
      patternSize={250}
      patternScaleX={1}
      patternScaleY={1}
      patternRefreshInterval={2}
      patternAlpha={20}
    />

    <div className="pointer-events-none absolute inset-0 bg-stone-950 opacity-40 [mask-image:radial-gradient(circle_at_center,transparent_50%,gray_100%)]" />

    <motion.div
      className="flex overflow-hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0, rotate: 360 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: 6,
        ease: "linear",
      }}
    >
      <Image
        src="/kleoLogo1.svg"
        alt="Main"
        width={100}
        height={100}
        className="opacity-75 filter dark:invert"
        unoptimized
      />
    </motion.div>
  </div>
);

export default Loader;
