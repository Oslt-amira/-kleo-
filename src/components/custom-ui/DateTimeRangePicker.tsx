import React from "react";
import { DatePicker } from "./DatePicker";
import { Separator } from "../ui/separator";
import TimePicker from "./TimePicker";

interface DateTimeRangePickerProps {
  start: Date;
  end: Date;
  onDateChange: (date: Date) => void;
  onTimeChange: (type: "start" | "end", hour: number, minute: number) => void;
}

export const DateTimeRangePicker: React.FC<DateTimeRangePickerProps> = ({
  start,
  end,
  onDateChange,
  onTimeChange,
}) => {
  const handleDateChange = (newDate: Date) => {
    const previousStartTime = new Date(start);
    newDate.setHours(
      previousStartTime.getHours(),
      previousStartTime.getMinutes(),
    );
    onDateChange(newDate);
  };

  const handleTimeChange = (
    type: "start" | "end",
    hour: number,
    minute: number,
  ) => {
    if (type === "start") {
      const newStart = new Date(start);
      newStart.setHours(hour, minute);

      if (end <= newStart) {
        const newEnd = new Date(newStart);
        newEnd.setHours(newStart.getHours() + 1);
        onTimeChange("end", newEnd.getHours(), newEnd.getMinutes());
      }
      onTimeChange(type, hour, minute);
    } else {
      const newEnd = new Date(end);
      newEnd.setHours(hour, minute);

      if (newEnd <= start) {
        const newStart = new Date(newEnd);
        newStart.setHours(newEnd.getHours() - 1);
        onTimeChange("start", newStart.getHours(), newStart.getMinutes());
      } else {
        onTimeChange(type, hour, minute);
      }
    }
  };

  return (
    <div className="flex flex-row items-center">
      <DatePicker date={start} onDateChange={handleDateChange} />
      <Separator orientation="vertical" className="mx-1 h-4" />
      <TimePicker
        time={start}
        onTimeChange={(hour, minute) => handleTimeChange("start", hour, minute)}
      />
      <p className="px-1 text-gray-800">-</p>
      <TimePicker
        time={end}
        onTimeChange={(hour, minute) => handleTimeChange("end", hour, minute)}
      />
    </div>
  );
};
