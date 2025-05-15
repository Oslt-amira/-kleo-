"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MediaRotator from "./MediaRouter";

export default function AnimatedBlock() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false, // <— allow retriggering on scroll up/down
  });

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
      className="mx-auto my-16   flex h-auto max-w-3xl flex-col items-center justify-center space-y-4 text-center font-serif"
    >
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-xl leading-snug text-stone-600 opacity-85"
      >
        Plan the moment — capture the essence
      </motion.p>

      <motion.p
        variants={{
          hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center justify-center gap-1 text-sm font-light text-stone-600/60"
      >
        blending calendar structure with
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-block w-[10ch]"
        >
          <MediaRotator />
        </motion.span>
      </motion.p>
    </motion.div>
  );
}
