import { useCallback, useRef } from "react";
import { useWheel } from "@use-gesture/react";
import {
  addDays,
  subDays,
  addMonths,
  subMonths,
  startOfMonth,
  differenceInDays,
} from "date-fns";

type ViewType = "day" | "week" | "month";

interface SwipeNavigationOptions {
  currentDate: Date; 
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
  updateDays?: (updateFunc: (prevDays: Date[]) => Date[]) => void; 
  view: ViewType; 
}

export const useSwipeNavigation = ({
  currentDate,
  setCurrentDate,
  updateDays,
  view,
}: SwipeNavigationOptions) => {
  const isScrollingRef = useRef(false);

  const handleSwipe = useCallback(
    (direction: "left" | "right") => {
      if (isScrollingRef.current) return;

      isScrollingRef.current = true;

      if (view === "day") {
        const newDate =
          direction === "right"
            ? addDays(currentDate, 1)
            : subDays(currentDate, 1);
        setCurrentDate(newDate);
      } else if (view === "week" && updateDays) {
        updateDays((prevDays) => {
          const isRight = direction === "right";
          const newDay = isRight
            ? addDays(prevDays[prevDays.length - 1], 1)
            : subDays(prevDays[0], 1);

          if (
            (isRight && differenceInDays(newDay, currentDate) === 7) ||
            (!isRight && differenceInDays(newDay, currentDate) === -7)
          ) {
            setCurrentDate(newDay);
          }

          return isRight
            ? [...prevDays.slice(1), newDay]
            : [newDay, ...prevDays.slice(0, -1)];
        });
      } else if (view === "month") {
        const isRight = direction === "right";
        const newMonthStart = isRight
          ? startOfMonth(addMonths(currentDate, 1))
          : startOfMonth(subMonths(currentDate, 1));
        setCurrentDate(newMonthStart);
      }

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 300);
    },
    [currentDate, setCurrentDate, view, updateDays]
  );

  const bind = useWheel(
    ({ movement: [mx] }) => {
      if (mx > 60) handleSwipe("right");
      else if (mx < -60) handleSwipe("left");
    },
    { rubberband: true }
  );

  return bind;
};
