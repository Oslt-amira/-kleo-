import React, { useEffect, useMemo, useRef, useState } from "react";
import { addMinutes, format, isToday, startOfDay } from "date-fns";

import { StudySession } from "@/types/global";
import { useDragSelect } from "@/hooks/useDragSelect";
import { TimeGridSession } from "../elements/TimeGridSession";
import { getColorForSubject } from "@/hooks/useSubjectColor";
import { TimeSelector } from "../elements/TimeSelector";
import { ScrollArea, Viewport } from "@/components/custom-ui/scroll-area";
import { motion } from "framer-motion";
import { TimeColumn } from "../elements/TimeColumn";
import { useSwipeNavigation } from "@/hooks/useSwipeNavigation";
import { generatePlaceholderSessionsForOneDay } from "@/data/generatePlaceholderSessions";
import { CreateSessionDialog } from "@/components/custom-ui/CreateSessionDialog";
import { useToast } from "@/hooks/use-toast";
import { useView } from "@/components/calendar/views/ViewContext";

export const DayView: React.FC = () => {
  const {
    selectedRange,
    isDragging,
    handleMouseDown,
    handleMouseMove,
    resetSelection,
    initialScrollTop,
    handleMouseUp,
  } = useDragSelect();
  const containerRef = useRef<HTMLDivElement | any>(null);

  const { currentDate, setCurrentDate, data, isLoading, error, view } =
    useView();
  console.log(view, data);

  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [dialogData, setDialogData] = useState<any | null>(null);
  const onSelectionComplete = (sessionData: StudySession) => {
    setDialogData(sessionData);
    setIsDialogVisible(true);
  };
  const timeslots = useMemo(
    () =>
      Array.from({ length: 96 }, (_, i) =>
        addMinutes(startOfDay(currentDate), i * 15),
      ),
    [currentDate],
  );
  const { toast } = useToast();

  const bind = useSwipeNavigation({
    currentDate,
    setCurrentDate,
    view: "day",
  });
  const placeholders = useMemo(
    () => generatePlaceholderSessionsForOneDay(currentDate),
    [currentDate],
  );
  useEffect(() => {
    if (error) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "We couldn't retrieve your sessions. Try again later.",
      });
    }
  });
  return (
    <div className="content-center">
      <div className="mb-1 h-10 content-center text-center">
        <span
          className={`text-center text-sm ${
            isToday(currentDate)
              ? "self-center rounded-lg bg-[#FF3E00] px-3 py-1 text-white"
              : "text-slate-200"
          }`}
        >
          {format(currentDate, "EEE")} {format(currentDate, "d")}
        </span>
      </div>

      <ScrollArea className="flex h-[85vh] w-full overflow-x-hidden">
        <Viewport ref={containerRef}>
          <div className="flex flex-row">
            <TimeColumn />
            <div
              className="relative w-full px-4"
              onMouseLeave={resetSelection}
              {...bind()}
            >
              {(isLoading ? placeholders : data)?.map(
                (session: any, id: any) => {
                  const sessionColor = getColorForSubject(
                    session?.subject || "blue",
                  );

                  return (
                    <TimeGridSession
                      key={session?.id | id}
                      session={session}
                      colorClass={sessionColor}
                    />
                  );
                },
              )}
              <TimeSelector
                selectedRange={selectedRange}
                isDragging={isDragging}
                containerRef={containerRef}
                initialScrollTop={initialScrollTop}
              />
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
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring" }}
                ></motion.div>
              ))}
            </div>
          </div>
          <CreateSessionDialog
            isOpen={isDialogVisible}
            onOpenChange={setIsDialogVisible}
            dialogData={dialogData}
          />
        </Viewport>
      </ScrollArea>
    </div>
  );
};
