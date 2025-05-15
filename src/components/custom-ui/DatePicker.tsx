

import * as React from "react";
import { format, isValid } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { YearCalendar } from "../calendar/elements/YearCalendar";
import { useEffect } from "react";

export function DatePicker({
  date,
  onDateChange,
}: {
  date: Date ;
  onDateChange: (date: Date ) => void;
}) {
  const [selectedDate, setSelectedDate] = React.useState<Date | any>(date);

  useEffect(() => {
    setSelectedDate(date);
  }, [date]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-fit justify-start border-none p-1 text-left font-medium text-gray-900 text-opacity-80 shadow-none hover:bg-transparent hover:text-orange-700",
            !selectedDate && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="h-4 w-4" />
          {selectedDate && isValid(new Date(selectedDate)) ? (
            format(new Date(selectedDate), "d MMM yyyy")
          ) : (
            <span className="text-opacity-40">Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto rounded-xl p-0">
        <YearCalendar
          mode="single"
          initialFocus
          fromYear={new Date().getFullYear() - 3}
          toYear={new Date().getFullYear() + 3}
          captionLayout="dropdown"
          fixedWeeks
          selected={selectedDate}
          onSelect={(date) => {
            if (date) {
              setSelectedDate(date);
              onDateChange(date);
            }
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
