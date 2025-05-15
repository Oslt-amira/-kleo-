import React from "react";
import { format } from "date-fns";
import CurrentTimeIndicator from "../elements/CurrentTimeIndicator";

interface TimeColumnProps {}

export const TimeColumn: React.FC<TimeColumnProps> = () => {
  return (
    <div className="flex flex-col w-11 mx-1.5">
      {Array.from({ length: 24 }).map((_, i) => (
        <div
          key={i}
          className="h-20 flex items-start text-[#BBBBBB] justify-center text-[11px]"
        >
          {format(new Date().setHours(i, 0, 0, 0), "HH:mm")}
        </div>
      ))}
      <CurrentTimeIndicator />
    </div>
  );
};