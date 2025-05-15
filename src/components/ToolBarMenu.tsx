import { cn } from "@/lib/utils";
import { Brain, Flag, Settings } from "lucide-react";
import { motion } from "motion/react";

interface ToolBarMenuProps {
  isChatOpen: boolean;
  setIsChatOpen: (isChatOpen: boolean) => void;
}

const variants = {
  initial: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 15 },
};

export default function ToolBarMenu({
  isChatOpen,
  setIsChatOpen,
}: ToolBarMenuProps) {
  return (
    <motion.div
      className="flex gap-1"
      initial="initial"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ type: "spring", duration: 0.3, bounce: 0, delay: 0.1 }}
    >
      <div
        className={cn(
          "group flex cursor-pointer select-none items-center gap-[6px] rounded-[14px] p-2 transition hover:bg-orange-200",
          isChatOpen && "bg-orange-200",
        )}
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        <Brain
          size={20}
          className={cn(
            "stroke-gray-900 group-hover:stroke-orange-900",
            isChatOpen && "stroke-orange-900",
          )}
        />
        <span
          className={cn(
            "font-medium text-gray-900 group-hover:text-orange-900",
            isChatOpen && "text-orange-900",
          )}
        >
          Chat
        </span>
      </div>
      <div className="group flex cursor-pointer items-center gap-[6px] rounded-[14px] p-2 transition hover:bg-orange-200">
        <Flag
          size={20}
          className="stroke-gray-900 group-hover:stroke-orange-900"
        />
        <span className="font-medium text-gray-900 group-hover:text-orange-900">
          Exams
        </span>
      </div>
      <div className="group flex cursor-pointer items-center gap-[6px] rounded-[14px] p-2 transition hover:bg-orange-200">
        <Settings
          size={20}
          className="stroke-gray-900 group-hover:stroke-orange-900"
        />
        <span className="font-medium text-gray-900 group-hover:text-orange-900">
          Settings
        </span>
      </div>
    </motion.div>
  );
}
