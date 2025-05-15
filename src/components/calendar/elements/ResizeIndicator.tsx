import { motion } from "framer-motion";

interface ResizeIndicatorProps {
  onMouseDown: (e: React.MouseEvent, position: "start" | "end") => void;
  position: "top" | "bottom";
}

export const ResizeIndicator: React.FC<ResizeIndicatorProps> = ({
  onMouseDown,
  position,
}) => {
  const positionClass = position === "top" ? "-top-2" : "-bottom-2";
  const borderClass =
    position === "top"
      ? "hover:border-t-orange-500 hover:border-t-opacity-33 hover:border-t-2"
      : "hover:border-b-orange-500 hover:border-b-opacity-33 hover:border-b-2";

  return (
    <div
      className={`absolute ${positionClass} left-0 right-0 h-[25%] cursor-none bg-transparent px-2`}
      onMouseDown={(e) => {
        onMouseDown(e, position === "top" ? "start" : "end");
      }}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <motion.div
        className={`h-full w-full rounded-lg ${borderClass}`}
        whileHover={{ scale: 1.12 }}
        transition={{ type: "spring" }}
      ></motion.div>
    </div>
  );
};

interface ResizeIndicatorsProps {
  handleResizeStart: (e: React.MouseEvent, position: "start" | "end") => void;
}

export const ResizeIndicators: React.FC<ResizeIndicatorsProps> = ({
  handleResizeStart,
}) => (
  <>
    <ResizeIndicator onMouseDown={handleResizeStart} position="top" />
    <ResizeIndicator onMouseDown={handleResizeStart} position="bottom" />
  </>
);
