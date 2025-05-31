"use client";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import KleoJoinCard from "./KleoJoinCard";

export default function WaitlistModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
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
        className="relative max-w-3xl bg-transparent p-8"
      >
        <button
          onClick={onClose}
          className="absolute -right-10 -top-20 text-stone-400 hover:scale-105"
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
