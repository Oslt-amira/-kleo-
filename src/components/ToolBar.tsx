import type { Dispatch, SetStateAction } from "react";
import ToolBarChat from "./ToolBarChat";
import ToolBarMenu from "./ToolBarMenu";
import ToolBarInput from "./ToolBarInput";
import type { ChatProps } from "@/types/chat";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import useMeasure from "react-use-measure";

interface ToolBarProps extends ChatProps {
  isChatExpanded: boolean;
  setIsChatExpanded: Dispatch<SetStateAction<boolean>>;
  isChatFetching: boolean;
  isChatOpen: boolean;
  setIsChatOpen: Dispatch<SetStateAction<boolean>>;
  toolCall: string | undefined;
}

export default function ToolBar({
  messages,
  input,
  handleInputChange,
  handleSubmit,
  isLoading,
  addToolResult,
  error,
  reload,
  isChatExpanded,
  setIsChatExpanded,
  setInput,
  isChatFetching,
  isChatOpen,
  setIsChatOpen,
  toolCall,
}: ToolBarProps) {
  const [elementRef, bounds] = useMeasure();

  return (
    <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
      <AnimatePresence mode="popLayout">
        {isChatOpen && !isChatExpanded && (
          <ToolBarChat
            key="chat"
            setIsChatOpen={setIsChatOpen}
            setIsChatExpanded={setIsChatExpanded}
            messages={messages}
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            addToolResult={addToolResult}
            error={error}
            reload={reload}
            stop={stop}
            setInput={setInput}
            isChatFetching={isChatFetching}
            toolCall={toolCall}
          />
        )}

        <motion.div
          animate={{ width: bounds.width }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}
          className={cn(
            "h-fit w-fit rounded-[18px] border border-gray-300 bg-white shadow-[0_0_10px_rgba(0,0,0,0.10)]",
            isChatExpanded && "border-[3px] border-orange-300 shadow-none",
          )}
          style={
            isChatExpanded
              ? {
                  outline: "1px solid rgba(255, 101, 51, 0.2)",
                  boxShadow: "0px 0px 6px rgba(255, 101, 51, 0.5)",
                }
              : {}
          }
        >
          <motion.div
            ref={elementRef}
            className="w-fit p-2 py-2 pr-3"
            key="bar"
          >
            {isChatExpanded ? (
              <ToolBarInput
                key="input"
                setIsChatExpanded={setIsChatExpanded}
                input={input}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                stop={stop}
                isLoading={isLoading}
                setInput={setInput}
              />
            ) : (
              <ToolBarMenu
                key={"menu"}
                isChatOpen={isChatOpen}
                setIsChatOpen={setIsChatOpen}
              />
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
