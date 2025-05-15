"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MediaRotator from "./MediaRouter";
import { useRouter } from "next/navigation";
export default function CTA() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  const router = useRouter();
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
      className="px-auto mx-auto mt-40 flex h-auto max-w-3xl flex-col items-center justify-center space-y-4 py-28 text-center font-serif"
    >
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-2xl leading-snug text-stone-600 opacity-85"
      >
        Not just what you do — who you are when you do it.
      </motion.p>

      <motion.button
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
        variants={{
          hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileTap={{ scale: 0.9 }}
        className="mx-6 my-4 flex items-center justify-center rounded-lg border border-stone-600 px-8 py-1 text-center text-lg text-stone-600"
        onClick={() => router.push("/waitlist")}
      >
        Join
      </motion.button>
    </motion.div>
  );
}
