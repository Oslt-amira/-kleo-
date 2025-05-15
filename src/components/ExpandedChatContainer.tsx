/* eslint-disable @typescript-eslint/no-empty-object-type */

import { motion } from "motion/react";
import MessageContainer from "./MessageContainer";
import { useScrollToBottom } from "./use-scroll-to-bottom";
import type { ChatProps } from "@/types/chat";
import ChatErrorMessage from "./ChatErrorMessage";
import { Loading } from "@/Loading";
import { useEffect, useMemo } from "react";
import type { Message } from "ai";
import { LoadingIcon } from "./icons";

interface ExpandedChatContainerProps
  extends Pick<ChatProps, "messages" | "isLoading" | "reload" | "error"> {
  toolCall: string | undefined;
  isChatFetching: boolean;
}

export default function ExpandedChatContainer({
  messages,
  isLoading,
  reload,
  error,
  toolCall,
  isChatFetching,
}: ExpandedChatContainerProps) {
  const [messageContainerRef, messagesEndRef] =
    useScrollToBottom<HTMLDivElement>();

  const currentToolCall = useMemo(() => {
    const tools = messages?.slice(-1)[0]?.toolInvocations;
    if (tools && toolCall === tools[0]?.toolName) {
      return tools[0]?.toolName;
    }
  }, [toolCall, messages]);

  useEffect(() => {
    console.log("toolCall", toolCall);
  }, [toolCall]);

  return (
    <motion.div
      className="relative flex h-full max-h-full w-full items-center justify-center overflow-hidden"
      key="expandedChat"
      initial={{ opacity: 0, scale: 0.99 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.99 }}
      transition={{ type: "spring", duration: 0.4, bounce: 0 }}
    >
      <div
        className="absolute bottom-0 flex h-full w-[60%] flex-col gap-6 overflow-scroll pb-48 pt-12"
        ref={messageContainerRef}
      >
        {messages.map((message: Message) => (
          <MessageContainer
            content={message.content}
            role={message.role === "user" ? "user" : "assistant"}
            key={message.id}
            toolCalls={message?.toolInvocations}
          />
        ))}
        {error && <ChatErrorMessage reload={reload} />}
        {isLoading && (
          <div className="flex h-10 w-full items-center">
            <Loading tool={currentToolCall} />
          </div>
        )}
        {isChatFetching && (
          <div className="flex h-full w-full items-center justify-center">
            <div className="animate-spin text-neutral-500 dark:text-neutral-400">
              <LoadingIcon />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
    </motion.div>
  );
}
