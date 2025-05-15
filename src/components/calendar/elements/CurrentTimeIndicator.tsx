import React, { useEffect, useRef, useState } from "react";
import { differenceInMinutes, startOfDay, format } from "date-fns";

const CurrentTimeIndicator: React.FC = () => {
  const currentTimeRef = useRef<HTMLDivElement | null>(null);
  const [currentTimePosition, setCurrentTimePosition] = useState(0);
  const [currentTime, setCurrentTime] = useState(() => new Date());

  const updateCurrentTimePosition = () => {
    const now = new Date();
    const minutesFromStartOfDay = differenceInMinutes(now, startOfDay(now));
    setCurrentTimePosition((minutesFromStartOfDay / 60) * 80);
    setCurrentTime(now);
  };

  useEffect(() => {
    updateCurrentTimePosition();
    const intervalId = setInterval(updateCurrentTimePosition, 60000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (currentTimeRef.current) {
      currentTimeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentTimePosition]);

  return (
    <div
      ref={currentTimeRef}
      className="absolute flex flex-row space-x-12 items-center mx-2 mt-1.5"
      style={{
        top: `${currentTimePosition}px`,
        left: "0px",
        width: "99.5%",
        zIndex: 2,
      }}
    >
      <div className="absolute left-0 px-1.5 py-0.5 text-[11px] font-medium text-orange-800 bg-orange-300 rounded-lg">
        {format(currentTime, "HH:mm")}
      </div>

      <div className="w-full h-0.5 border-t border-dashed border-orange-500" />
    </div>
  );
};

export default CurrentTimeIndicator;
