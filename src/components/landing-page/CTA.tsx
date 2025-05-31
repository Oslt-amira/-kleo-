"use client";

import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const router = useRouter();

  return (
    <div className="relative isolate z-0 flex h-screen flex-col items-center justify-center overflow-hidden px-4">
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-20 mx-auto flex max-w-3xl flex-col items-center justify-center space-y-4 py-28 text-center font-serif"
      >
        <p className="font-serif text-2xl leading-snug text-stone-600/60 dark:text-stone-400/80">
          Not just what you do — who you are when you do it.
        </p>

        <button
          onClick={() => router.push("/waitlist")}
          className="mx-6 my-4 rounded-lg border border-stone-400 px-8 py-1 text-lg text-stone-600/60 backdrop-blur dark:text-stone-400/80"
        >
          Join
        </button>
      </motion.div>
    </div>
  );
}
