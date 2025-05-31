"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { useRouter } from "next/navigation";
import { FlipDeviceHint } from "./FlipDeviceHint";
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
    <motion.div className="flex w-full min-w-fit flex-row justify-center">
      <FlipDeviceHint />

      <motion.nav
        className="border-1 gap-auto fixed top-0 z-40 mx-8 mt-2 flex h-9 w-min flex-row justify-center overflow-hidden rounded-[14px] border-gray-200/50 bg-stone-100/60 p-2 shadow-md shadow-stone-300/25 backdrop-blur-sm dark:border-stone-800 dark:bg-stone-800/40 dark:shadow-stone-500/25 sm:mx-0 sm:mt-5 sm:w-3/5 sm:justify-between md:w-2/6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Logo */}
        <div className="flex items-center px-2 font-semibold text-stone-800 dark:text-stone-100">
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
        <ul className="relative z-10 flex items-center gap-4 text-xs font-normal md:gap-2.5">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              href={`#${item.toLowerCase()}`}
              className="cursor-pointer text-stone-600/80 transition-colors hover:text-stone-900 dark:text-stone-300 dark:hover:text-white"
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
          className="mx-2 flex items-center justify-center rounded-md border border-stone-600/80 px-3 py-1 text-center text-xs text-stone-600 dark:border-stone-200/80 dark:text-stone-200"
          onClick={() => router.push("/waitlist")}
        >
          Join
        </motion.button>
      </motion.nav>
      <ThemeToggle />
    </motion.div>
  );
}
