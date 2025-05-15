import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";
import { ArrowUp, CirclePause, Undo2 } from "lucide-react";
import { ChatProps } from "@/types/chat";
import { motion } from "motion/react";
import { AutosizeTextarea } from "./ui/autosize-textarea";

interface ToolBarInputProps
  extends Pick<ChatProps, "input" | "handleInputChange" | "handleSubmit" | "stop" | "isLoading" | "setInput"> {
  setIsChatExpanded: Dispatch<SetStateAction<boolean>>;
}

const variants = {
  initial: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 15 },
};

export default function ToolBarInput({
  setIsChatExpanded,
  input,
  handleInputChange,
  handleSubmit,
  stop,
  isLoading,
  setInput
}: ToolBarInputProps) {

  function handleStop(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    stop()
  }

  return (
    <motion.div
      className="flex gap-2 items-end"
      initial="initial"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ type: "spring", duration: 0.3, bounce: 0, delay: 0.1 }}
    >
      <Button
        size={"icon"}
        variant={"outline"}
        className="rounded-xl w-9 h-9 border-0 shadow-none bg-gray-200 hover:bg-gray-300"
        onClick={() => setIsChatExpanded(false)}
      >
        <Undo2 strokeWidth={3} className="stroke-gray-900" />
      </Button>
      <div className="h-7 w-[2px] bg-gray-500"></div>
      <form className="flex gap-2 items-end w-fit" onSubmit={isLoading ? handleStop : handleSubmit} >
        <AutosizeTextarea
          value={input}
          onChange={handleInputChange}
          name="message"
          maxHeight={150}
          placeholder="Ask me anything..."
          className="w-[400px] rounded-lg h-fit bg-gray-200 font-medium px-3 py-2 text-sm transition-all outline-none placeholder:text-gray-900 focus-visible:outline-none resize-none"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              if (e.metaKey || e.ctrlKey) {
                setInput((prev: string) => prev + " \n");
                return; // Allow default behavior for Cmd+Enter (newline)
              }
              e.preventDefault();
              if (isLoading) {

                stop();
              } else if (input.trim()) {
                handleSubmit(e);
              }
            }
          }}
        />
        <Button
          type="submit"
          size={"icon"}
          className="rounded-xl w-9 h-9 bg-orange-800 hover:bg-orange-1000 shadow-none" disabled={!input && !isLoading}
        >
          {isLoading ? <CirclePause size={48} className="stroke-white" strokeWidth={3} /> : <ArrowUp size={48} className="stroke-white" strokeWidth={3} />}
        </Button>
      </form>
    </motion.div>
  );
}
