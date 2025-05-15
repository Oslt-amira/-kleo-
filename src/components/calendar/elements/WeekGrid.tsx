import React, { useMemo, useState } from "react";
import { addMinutes, startOfDay } from "date-fns";
import { TimeGridSession } from "./TimeGridSession";
import { useDragSelect } from "@/hooks/useDragSelect";
import { StudySession } from "@/types/global";
import { motion } from "framer-motion";
import { TimeSelector } from "./TimeSelector";
import { getColorForSubject } from "@/hooks/useSubjectColor";

import { CreateSessionDialog } from "@/components/custom-ui/CreateSessionDialog";
import { Session } from "@/db/schema";

interface WeekGridProps {
  day: Date;
  containerRef: HTMLDivElement | any;
  sessions: Session[];
}

export const WeekGrid: React.FC<WeekGridProps> = ({
  day,
  containerRef,
  sessions,
}) => {
  const {
    selectedRange,
    isDragging,
    handleMouseDown,
    handleMouseMove,
    resetSelection,
    initialScrollTop,
    handleMouseUp,
  } = useDragSelect();

  const timeslots = useMemo(
    () =>
      Array.from({ length: 96 }, (_, i) => addMinutes(startOfDay(day), i * 15)),
    [day],
  );

  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [dialogData, setDialogData] = useState<any | null>(null);
  const onSelectionComplete = (sessionData: StudySession) => {
    setDialogData(sessionData);
    setIsDialogVisible(true);
  };

  return (
    <div className="relative" onMouseLeave={resetSelection}>
      {sessions.map((session, id) => {
        const sessionColor = getColorForSubject(session.subject || "blue");
        return (
          <TimeGridSession
            key={id}
            session={session}
            colorClass={sessionColor}
          />
        );
      })}

      <TimeSelector
        selectedRange={selectedRange}
        isDragging={isDragging}
        containerRef={containerRef}
        initialScrollTop={initialScrollTop}
      />

      <div className="relative flex flex-col border-b border-l border-[#F0F0F0] last:border-r">
        {timeslots.map((time) => (
          <motion.div
            key={time.toString()}
            className={`relative flex h-5 cursor-pointer items-center justify-center ${
              time.getMinutes() === 0 ? "border-t border-[#F0F0F0]" : ""
            } hover:border-t-2 hover:border-t-[#ff400055]`}
            data-time={time.toISOString()}
            onMouseDown={(e) =>
              handleMouseDown(e, containerRef.current.scrollTop)
            }
            onMouseUp={(e) => handleMouseUp(e, onSelectionComplete)}
            onMouseMove={handleMouseMove}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring" }}
          />
        ))}
      </div>

      <CreateSessionDialog
        isOpen={isDialogVisible}
        onOpenChange={setIsDialogVisible}
        dialogData={dialogData}
      />
    </div>
  );
};
