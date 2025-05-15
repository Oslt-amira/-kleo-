import React from "react";
import { format, isSameMonth, isToday } from "date-fns";

interface WeekGridHeaderProps {
  day: Date;
}

export const WeekGridHeader: React.FC<WeekGridHeaderProps> = ({ day }) => {
  const today = new Date();
  const isCurrentMonth = isSameMonth(day, today);
  const isCurrentDay = isToday(day);

  return (
    <div className="text-center content-center h-10 mb-1">
      <span
        className={`text-sm text-center ${
          isCurrentDay
            ? "bg-[#FF3E00] text-white rounded-lg px-3 py-1 self-center"
            : isCurrentMonth
            ? "text-[#BBBBBB]"
            : "text-slate-200"
        }`}
      >
        {format(day, "EEE")} {format(day, "d")}
      </span>
    </div>
  );
};
