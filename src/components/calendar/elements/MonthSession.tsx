import { LockSimple } from "@phosphor-icons/react";
import clsx from "clsx";
import { Skeleton } from "@/components/ui/skeleton";
import { SessionSheet } from "@/components/custom-ui/SessionSheet";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { SessionTimeDisplay } from "./TimeGridSession";
import { Session } from "@/db/schema";
import { useView } from "@/components/calendar/views/ViewContext";
import { handleSessionUpdate } from "@/lib/sessionUtils";
import { useDragAndDropSession } from "@/hooks/useDragAndDropSession";
import { useToast } from "@/hooks/use-toast";
import { debounce } from "lodash";

interface MonthSessionProps {
  session: Session;
  colorClass: string;
}

export const MonthSession: React.FC<MonthSessionProps> = ({
  session,
  colorClass,
}) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const isDragging = useRef(false);
  const sessionRef = useRef<HTMLDivElement | null>(null);

  const { toast } = useToast();

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
    }, 500),
  ).current;

  const { handleDragStart, draggedSession } = useDragAndDropSession(
    session,
    onSessionResize,
    isDragging,
  );

  const handleSessionClick = () => {
    if (isDragging.current) {
      return;
    } else {
      setIsSheetOpen(true);
    }
  };

  if (!session) {
    return;
  }
  const renderSession = (additionalStyles: string, content: JSX.Element) => (
    <motion.div
      className={clsx(
        "z-10 flex h-6 min-h-[0.5rem] w-full flex-row items-center justify-center rounded-lg px-1 py-1",
        additionalStyles,
      )}
      onClick={handleSessionClick}
      onMouseDown={(e) => {
        e.stopPropagation();
        e.preventDefault();
        isDragging.current = true;
        debouncedSetDragging();
        handleDragStart(e);
        setTimeout(() => {
          isDragging.current = false;
        }, 100);
      }}
    >
      <div
        className={clsx(
          "h-[80%] w-[3px] rounded-full py-0",
          `bg-${colorClass}-600`,
        )}
      />

      <div className="flex w-full items-center justify-center">{content}</div>

      {isSheetOpen && (
        <SessionSheet
          session={session}
          isOpen={isSheetOpen}
          onOpenChange={setIsSheetOpen}
        />
      )}
    </motion.div>
  );

  if (session.type === "Loading") {
    return (
      <Skeleton className="z-10 flex h-4 w-full items-center justify-center space-y-1 rounded-xl px-2 py-2" />
    );
  }

  if (session.type === "Busy") {
    return renderSession(
      "border border-dashed border-gray-800 bg-gray-100 ",
      <>
        <LockSimple size={12} color="#BBBBBB" weight="bold" />
      </>,
    );
  }

  return renderSession(
    `bg-${colorClass}-100`,
    <div
      ref={sessionRef}
      className="flex w-full flex-row items-start justify-between space-x-2 px-1"
    >
      <div
        className={clsx(
          "max-h-[100px] max-w-[80px] overflow-hidden text-ellipsis whitespace-nowrap text-xs font-semibold leading-tight",
          `text-${colorClass}-800`,
        )}
      >
        {session.title}
      </div>
      <SessionTimeDisplay
        session={draggedSession ? draggedSession : session}
        colorClass={colorClass}
        isMediumHeight={false}
      />
    </div>,
  );
};
