import type { Chat } from "@/db/schema";
import { groupChatsByDate } from "@/lib/utils";
import { Button } from "./ui/button";
import ChatItem from "./ChatItem";
import { useSearchParams } from "next/navigation";
import type { Options } from "nuqs";
import { motion } from "motion/react";

interface ChatHistoryProps {
  history: Chat[];
  setChatId: (
    value: string | ((old: string | null) => string | null) | null,
    options?: Options | undefined,
  ) => Promise<URLSearchParams>;
  createNewChat: () => void;
}

export default function ChatHistory({
  history,
  setChatId,
  createNewChat,
}: ChatHistoryProps) {
  const groupedChats = groupChatsByDate(history);
  const searchParams = useSearchParams();
  const urlChatId = searchParams.get("chatId");

  return (
    <motion.div
      className="flex h-auto w-full flex-col gap-2 overflow-scroll p-4"
      key="chat-history"
      initial={{ opacity: 0, scale: 0.98 }}
      exit={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        duration: 0.3,
        delay: 0.2,
      }}
    >
      <Button variant="outline" onClick={createNewChat}>
        New Chat
      </Button>
      {groupedChats.today.length > 0 && (
        <>
          <div className="mt-4 px-4 text-[13px] font-semibold text-gray-900">
            Today
          </div>
          {groupedChats.today.map((chat) => (
            <ChatItem
              chat={chat}
              onClick={() => setChatId(chat.id)}
              key={chat.id}
              urlChatId={urlChatId}
              onCleanUpAfterDelete={createNewChat}
            />
          ))}
        </>
      )}
      {groupedChats.yesterday.length > 0 && (
        <>
          <div className="mt-4 px-4 text-[13px] font-semibold text-gray-1000">
            Yesterday
          </div>
          {groupedChats.yesterday.map((chat) => (
            <ChatItem
              chat={chat}
              onClick={() => setChatId(chat.id)}
              key={chat.id}
              urlChatId={urlChatId}
              onCleanUpAfterDelete={createNewChat}
            />
          ))}
        </>
      )}
      {groupedChats.lastWeek.length > 0 && (
        <>
          <div className="mt-4 px-4 text-[13px] font-semibold text-gray-1000">
            Last week
          </div>
          {groupedChats.lastWeek.map((chat) => (
            <ChatItem
              chat={chat}
              onClick={() => setChatId(chat.id)}
              key={chat.id}
              urlChatId={urlChatId}
              onCleanUpAfterDelete={createNewChat}
            />
          ))}
        </>
      )}
      {groupedChats.lastMonth.length > 0 && (
        <>
          <div className="mt-4 px-4 text-[13px] font-semibold text-gray-1000">
            Last month
          </div>
          {groupedChats.lastMonth.map((chat) => (
            <ChatItem
              chat={chat}
              onClick={() => setChatId(chat.id)}
              key={chat.id}
              urlChatId={urlChatId}
              onCleanUpAfterDelete={createNewChat}
            />
          ))}
        </>
      )}
      {groupedChats.older.length > 0 && (
        <>
          <div className="mt-4 px-4 text-[13px] font-semibold text-gray-1000">
            Older
          </div>
          {groupedChats.older.map((chat) => (
            <ChatItem
              chat={chat}
              onClick={() => setChatId(chat.id)}
              key={chat.id}
              urlChatId={urlChatId}
              onCleanUpAfterDelete={createNewChat}
            />
          ))}
        </>
      )}
    </motion.div>
  );
}
