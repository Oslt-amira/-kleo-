import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SessionForm } from "./SessionForm";
import { useToast } from "@/hooks/use-toast";
import { Session } from "@/db/schema";
import { handleSessionDelete, handleSessionUpdate } from "@/lib/sessionUtils";
import { SheetOptions } from "./SheetOptions";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useView } from "@/components/calendar/views/ViewContext";

interface SessionSheetProps {
  session: Session;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export const SessionSheet: React.FC<SessionSheetProps> = ({
  session,
  isOpen,
  onOpenChange,
}) => {
  const { view } = useView();

  const { toast } = useToast();
  const [formData, setFormData] = useState<any>({
    ...session,
    start: session ? new Date(session.timeRange.start) : new Date(),
    end: session ? new Date(session.timeRange.end) : new Date(),
  });

  const handleSaveEdits = async (formData: any) => {
    await handleSessionUpdate({
      formData,
      session,
      toast,
      view,
      onOpenChange,
    });
  };
  const handleDelete = async () => {
    await handleSessionDelete({
      session,
      toast,
      view,
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger className="hidden" />
      <VisuallyHidden>
        <SheetTitle />
      </VisuallyHidden>
      <SheetContent className="flex h-full w-full flex-col justify-between rounded-l-lg sm:max-w-md">
        <SessionForm
          formData={formData}
          setFormData={setFormData}
          mode="edit"
        />
        <SheetOptions
          formData={formData}
          onSave={handleSaveEdits}
          onDelete={handleDelete}
        />
      </SheetContent>
    </Sheet>
  );
};
