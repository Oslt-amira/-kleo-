/* eslint-disable @typescript-eslint/no-empty-object-type */

import { Button } from "./ui/button";
import { ArrowUp, CirclePause } from "lucide-react";
import { AutosizeTextarea } from '@/components/ui/autosize-textarea';
import { ChatProps } from "@/types/chat";

interface ChatInputProps extends Pick<ChatProps, "input" | "handleInputChange" | "handleSubmit" | "isLoading" | "stop" | "setInput"> {}

export default function ChatInput({
  input,
  handleInputChange,
  handleSubmit,
  isLoading,
  stop,
  setInput
}: ChatInputProps) {

  function handleStop(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    stop()
  }


  return (
    <form className="flex gap-2 items-center mt-auto" onSubmit={isLoading ? handleStop : handleSubmit}>
      <AutosizeTextarea
        name="message"
        value={input}
        onChange={handleInputChange}
        maxHeight={150}
        placeholder="Ask me anything..."
        className="w-full rounded-lg bg-gray-200 font-medium px-3 py-2 text-sm transition-all outline-none placeholder:text-gray-900 focus-visible:outline-none resize-none"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (e.metaKey || e.ctrlKey) {
              setInput((prev: string) => prev + " \n");
              return;
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
        disabled={!input && !isLoading}
        size={"icon"}
        className="rounded-full w-9 h-8 bg-orange-800 hover:bg-orange-1000"
      >
        {isLoading ? <CirclePause size={48} className="stroke-white" strokeWidth={3} /> : <ArrowUp size={48} className="stroke-white" strokeWidth={3} />}
      </Button>
    </form>
  );
}
