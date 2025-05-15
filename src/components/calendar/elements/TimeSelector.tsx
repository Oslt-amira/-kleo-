import React from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { TimeSelection } from "@/types/global";

interface TimeSelectorProps {
  selectedRange: {
    start: TimeSelection;
    end: TimeSelection;
  };
  isDragging: boolean;
  containerRef: React.RefObject<HTMLDivElement>;
  initialScrollTop: number;
}

export const TimeSelector: React.FC<TimeSelectorProps> = ({
  selectedRange,
  isDragging,
  containerRef,
  initialScrollTop,
}) => {
  const calculateDivStyle = (): React.CSSProperties => {
    if (
      !selectedRange.start.positionY ||
      !selectedRange.end.positionY ||
      !containerRef.current
    ) {
      return {};
    }

    const top = Math.min(
      selectedRange.start.positionY,
      selectedRange.end.positionY
    );
    const bottom = Math.max(
      selectedRange.start.positionY,
      selectedRange.end.positionY
    );

    const containerOffsetTop =
      containerRef.current.getBoundingClientRect().top - initialScrollTop;

    const adjustedTop = top - containerOffsetTop;
    const adjustedBottom =
      bottom + containerRef.current.scrollTop - initialScrollTop;
    const height = Math.abs(adjustedBottom - top);

    return {
      top: `${adjustedTop}px`,
      height: `${height}px`,
      position: "absolute",
      left: 0,
      right: 0,
      zIndex: 0,
      background: isDragging ? "#FBE2DA" : undefined,
    };
  };

  return (
    isDragging && (
      <motion.div
        style={calculateDivStyle()}
        className="rounded-xl max-w-full"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1.01 }}
        whileFocus={{ scale: 1.01 }}
        transition={{
          type: "spring",
          bounce: 0.25,
        }}
      >
        <span className="font-medium text-xs text-[#ff4000a2] px-4">
          {selectedRange.start.time &&
            selectedRange.end.time &&
            (selectedRange.start.time === selectedRange.end.time
              ? format(selectedRange.start.time, "HH:mm")
              : `${format(selectedRange.start.time, "HH:mm")} - ${format(
                  selectedRange.end.time,
                  "HH:mm"
                )}`)}
        </span>
      </motion.div>
    )
  );
};
