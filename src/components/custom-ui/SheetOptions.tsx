import { Check, X } from "@phosphor-icons/react/dist/ssr";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { AlarmClock } from "lucide-react";
import { motion } from "framer-motion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

interface SheetOptionsProps {
  formData: any;
  onSave: (formData: any) => void;
  onDelete: () => void;
}

export const SheetOptions: React.FC<SheetOptionsProps> = ({
  formData,
  onSave,
  onDelete,
}) => {
  return (
    <motion.div
      className="flex w-min content-center items-center space-x-1 place-self-center rounded-full py-2 shadow-lg"
      animate={{
        borderColor: ["#fad1a7", "#fab775", "#fcb065"],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      style={{
        border: "1px solid",
        borderColor: "transparent",
      }}
    >
      <AlertDialog>
        <AlertDialogTrigger>
          <Button
            variant="ghost"
            className="flex items-center text-gray-900 hover:bg-transparent hover:text-gray-900"
          >
            <X size={16} color="gray" />
            <span>Delete</span>
          </Button>{" "}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-gray-900">
              Are you absolutely sure?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-sm font-medium text-gray-900/60">
              This action cannot be undone. This will permanently delete your
              session and remove the data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="rounded-xl text-gray-900/70 hover:text-gray-900/70">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="rounded-xl border-[1px] border-orange-800/70 bg-transparent text-orange-800/70 hover:bg-transparent"
              onClick={() => {
                onDelete();
              }}
            >
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Separator orientation="vertical" className="h-6" color="gray" />
      <Button
        variant="ghost"
        className="flex items-center text-orange-800 hover:bg-transparent hover:text-orange-900"
      >
        <AlarmClock size={16} color="orange" />
        <span>Reschedule</span>
      </Button>
      <Separator orientation="vertical" className="h-6" color="gray" />
      <Button
        variant="ghost"
        className="flex items-center text-gray-900 hover:bg-transparent hover:text-gray-900"
        onClick={() => onSave(formData)}
      >
        <Check size={16} color="gray" />
        <span>Save Changes</span>
      </Button>
    </motion.div>
  );
};
