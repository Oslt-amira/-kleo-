"use client";

import { AnimatePresence, motion } from "framer-motion";
import { RotateCcwSquare, X } from "lucide-react";
import * as React from "react";

export const FlipDeviceHint = () => {
  const [showHint, setShowHint] = React.useState(false);

  React.useEffect(() => {
    const checkOrientation = () => {
      const isPortrait = window.matchMedia("(orientation: portrait)").matches;
      const isMobile = window.innerWidth < 768;
      setShowHint(isPortrait && isMobile);
    };

    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  if (!showHint) return null;

  return (
    <AnimatePresence>
      {showHint && (
        <motion.div
          initial={{ y: 20 }}
          animate={{
            y: [0, -5, 0],
            transition: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          exit={{ y: 20 }}
          className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-md bg-stone-700/80 px-3 py-1 text-xs text-stone-300/80 shadow-md backdrop-blur-sm sm:hidden"
        >
          <RotateCcwSquare size={22} strokeWidth={0.75} className="py-1" />
          <span>Flip your device for a better experience</span>

          {/* Dismiss Button */}
          <button
            onClick={() => setShowHint(false)}
            className="rounded-sm p-1 text-stone-300/60 hover:text-white"
          >
            <X size={14} strokeWidth={0.75} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
