"use client";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import KleoJoinCard from "./KleoJoinCard";

export default function WaitlistModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex justify-center max-lg:overflow-y-auto lg:items-center"
      onClick={onClose}
      initial={{ scale: 0.8, opacity: 0, y: -50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.8, opacity: 0, y: -50 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }} // close modal if click outside content
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative bg-transparent p-5 max-lg:my-auto max-lg:w-full max-lg:max-w-md lg:max-w-3xl lg:p-8"
      >
        <button
          onClick={onClose}
          className="absolute z-10 max-lg:right-5 max-lg:top-0 max-lg:flex max-lg:h-11 max-lg:w-11 max-lg:items-center max-lg:justify-center lg:-right-10 lg:-top-20 text-stone-400 hover:scale-105"
          aria-label="Close modal"
        >
          ✕
        </button>

        <SpotlightCard>
          <KleoJoinCard />
        </SpotlightCard>
      </motion.div>
    </motion.div>
  );
}
