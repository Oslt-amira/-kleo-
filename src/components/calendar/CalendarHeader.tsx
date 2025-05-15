import {
  addMonths,
  subMonths,
  addWeeks,
  subWeeks,
  addDays,
  subDays,
  startOfWeek,
  endOfWeek,
  format,
} from "date-fns";
import { Button } from "../ui/button";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { ViewDropdown } from "./elements/ViewDropdown";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { YearCalendar } from "./elements/YearCalendar";
import React, { useEffect } from "react";
import { useView } from "@/components/calendar/views/ViewContext";


export const CalendarHeader: React.FC= () => {

  const { currentDate, setCurrentDate, view } = useView();


  const handleNext = () => {
    if (view === "week") {
      setCurrentDate((prevDate) => addWeeks(prevDate, 1));
    } else if (view === "day") {
      setCurrentDate((prevDate) => addDays(prevDate, 1));
    } else if (view === "month"){
      setCurrentDate((prevDate) => addMonths(prevDate, 1));
    }
  };

  const handlePrevious = () => {
    if (view === "week") {
      setCurrentDate((prevDate) => subWeeks(prevDate, 1));
    } else if (view === "day") {
      setCurrentDate((prevDate) => subDays(prevDate, 1));
    } else if (view === "month"){
      setCurrentDate((prevDate) => subMonths(prevDate, 1));
    }
  };
  const goToToday = () => {
    setCurrentDate(new Date());
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      } else if (event.altKey && event.key === "t") {
        setCurrentDate(new Date());
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [view]);

  const renderHeader = () => {
    if (view === "week") {
      const weekStart = startOfWeek(currentDate);
      const weekEnd = endOfWeek(currentDate);
      const startMonth = format(weekStart, "MMM");
      const endMonth = format(weekEnd, "MMM");

      if (startMonth !== endMonth) {
        return `${startMonth} - ${endMonth} ${format(weekEnd, "yyyy")}`;
      } else {
        return `${startMonth} ${format(weekStart, "yyyy")}`;
      }
    } else if (view === "day") {
      return format(currentDate, "d MMMM, yyyy");
    } else {
      return format(currentDate, "MMMM yyyy");
    }
  };

  return (
    <div className="mt-6 flex h-[10vh] flex-row items-center justify-between space-x-1">
      <div className="flex space-x-2">
        <Popover>
          <PopoverTrigger asChild>
            <span className="rounded-lg bg-[#FCFCFC] px-3 py-2 text-center text-sm text-[#8D8D8D] hover:cursor-pointer">
              {renderHeader()}
            </span>
          </PopoverTrigger>
          <PopoverContent className="w-auto rounded-xl p-0" align="center">
            <YearCalendar
              mode="single"
              initialFocus
              fromYear={new Date().getFullYear() - 3}
              toYear={new Date().getFullYear() + 3}
              captionLayout="dropdown"
              fixedWeeks
              selected={currentDate}
              onSelect={(date) => {
                if (date) {
                  setCurrentDate(date);
                }
              }}
            />
          </PopoverContent>
        </Popover>

        <div className="flex flex-row items-center rounded-lg bg-[#FCFCFC] px-1 py-2">
          <span
            className={`text-center text-xs text-[#8D8D8D] ${view !== "week" ? "hidden" : "px-2"} `}
          >
            {format(startOfWeek(currentDate), "EEE d")} -{" "}
            {format(endOfWeek(currentDate), "EEE d")}
          </span>
          <Button
            variant="ghost"
            className="h-3 p-1 hover:bg-transparent"
            onClick={handlePrevious}
          >
            <CaretLeft color="#8D8D8D" />
          </Button>

          <Button
            variant="ghost"
            className="h-3 p-1 hover:bg-transparent"
            onClick={handleNext}
          >
            <CaretRight color="#8D8D8D" />
          </Button>
        </div>

        <Button
          variant="ghost"
          onClick={goToToday}
          className="bg-[#FCFCFC] px-3 py-2 text-sm text-[#8D8D8D] hover:bg-transparent hover:text-[#8D8D8D]"
        >
          Today
        </Button>
      </div>

      <div className="ml-auto flex items-center space-x-1">
        <ViewDropdown />
      </div>
    </div>
  );
};
