import { useRef, useState } from "react";
import { addDays, addMinutes } from "date-fns";
import { Session } from "@/db/schema";
import { useView } from "@/components/calendar/views/ViewContext";

export const useDragAndDropSession = (
  session: Session,
  onDrop: (updatedSession: Session) => void,
  isDragging: React.MutableRefObject<boolean>,
  sessionRef?: React.MutableRefObject<HTMLDivElement | null>,
) => {
  const initialYRef = useRef<number | null>(null);
  const initialXRef = useRef<number | null>(null);
  const tempSessionRef = useRef<Session | any>();
  const [draggedSession, setDraggedSession] = useState<Session | null>();
  const { view } = useView();
  const handleMouseMove = (moveEvent: MouseEvent) => {
    if (!initialYRef.current || !initialXRef.current) return;

    const deltaY = moveEvent.clientY - (initialYRef.current || 0);
    const deltaX = moveEvent.clientX - (initialXRef.current || 0);

    const timeOffset = Math.round(deltaY / 20) * 15;
    const width =
      sessionRef && sessionRef.current ? sessionRef?.current.offsetWidth : 100;
    const dayOffset = deltaX ? Math.round(deltaX / width) : 0;

    let newStart = addMinutes(new Date(session.timeRange.start), timeOffset);
    let newEnd = addMinutes(new Date(session.timeRange.end), timeOffset);

    if (view === "month") {
      newStart = addDays(
        new Date(session.timeRange.start),
        Math.round((deltaX / width) * 80),
      );
      newEnd = addDays(
        new Date(session.timeRange.end),
        Math.round((deltaX / width) * 80),
      );
    }
    const updatedSession = {
      ...session,
      start: addMinutes(newStart, dayOffset * 24 * 60),
      end: addMinutes(newEnd, dayOffset * 24 * 60),
    };

    tempSessionRef.current = updatedSession;
    setDraggedSession({
      ...updatedSession,
      timeRange: {
        start: updatedSession.start,
        end: updatedSession.end,
      },
    });
  };

  const handleDragStart = (e: React.MouseEvent) => {
    e.preventDefault();
    initialYRef.current = e.clientY;
    initialXRef.current = e.clientX;
    setDraggedSession(session);
    isDragging.current = true;

    tempSessionRef.current = session;
    const startX = e.clientX;
    const startY = e.clientY;

    let hasDragged = false;

    const onMouseMove = (moveEvent: MouseEvent) => {
      isDragging.current = true;
      const deltaX = Math.abs(moveEvent.clientX - startX);
      const deltaY = Math.abs(moveEvent.clientY - startY);
      if (deltaX > 5 || deltaY > 5) {
        hasDragged = true;
        handleMouseMove(moveEvent);
      }
    };

    const onMouseUp = () => {
      setDraggedSession(null);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      if (!hasDragged) {
        isDragging.current = false;
        return;
      }
      if (tempSessionRef.current) onDrop(tempSessionRef.current);

      tempSessionRef.current = null;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  return {
    handleDragStart,
    draggedSession,
  };
};
