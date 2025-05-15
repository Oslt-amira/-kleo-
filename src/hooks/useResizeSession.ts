import { useRef, useState } from "react";
import { addMinutes, differenceInMinutes } from "date-fns";
import { Session } from "@/db/schema";

type ResizeDirection = "start" | "end";

export const useResizeSession = (
  session: Session,
  onResize: (updatedSession: Session) => void,
  isResizingRef: React.MutableRefObject<boolean>,
) => {
  const initialYRef = useRef<number | null>(null);
  const tempSessionRef = useRef<Session | any>();
  const [resizedSession, setResizedSession] = useState<Session | null>();
  const handleMouseMove = (
    moveEvent: MouseEvent,
    direction: ResizeDirection,
  ) => {
    const deltaY = moveEvent.clientY - (initialYRef.current || 0);
    const updatedTime =
      direction === "start"
        ? addMinutes(
            new Date(session.timeRange.start),
            Math.round(deltaY / 20) * 15,
          )
        : addMinutes(
            new Date(session.timeRange.end),
            Math.round(deltaY / 20) * 15,
          );

    const isValidUpdate =
      direction === "start"
        ? differenceInMinutes(session.timeRange.end, updatedTime) >= 15
        : differenceInMinutes(updatedTime, session.timeRange.start) >= 15;

    if (isValidUpdate) {
      const updatedSession = {
        ...session,
        start: new Date(session.timeRange.start),
        end: new Date(session.timeRange.end),
        [direction]: new Date(updatedTime),
      };

      tempSessionRef.current = updatedSession;
      setResizedSession({
        ...updatedSession,
        timeRange: {
          start: updatedSession.start,
          end: updatedSession.end,
        },
      });
    }
  };

  const handleResizeStart = (
    e: React.MouseEvent,
    direction: ResizeDirection,
  ) => {
    e.preventDefault();
    initialYRef.current = e.clientY;
    isResizingRef.current = true;
    setResizedSession(session);

    tempSessionRef.current = session;
    const onMouseMove = (moveEvent: MouseEvent) =>
      handleMouseMove(moveEvent, direction);

    const onMouseUp = () => {
      setResizedSession(null);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      onResize(tempSessionRef.current);

      isResizingRef.current = false;
      tempSessionRef.current = null;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  return {
    handleResizeStart,
    resizedSession,
  };
};
