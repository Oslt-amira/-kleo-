"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div className="fixed right-0 top-10 z-40 overflow-hidden p-0 xs:right-0 xs:top-0 xs:m-0">
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.2, rotate: -80 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="relative z-10 h-full w-full hover:bg-transparent"
      >
        <Image
          src="/sun-moon.svg"
          alt="Theme"
          width={60}
          height={60}
          className="filter dark:invert"
          unoptimized
        />
      </motion.button>
    </motion.div>
  );
}
