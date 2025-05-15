import { differenceInMinutes, format, startOfDay } from "date-fns";
import { motion } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { useResizeSession } from "@/hooks/useResizeSession";
import { ResizeIndicators } from "./ResizeIndicator";
import { LockSimple } from "@phosphor-icons/react";
import clsx from "clsx";
import { Skeleton } from "@/components/ui/skeleton";
import { SessionSheet } from "@/components/custom-ui/SessionSheet";
import { handleSessionUpdate } from "@/lib/sessionUtils";
import { useView } from "@/components/calendar/views/ViewContext";
import { Session } from "@/db/schema";
import { useToast } from "@/hooks/use-toast";
import { useDragAndDropSession } from "@/hooks/useDragAndDropSession";
import { debounce } from "lodash";

interface TimeGridSessionProps {
  session: Session;
  colorClass: string;
}

export const SessionTimeDisplay: React.FC<{
  session: Session;
  colorClass: string;
  isMediumHeight: boolean;
}> = ({ session, colorClass, isMediumHeight }) => (
  <div
    className={clsx(
      isMediumHeight ? "flex flex-col text-right" : "items-center",
      `text-${colorClass}-400 text-[10px] font-medium`,
    )}
  >
    <span>{format(session?.timeRange.start, "HH:mm")}</span>
    {!isMediumHeight && <span> - </span>}
    <span>{format(session?.timeRange.end, "HH:mm")}</span>
  </div>
);

export const TimeGridSession: React.FC<TimeGridSessionProps> = ({
  session,
  colorClass,
}) => {
  const { toast } = useToast();
  const isResizing = useRef(false);
  const isDragging = useRef(false);
  const sessionRef = useRef<HTMLDivElement | null>(null);
  const { view } = useView();
  const onSessionResize = async (updatedSession: Session) => {
    await handleSessionUpdate({
      formData: updatedSession,
      session: session,
      toast,
      view,
    });
  };

  const debouncedSetDragging = useRef(
    debounce(() => {
      isDragging.current = false;
    }, 300),
  ).current;

  const { handleResizeStart, resizedSession } = useResizeSession(
    session,
    onSessionResize,
    isResizing,
  );

  const { handleDragStart, draggedSession } = useDragAndDropSession(
    session,
    onSessionResize,
    isDragging,
    sessionRef,
  );

  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleSessionClick = () => {
    setIsSheetOpen(true);
  };

  const sessionStyle = useMemo(() => {
    const activeSession = resizedSession || draggedSession || session;

    const startTime = activeSession?.timeRange.start;
    const endTime = activeSession?.timeRange.end;

    const minutesFromStart = differenceInMinutes(
      startTime,
      startOfDay(startTime),
    );
    const durationMinutes = differenceInMinutes(endTime, startTime);

    return {
      top: `${(minutesFromStart / 15) * 20}px`,
      height: `${(durationMinutes / 15) * 20}px`,
    };
  }, [session, resizedSession, draggedSession]);

  const height = parseInt(sessionStyle.height, 10);
  const isSmallHeight = height < 60;
  const isMediumHeight = height >= 60 && height < 100;

  if (!session) {
    return;
  }
  const renderSession = (additionalStyles: string, content: JSX.Element) => (
    <motion.div
      ref={sessionRef}
      className={clsx(
        "absolute z-10 ml-1 flex h-full w-[98%] items-center justify-center space-x-1 rounded-xl px-2 py-2",
        additionalStyles,
      )}
      animate={{ scale: isDragging.current ? 1.05 : 1 }}
      whileHover={{ scale: 1.05 }}
      style={sessionStyle}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        if (isResizing.current || isDragging.current) {
          return;
        }
        handleSessionClick();
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        e.preventDefault();
        if (isResizing.current) {
          return;
        }
        debouncedSetDragging();
        handleDragStart(e);
        isDragging.current = false;
      }}
    >
      {content}
      {isSheetOpen && (
        <SessionSheet
          session={session}
          isOpen={isSheetOpen}
          onOpenChange={setIsSheetOpen}
        />
      )}
      <ResizeIndicators handleResizeStart={handleResizeStart} />
    </motion.div>
  );

  if (session?.type === "Loading") {
    return (
      <Skeleton
        className="absolute z-10 ml-0.5 flex h-full w-[98%] items-center justify-center space-x-1 rounded-xl px-2 py-2"
        style={sessionStyle}
      />
    );
  }

  if (session?.type === "Busy") {
    return renderSession(
      "border border-dashed border-gray-800 bg-gray-100",
      <>
        <LockSimple size={16} color="#BBBBBB" weight="bold" />
        <div className="text-sm font-medium text-gray-800">Busy Time</div>
      </>,
    );
  }

  if (session?.type === "Exam") {
    return renderSession(
      `bg-${colorClass}-100 flex flex-col justify-between`,
      <>
        <div
          className={clsx(
            "flex w-full place-self-start",
            isSmallHeight
              ? "-mt-1.5 justify-between"
              : isMediumHeight
                ? "justify-between"
                : "flex-col items-start",
          )}
        >
          <div
            className={clsx(
              "max-h-[100px] max-w-[120px] overflow-hidden text-ellipsis whitespace-nowrap text-xs font-semibold leading-tight",
              `text-${colorClass}-800`,
            )}
          >
            {session?.subject}
          </div>
          <SessionTimeDisplay
            session={
              draggedSession
                ? draggedSession
                : resizedSession
                  ? resizedSession
                  : session
            }
            colorClass={colorClass}
            isMediumHeight={isMediumHeight}
          />
        </div>
        {!isSmallHeight && (
          <div className="my-1 w-full place-content-end">
            <div
              className={clsx(
                "my-0.5 h-0.5 w-full rounded-full",
                `bg-${colorClass}-600`,
              )}
            />
            <div
              className={clsx(
                "my-0.5 h-0.5 w-full rounded-full",
                `bg-${colorClass}-600`,
              )}
            />
          </div>
        )}
      </>,
    );
  }

  return renderSession(
    `bg-${colorClass}-100`,
    <>
      {!isSmallHeight && (
        <div
          className={clsx("h-full w-1 rounded-full", `bg-${colorClass}-400`)}
        />
      )}
      <div className="flex h-full w-full flex-col justify-between">
        <div
          className={clsx(
            "mx-1 flex",
            isSmallHeight
              ? "-mt-1.5 justify-between"
              : isMediumHeight
                ? "justify-between"
                : "flex-col",
          )}
        >
          <div
            className={clsx(
              "max-h-[100px] max-w-[120px] overflow-hidden text-ellipsis whitespace-nowrap text-xs font-semibold leading-tight",
              `text-${colorClass}-800`,
            )}
          >
            {session?.title}
          </div>
          <SessionTimeDisplay
            session={
              draggedSession
                ? draggedSession
                : resizedSession
                  ? resizedSession
                  : session
            }
            colorClass={colorClass}
            isMediumHeight={isMediumHeight}
          />
        </div>

        {!isSmallHeight && (
          <div className="flex items-center">
            <div
              className={clsx(
                "rounded-lg px-1.5 py-0.5 text-center text-[9px] font-semibold",
                `bg-${colorClass}-150 text-${colorClass}-800`,
              )}
            >
              {session?.type}
            </div>
            <div
              className={clsx(
                "mx-0.5 text-center text-[10px] font-semibold",
                `text-${colorClass}-400`,
              )}
            >
              {session?.subject}
            </div>
          </div>
        )}
      </div>
    </>,
  );
};
