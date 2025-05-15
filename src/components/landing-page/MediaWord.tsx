"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";

interface MediaWordProps {
  currentWord: string;
}

const MediaWord = forwardRef<HTMLDivElement, MediaWordProps>(
  ({ currentWord }, ref) => {
    return (
      <motion.span
        ref={ref}
        className="inline-block rounded-sm border border-stone-600 px-3 py-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={currentWord}
      >
        {currentWord}
      </motion.span>
    );
  },
);

MediaWord.displayName = "MediaWord";

export default MediaWord;
