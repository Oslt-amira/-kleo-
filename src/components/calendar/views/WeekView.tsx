import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { addDays, isSameDay, startOfWeek } from "date-fns";
import { WeekGrid } from "../elements/WeekGrid";
import { ScrollArea, Viewport } from "@/components/custom-ui/scroll-area";
import { WeekGridHeader } from "../elements/WeekGridHeader";
import { TimeColumn } from "../elements/TimeColumn";
import { useSwipeNavigation } from "@/hooks/useSwipeNavigation";
import { Session } from "@/db/schema";
import { useToast } from "@/hooks/use-toast";
import { generatePlaceholderSessions } from "@/data/generatePlaceholderSessions";
import { useView } from "@/components/calendar/views/ViewContext";

export const WeekView: React.FC = () => {
  const { currentDate, setCurrentDate, data, isLoading, error } = useView();

  const containerRef = useRef<HTMLDivElement | null>(null);
  const { toast } = useToast();
  const generateWeekDays = useCallback(
    (date: Date) =>
      Array.from({ length: 7 }, (_, i) => addDays(startOfWeek(date), i)),
    [],
  );

  const [days, setDays] = useState<Date[]>(generateWeekDays(currentDate));

  const placeholders = useMemo(
    () => generatePlaceholderSessions(currentDate),
    [currentDate],
  );

  useEffect(() => {
    setDays(generateWeekDays(currentDate));
  }, [currentDate, generateWeekDays]);

  const bind = useSwipeNavigation({
    currentDate,
    setCurrentDate,
    updateDays: setDays,
    view: "week",
  });
  useEffect(() => {
    if (error) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "We couldn't retrieve your sessions. Try again later.",
      });
    }
  });
  return (
    <div className="my-1 flex flex-col">
      <div className="ml-14 grid grid-cols-7">
        {days.map((day) => (
          <WeekGridHeader key={day.toISOString()} day={day} />
        ))}
      </div>
      <ScrollArea className="flex h-[85vh] w-full overflow-x-hidden">
        <Viewport ref={containerRef}>
          <div className="flex flex-row">
            <TimeColumn />

            <div className="w-full">
              <div className="mt-1.5 flex-1 flex-row" {...bind()}>
                <div className="grid grid-cols-7 border-[#F0F0F0]">
                  {days.map((day) => {
                    const daySessions = isLoading
                      ? placeholders.filter((session) =>
                          isSameDay(new Date(session?.timeRange.start), day),
                        )
                      : data?.filter((session: Session) =>
                          isSameDay(new Date(session?.timeRange.start), day),
                        );

                    return (
                      <WeekGrid
                        key={day.toISOString()}
                        day={day}
                        containerRef={containerRef}
                        sessions={daySessions || []}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Viewport>
      </ScrollArea>
    </div>
  );
};
