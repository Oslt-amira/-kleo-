import { getColorForSubject } from "@/hooks/useSubjectColor";
import { format, isSameMonth, isToday } from "date-fns";
import React from "react";
import { MonthSession } from "./MonthSession";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Session } from "@/db/schema";

interface DayGridItemProps {
  day: Date;
  sessions: Session[];
  onDayClick: (day: Date) => void;
}

export const DayGrid: React.FC<DayGridItemProps> = ({
  day,
  sessions,
  onDayClick,
}) => {
  const today = new Date();
  const isCurrentMonth = isSameMonth(day, today);
  const isCurrentDay = isToday(day);
  const maxVisibleSessions = 3;
  const visibleSessions = sessions.slice(0, maxVisibleSessions);
  const remainingSessions = sessions.length - maxVisibleSessions;

  return (
    <div
      className={`flex h-40 flex-col items-center border-b border-r border-[#F0F0F0] px-1 py-2 text-center font-medium hover:cursor-pointer hover:bg-[#fdfafa] ${
        isCurrentMonth ? "text-[#BBBBBB]" : "text-slate-200"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onDayClick(day);
        }
      }}
    >
      <span
        className={`mb-1 ${
          isCurrentDay
            ? "mb-2 h-7 w-7 rounded-lg bg-[#FF3E00] p-1 text-white"
            : "p-1"
        }`}
      >
        {format(day, "d")}
      </span>

      <div className="flex w-full flex-col space-y-2">
        {visibleSessions.map((session, id) => {
          const sessionColor = getColorForSubject(session.subject || "blue");
          return (
            <MonthSession
              key={id}
              session={session}
              colorClass={sessionColor}
            />
          );
        })}

        <HoverCard>
          <HoverCardTrigger asChild>
            {sessions.length > 3 && (
              <span className="text-xs text-gray-500">
                +{sessions.length - 3} more
              </span>
            )}
          </HoverCardTrigger>
          <HoverCardContent className="flex w-40 flex-col space-y-2 bg-white p-2 shadow-md">
            {remainingSessions > 0 &&
              sessions.slice(maxVisibleSessions).map((session, id) => {
                const sessionColor = getColorForSubject(
                  session.subject || "blue",
                );
                return (
                  <MonthSession
                    key={id}
                    session={session}
                    colorClass={sessionColor}
                  />
                );
              })}
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
};
