import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  addDays,
  addMinutes,
  eachWeekOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { DayGrid } from "../elements/DayGrid";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea, Viewport } from "@/components/custom-ui/scroll-area";
import { generatePlaceholderSessionsForMonth } from "@/data/generatePlaceholderSessions";
import { Session } from "@/db/schema";
import { CreateSessionDialog } from "@/components/custom-ui/CreateSessionDialog";
import { useView } from "@/components/calendar/views/ViewContext";

export const MonthView: React.FC = () => {
  const { userId, currentDate, data, isLoading, error } = useView();

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);

  const { toast } = useToast();

  const generateWeekDays = useCallback(
    (date: Date) =>
      Array.from({ length: 7 }, (_, i) => addDays(startOfWeek(date), i)),
    [],
  );
  const days: any = generateWeekDays(currentDate);

  const weeks = eachWeekOfInterval({ start: startDate, end: endDate });

  const placeholders = useMemo(
    () => generatePlaceholderSessionsForMonth(monthStart, monthEnd),
    [monthStart, monthEnd],
  );

  const handleDayClick = useCallback((day: Date) => {
    setSelectedDay(day);
    setIsDialogVisible(true);
  }, []);

  useEffect(() => {
    if (error) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "We couldn't retrieve your sessions. Try again later.",
      });
    }
  }, [error]);

  return (
    <div className="flex h-[95vh] w-full flex-col items-start">
      <div className="grid w-full grid-cols-7">
        {days.map((day: any) => (
          <div
            key={day.toISOString()}
            className="px-2 pb-2 text-center text-lg font-medium text-[#BBBBBB]"
          >
            {format(day, "EEE")}
          </div>
        ))}
      </div>
      <ScrollArea className="h-full w-full">
        <Viewport className="max-h-[95vh]">
          <div className="border-l border-t border-[#F0F0F0]">
            {weeks.map((weekStart) => (
              <div key={weekStart.toISOString()} className="grid grid-cols-7">
                {days.map((day: any, i: any) => {
                  const dayOfWeek = addDays(weekStart, i);
                  const daySessions = isLoading
                    ? placeholders.filter((session) =>
                        isSameDay(
                          new Date(session?.timeRange.start),
                          dayOfWeek,
                        ),
                      )
                    : data?.filter((session: Session) =>
                        isSameDay(
                          new Date(session?.timeRange.start),
                          dayOfWeek,
                        ),
                      );

                  return (
                    <DayGrid
                      key={day}
                      day={dayOfWeek}
                      sessions={daySessions}
                      onDayClick={handleDayClick}
                    />
                  );
                })}
              </div>
            ))}
          </div>

          {selectedDay && isDialogVisible && (
            <CreateSessionDialog
              isOpen={isDialogVisible}
              onOpenChange={setIsDialogVisible}
              dialogData={{
                userId: userId,
                timeRange: {
                  start: selectedDay.toISOString(),
                  end: addMinutes(new Date(selectedDay), 30).toISOString(),
                },
              }}
            />
          )}
        </Viewport>
      </ScrollArea>
    </div>
  );
};
