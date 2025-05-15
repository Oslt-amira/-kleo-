import { CreateSession } from "@/app/(signed-in)/home/sessionActions";
import { TimeSelection } from "@/types/global";
import { useUser } from "@clerk/nextjs";
import { isBefore } from "date-fns";
import { useState, useCallback, useRef } from "react";

interface DragSelectHook {
  selectedRange: { start: TimeSelection; end: TimeSelection };
  isDragging: boolean;
  isLongPressActive: boolean;
  initialScrollTop: number;
  handleMouseDown: (
    e: React.MouseEvent<HTMLDivElement>,
    containerTop: number,
  ) => void;
  handleMouseUp: (
    e: React.MouseEvent<HTMLDivElement>,
    onSelectionComplete: (sessionData: any) => void
  ) => void;
  handleMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  resetSelection: () => void;
}

export const useDragSelect = (): DragSelectHook => {
  const [selectedRange, setSelectedRange] = useState<{
    start: TimeSelection;
    end: TimeSelection;
  }>({
    start: { time: null, positionY: null },
    end: { time: null, positionY: null },
  });
  const [isDragging, setIsDragging] = useState(false);
  const [isLongPressActive, setIsLongPressActive] = useState(false);
  const [initialScrollTop, setInitialScrollTop] = useState<number>(0);
  const longPressTimeout = useRef<NodeJS.Timeout | null>(null);
  const { user } = useUser();

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, containerTop: number) => {
      const time = new Date(e.currentTarget.getAttribute("data-time") || "");
      const positionY = e.currentTarget.getBoundingClientRect().top;

      setInitialScrollTop(containerTop);
      setSelectedRange({
        start: { time, positionY },
        end: { time, positionY },
      });

      setIsDragging(true);

      longPressTimeout.current = setTimeout(() => {
        setIsLongPressActive(true);
      }, 50);
    },
    [],
  );

  const handleMouseUp = useCallback(
    (e: React.MouseEvent<HTMLDivElement>,onSelectionComplete: (sessionData: any) => void) => {
      const time = new Date(e.currentTarget.getAttribute("data-time") || "");
      const positionY = e.currentTarget.getBoundingClientRect().top;

      if (isDragging || isLongPressActive) {
        setSelectedRange((prev) => ({
          ...prev,
          end: { time, positionY },
        }));
      }
      if (selectedRange.start.time && time) {
        let startTime = selectedRange.start.time;
        let endTime = time;
      
        if (isBefore(endTime, startTime)) {
          [startTime, endTime] = [endTime, startTime];
        }
      
        const sessionData = {
          userId: user?.publicMetadata.id,
          timeRange: {
            start: startTime,
            end: endTime,
          },
        };

        onSelectionComplete(sessionData);
       // CreateSession(sessionData);

      }
      if (longPressTimeout.current) {
        clearTimeout(longPressTimeout.current);
        longPressTimeout.current = null;
        setIsDragging(false);

      }

     
    },
    [isDragging],
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const time = new Date(e.currentTarget.getAttribute("data-time") || "");
      const positionY = e.currentTarget.getBoundingClientRect().top;

      if (isDragging || isLongPressActive) {
        setSelectedRange((prev) => ({
          ...prev,
          end: { time, positionY },
        }));
      }
    },
    [isDragging, isLongPressActive],
  );

  const resetSelection = useCallback(() => {
    setSelectedRange({
      start: { time: null, positionY: null },
      end: { time: null, positionY: null },
    });
    setIsDragging(false);
    setIsLongPressActive(false);

    if (longPressTimeout.current) {
      clearTimeout(longPressTimeout.current);
      longPressTimeout.current = null;
    }
  }, []);

  return {
    selectedRange,
    isDragging,
    isLongPressActive,
    initialScrollTop,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
    resetSelection,
  };
};
