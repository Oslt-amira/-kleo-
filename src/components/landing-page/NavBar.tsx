"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { useRouter } from "next/navigation";
const navItems = ["Manifesto", "Features", "Integrations", "FAQ"];

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

export function NavBar() {
  const router = useRouter();

  return (
    <motion.div className="flex w-full flex-row justify-center lg:min-w-fit">
      <motion.nav
        className="fixed top-0 z-40 mt-3 flex justify-between rounded-[14px] border-gray-200/50 shadow-md shadow-stone-300/25 backdrop-blur-sm dark:border-stone-800 dark:shadow-stone-500/25 max-lg:inset-x-3 max-lg:min-h-11 max-lg:items-center max-lg:gap-1 max-lg:border max-lg:bg-stone-100/80 max-lg:px-1 max-lg:py-1 dark:max-lg:bg-stone-800/80 sm:mt-5 sm:max-lg:inset-x-auto sm:max-lg:min-w-[28rem] sm:max-lg:gap-4 sm:max-lg:px-2 lg:h-9 lg:w-2/6 lg:overflow-hidden lg:bg-stone-100/60 lg:p-2 dark:lg:bg-stone-800/40"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Logo */}
        <div className="flex items-center font-semibold text-stone-800 dark:text-stone-100 max-lg:shrink-0 max-lg:px-1 lg:px-2">
          <Image
            src="/kleoLogo2.svg"
            alt="Main"
            width={30}
            height={30}
            className="opacity-75 filter dark:invert"
            unoptimized
          />
        </div>

        {/* Navigation Items */}
        <ul className="relative z-10 flex items-center text-xs font-normal max-lg:gap-2 max-[374px]:text-[10px] sm:text-sm sm:max-lg:gap-4 lg:gap-2.5">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              href={`#${item.toLowerCase()}`}
              className="cursor-pointer text-stone-600/80 transition-colors hover:text-stone-900 dark:text-stone-300 dark:hover:text-white max-lg:flex max-lg:min-h-11 max-lg:items-center"
            >
              {item}
            </motion.a>
          ))}
        </ul>

        <motion.button
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center rounded-md border border-stone-600/80 py-1 text-center text-xs text-stone-600 dark:border-stone-200/80 dark:text-stone-200 max-lg:min-h-9 max-lg:shrink-0 max-lg:px-2 sm:mx-2 sm:px-3 sm:text-sm"
          onClick={() => router.push("/waitlist")}
        >
          Join
        </motion.button>
      </motion.nav>
      <ThemeToggle />
    </motion.div>
  );
}
