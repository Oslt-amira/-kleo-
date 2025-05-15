import { Brain, X, Maximize2 } from "lucide-react";
import ChatInput from "./ChatInput";
import { Button } from "./ui/button";
import MessageContainer from "./MessageContainer";
import { useScrollToBottom } from "./use-scroll-to-bottom";
import { useMemo, type Dispatch, type SetStateAction } from "react";
import type { ChatProps } from "@/types/chat";
import { motion } from "motion/react";
import ChatErrorMessage from "./ChatErrorMessage";
import type { Message } from "ai";
import { LoadingIcon } from "./icons";
import { Loading } from "@/Loading";

interface ToolBarChatInterface extends ChatProps {
  setIsChatOpen: Dispatch<SetStateAction<boolean>>;
  setIsChatExpanded: Dispatch<SetStateAction<boolean>>;
  isChatFetching: boolean;
  toolCall: string | undefined;
}

const variants = {
  initial: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 15 },
};

export default function ToolBarChat({
  setIsChatOpen,
  setIsChatExpanded,
  input,
  handleInputChange,
  handleSubmit,
  isLoading,
  error,
  reload,
  messages,
  stop,
  setInput,
  isChatFetching,
  toolCall,
}: ToolBarChatInterface) {
  const [messagesContainerRef, messagesEndRef] =
    useScrollToBottom<HTMLDivElement>();

  const currentToolCall = useMemo(() => {
    const tools = messages?.slice(-1)[0]?.toolInvocations;
    if (tools && toolCall === tools[0]?.toolName) {
      return tools[0]?.toolName;
    }
  }, [toolCall, messages]);

  return (
    <motion.div
      className="box-border flex max-h-[500px] w-[450px] flex-col gap-4 rounded-2xl border-[5px] border-orange-300 bg-white p-4"
      style={{
        boxSizing: "border-box",
        outline: "1px solid rgba(255, 101, 51, 0.5)",
        boxShadow: "0px 0px 6px rgba(255, 101, 51, 0.5)",
      }}
      initial="initial"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ type: "spring", duration: 0.3, bounce: 0 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain size={20} className="stroke-gray-1100" fill="#F9F9F9" />
          <span className="text-sm font-semibold text-gray-1100">
            Chat with Kleo
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            size={"icon"}
            variant={"outline"}
            className="h-8 w-8 rounded-full border-0 bg-gray-200 shadow-none hover:bg-gray-300"
            onClick={() => setIsChatExpanded(true)}
          >
            <Maximize2 strokeWidth={3} className="stroke-gray-900" />
          </Button>
          <Button
            size={"icon"}
            variant={"outline"}
            className="h-8 w-8 rounded-full border-0 bg-gray-200 shadow-none hover:bg-gray-300"
            onClick={() => setIsChatOpen(false)}
          >
            <X strokeWidth={3} className="stroke-gray-900" />
          </Button>
        </div>
      </div>

      <div
        className="mt-4 flex min-h-56 flex-col gap-4 overflow-scroll pb-10"
        ref={messagesContainerRef}
      >
        {messages.map((message: Message) => (
          <MessageContainer
            content={message.content}
            role={message.role === "user" ? "user" : "assistant"}
            key={message.id}
            toolCalls={message?.toolInvocations}
          />
        ))}
        {isLoading && (
          <div className="flex h-10 w-full items-center">
            <Loading tool={currentToolCall} />
          </div>
        )}
        {isChatFetching && (
          <div className="flex flex-1 items-center justify-center">
            <div className="animate-spin text-neutral-500 dark:text-neutral-400">
              <LoadingIcon />
            </div>
          </div>
        )}

        {error && <ChatErrorMessage reload={reload} />}
        <div ref={messagesEndRef} />
      </div>

      <ChatInput
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        stop={stop}
        setInput={setInput}
      />
    </motion.div>
  );
}
