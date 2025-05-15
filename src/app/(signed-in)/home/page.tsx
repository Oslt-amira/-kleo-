"use client";

import ToolBar from "@/components/ToolBar";
import { useUser } from "@clerk/clerk-react";
import { type Message, useChat } from "ai/react";
import { useEffect, useLayoutEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import ExpandedChatContainer from "@/components/ExpandedChatContainer";
import { convertToUIMessages, generateUUID, isUUID } from "@/lib/utils";
import Sidebar from "@/components/Sidebar";
import { useSWRConfig } from "swr";
import { useQueryState } from "nuqs";
import { useSearchParams } from "next/navigation";
import { refreshChat } from "./actions";
import { CalendarWrapper, CalendarWrapperWithProvider } from "@/components/calendar/CalendarWrapper";

export default function Home() {
  const { isSignedIn, isLoaded, user } = useUser();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isChatExpanded, setIsChatExpanded] = useState(false);
  const [toolCall, setToolCall] = useState<string>();
  const [initialMessages, setInitialMessages] = useState<Message[]>([]);
  const [isChatFetching, setIsChatFetching] = useState(false);
  const { mutate } = useSWRConfig();

  const [chatId, setChatId] = useQueryState("chatId");

  const searchParams = useSearchParams();
  const urlChatId = searchParams.get("chatId");

  const {
    messages,
    setMessages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    addToolResult,
    error,
    reload,
    stop,
    setInput,
  } = useChat({
    keepLastMessageOnError: true,
    maxSteps: 5, // allow up to 5 steps
    onToolCall({ toolCall }) {
      setToolCall(toolCall.toolName);
    },
    body: {
      chatId: urlChatId ?? generateUUID(),
      userId: user?.publicMetadata.id,
    },
    initialMessages,
  });

  function createNewChat() {
    setChatId(generateUUID());
    setMessages([]);
    setInitialMessages([]);
  }

  useLayoutEffect(() => {
    if (urlChatId) {
      if (!isUUID(urlChatId)) {
        setChatId(generateUUID());
        return;
      }

      setIsChatFetching(true);
      setInitialMessages([]);
      setMessages([]);
      refreshChat(urlChatId).then((data) => {
        if (data) {
          setInitialMessages(convertToUIMessages(data));
          setMessages(convertToUIMessages(data));
        }
        setIsChatFetching(false);
      });
    }
  }, [urlChatId, setMessages]);

  useEffect(() => {
    if (messages.length === 2) {
      mutate("/api/history");
    }
  }, [messages, mutate]);

  if (isSignedIn) {
    return (
      isLoaded && (
        <div className="relative flex h-screen w-screen items-center overflow-hidden">
          {/* <Sidebar
            chatId={chatId}
            setChatId={setChatId}
            createNewChat={createNewChat}
            isChatOpen={isChatOpen}
          /> */}
          <div className="relative flex h-full max-h-full w-full flex-1 overflow-hidden">
            <CalendarWrapperWithProvider />
            <AnimatePresence mode="popLayout">
              {isChatExpanded && (
                <ExpandedChatContainer
                  messages={messages}
                  isLoading={isLoading}
                  error={error}
                  reload={reload}
                  toolCall={toolCall}
                  isChatFetching={isChatFetching}
                />
              )}
            </AnimatePresence>

            <ToolBar
              messages={messages}
              input={input}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              isLoading={isLoading}
              addToolResult={addToolResult}
              error={error}
              reload={reload}
              isChatExpanded={isChatExpanded}
              setIsChatExpanded={setIsChatExpanded}
              stop={stop}
              setInput={setInput}
              isChatFetching={isChatFetching}
              isChatOpen={isChatOpen}
              setIsChatOpen={setIsChatOpen}
              toolCall={toolCall}
            />
          </div>
        </div>
      )
    );
  }

  return <div>Not signed in</div>;
}
