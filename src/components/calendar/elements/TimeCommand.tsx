"use client";

import * as React from "react";
import { addDays, format, isValid, parse, startOfWeek } from "date-fns";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CustomInput } from "@/components/custom-ui/CustomInput";
import { handleBusySessionCreate } from "@/lib/sessionUtils";
import { useToast } from "@/hooks/use-toast";
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useView } from "@/components/calendar/views/ViewContext";

export function TimeCommand() {
  const { userId, currentDate } = useView();
  const { view } = useView();
  const [open, setOpen] = React.useState(false);
  const [customInput, setCustomInput] = React.useState("");
  const { toast } = useToast();

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "b" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prevOpen) => !prevOpen);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const validateInput = (input: string) => {
    const regex =
      /^((Mon|Tue|Wed|Thu|Fri|Sat|Sun)(\s+to\s+(Mon|Tue|Wed|Thu|Fri|Sat|Sun))?(,\s*(Mon|Tue|Wed|Thu|Fri|Sat|Sun))*)\s+\d{2}:\d{2}-\d{2}:\d{2}$/;
    return regex.test(input);
  };

  const parseCustomInput = (input: string): any[] | null => {
    const daysRegex =
      /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)(?:\s+to\s+(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun))?(?:,\s*(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun))*)/;
    const timeRegex = /(\d{2}:\d{2})-(\d{2}:\d{2})/;

    const daysMatch = input.match(daysRegex);
    const timeMatch = input.match(timeRegex);

    if (!daysMatch || !timeMatch) {
      toast({
        title: "Invalid format.",
        description: "Use 'Mon to Wed 09:00-17:00' or 'Mon, Thu 09:00-17:00'",
      });
      return null;
    }

    const daysInput = daysMatch[1];
    const startTime = timeMatch[1];
    const endTime = timeMatch[2];

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const startDate = parse(startTime, "HH:mm", new Date());
    const endDate = parse(endTime, "HH:mm", new Date());

    if (!isValid(startDate) || !isValid(endDate) || endDate <= startDate) {
      toast({
        title: "Invalid time range.",
        description: "Make sure the end time is after the start time.",
      });
      return null;
    }

    let days: string[] = [];
    if (daysInput.includes("to")) {
      const [startDay, endDay] = daysInput.split(/\s+to\s+/);
      const startIndex = weekdays.indexOf(startDay.trim());
      const endIndex = weekdays.indexOf(endDay.trim());

      if (startIndex === -1 || endIndex === -1 || startIndex > endIndex) {
        toast({
          title: "Invalid day range.",
          description: "Make sure to correctly specify the days.",
        });
        return null;
      }

      days = weekdays.slice(startIndex, endIndex + 1);
    } else {
      days = daysInput.split(/,\s*/).map((day) => day.trim());
    }

    return days.map((day) => ({
      day: day,
      timeRange: {
        start: format(startDate, "HH:mm"),
        end: format(endDate, "HH:mm"),
      },
      type: "Busy",
    }));
  };

  const createSession = async (
    dayIndex: number,
    startTime: string,
    endTime: string,
  ) => {
    const startOfWeekDate = startOfWeek(currentDate, { weekStartsOn: 1 }); // Start of the current week (Monday)
    const sessionDate = addDays(startOfWeekDate, dayIndex - 1); // Adjust date to match weekday

    const sessionData = {
      userId: userId,
      timeRange: {
        start: new Date(`${format(sessionDate, "yyyy-MM-dd")}T${startTime}:00`),
        end: new Date(`${format(sessionDate, "yyyy-MM-dd")}T${endTime}:00`),
      },
      type: "Busy",
    };

    await handleBusySessionCreate({
      sessionData,
      toast,
      view,
      onOpenChange: setOpen,
    });
  };

  const handleCustomSubmit = async () => {
    if (validateInput(customInput)) {
      const sessions = parseCustomInput(customInput);
      if (sessions) {
        const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        for (const session of sessions) {
          const dayIndex = weekdays.indexOf(session.day);
          if (dayIndex === -1) continue;
          await createSession(
            dayIndex,
            session.timeRange.start,
            session.timeRange.end,
          );
        }

        setCustomInput("");
      }
    } else {
      toast({
        title: "Invalid input format.",
        description:
          "Tip: Use 'Mon 09:00-17:00', 'Mon to Wed 09:00-17:00', or 'Mon, Thu 09:00-17:00'",
      });
    }
  };

  const addNineToFiveWeekdays = async () => {
    for (let i = 1; i <= 5; i++) {
      await createSession(i, "09:00", "17:00"); // Monday to Friday (Index 1–5)
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCustomSubmit();
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <VisuallyHidden>
        <DialogTitle />
      </VisuallyHidden>
      <DialogContent className="flex flex-col justify-between">
        <div className="absolute left-0 top-0 flex w-full items-center border-b p-2 px-3">
          <CalendarIcon className="opacity-60" color="gray" size={18} />
          <CustomInput
            className="flex h-8 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:font-medium placeholder:text-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Add a busy time slot (e.g., Mon to Wed 09:00-17:00)..."
            onKeyDown={handleKeyDown}
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
          />
        </div>
        <div className="-ml-2.5 mt-8 w-full py-1 text-[13px] text-gray-900">
          Suggestions
        </div>
        <Button
          variant="ghost"
          className="-mx-7 h-4 text-xs font-medium hover:bg-transparent"
          onClick={addNineToFiveWeekdays}
        >
          <div className="mx-1 flex w-full items-center justify-between text-center">
            <span className="text-medium text-xs text-gray-800">
              9–5 Weekdays
            </span>
            <span className="text-medium text-xs text-gray-700">
              Current Week Only
            </span>
          </div>
        </Button>
      </DialogContent>
    </Dialog>
  );
}
