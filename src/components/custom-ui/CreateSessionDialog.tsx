import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SessionForm } from "./SessionForm";
import { useToast } from "@/hooks/use-toast";
import { handleSessionCreate } from "@/lib/sessionUtils";
import { Button } from "../ui/button";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useView } from "@/components/calendar/views/ViewContext";

interface CreateSessionDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  dialogData?: {
    userId: any;
    timeRange: {
      start: string;
      end: string;
    };
  };
}

export const CreateSessionDialog: React.FC<CreateSessionDialogProps> = ({
  isOpen,
  onOpenChange,
  dialogData,
}) => {
  const { view } = useView();

  const { toast } = useToast();
  const [formData, setFormData] = useState<any>({
    ...dialogData,
    start: dialogData ? new Date(dialogData.timeRange.start) : new Date(),
    end: dialogData ? new Date(dialogData.timeRange.end) : new Date(),
  });
  useEffect(() => {
    if (dialogData) {
      setFormData((prev: any) => ({
        ...prev,
        start: new Date(dialogData.timeRange.start),
        end: new Date(dialogData.timeRange.end),
      }));
    }
  }, [dialogData]);

  const handleFormSubmit = async (formData: any) => {
    if (!dialogData) return;

    await handleSessionCreate({
      formData,
      dialogData,
      toast,
      view,
      onOpenChange,
    });
  };
  const isFormValid =
    formData.type && formData.start.getTime() !== formData.end.getTime();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isFormValid && e.key === "Enter") {
      e.preventDefault();
      handleFormSubmit(formData);
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger className="hidden" />
      <VisuallyHidden>
        <DialogTitle />
      </VisuallyHidden>
      <DialogContent
        className="focus:outline-non w-full max-w-[630px]"
        onKeyDown={handleKeyDown}
      >
        <SessionForm
          formData={formData}
          setFormData={setFormData}
          mode="create"
        />
        <Button
          variant="outline"
          disabled={!isFormValid}
          onClick={() => handleFormSubmit(formData)}
          className={`mt-6 flex h-fit w-fit flex-row items-center place-self-center rounded-xl border-2 px-3 py-3 text-sm hover:bg-transparent ${
            isFormValid
              ? "border-orange-600 text-orange-800 hover:text-orange-800"
              : "cursor-not-allowed border-gray-400 text-gray-500"
          }`}
        >
          <Check size={10} color={isFormValid ? "orange" : "gray"} />
          <span>Create Session</span>
        </Button>
      </DialogContent>
    </Dialog>
  );
};
