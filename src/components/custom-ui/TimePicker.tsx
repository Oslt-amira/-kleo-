import React, { useEffect, useState } from "react";
import { format, isValid, setHours, setMinutes } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "../ui/scroll-area";

const TimePicker: React.FC<{
  time: Date;
  onTimeChange: (hour: number, minute: number) => void;
}> = ({ time, onTimeChange }) => {
  const [selectedHour, setSelectedHour] = useState<number>(time.getHours());
  const [selectedMinute, setSelectedMinute] = useState<number>(
    time.getMinutes(),
  );

  useEffect(() => {
    setSelectedHour(time.getHours());
    setSelectedMinute(time.getMinutes());
  }, [time]);

  const handleTimeSelect = (hour: number, minute: number) => {
    setSelectedHour(hour);
    setSelectedMinute(minute);
    onTimeChange(hour, minute);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-10 border-none p-0 font-medium text-gray-900 text-opacity-80 shadow-none hover:bg-transparent hover:text-orange-800"
        >
          {isValid(time) &&
            format(
              setHours(setMinutes(new Date(), selectedMinute), selectedHour),
              "HH:mm",
            )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-min rounded-xl p-0">
        <div className="flex items-center rounded-lg p-1">
          <ScrollArea className="h-36">
            {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
              <Button
                key={hour}
                variant="outline"
                onClick={() => handleTimeSelect(hour, selectedMinute)}
                className={`block rounded border-none bg-transparent px-3 py-2 text-left text-sm font-medium text-gray-900/80 shadow-none hover:text-orange-800 ${
                  selectedHour === hour ? "bg-gray-300/50 font-semibold" : ""
                }`}
              >
                {hour.toString().padStart(2, "0")}
              </Button>
            ))}
          </ScrollArea>
          <ScrollArea className="h-36 w-min">
            {[0, 15, 30, 45].map((minute) => (
              <Button
                key={minute}
                variant="outline"
                onClick={() => handleTimeSelect(selectedHour, minute)}
                className={`block rounded border-none bg-transparent px-3 py-2 text-left text-sm font-medium text-gray-900/80 shadow-none hover:text-orange-800 ${
                  selectedMinute === minute
                    ? "bg-gray-300/50 font-semibold"
                    : ""
                }`}
              >
                {minute.toString().padStart(2, "0")}
              </Button>
            ))}
          </ScrollArea>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default TimePicker;
