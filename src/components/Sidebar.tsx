import type { Chat } from "@/db/schema";
import type { Options } from "nuqs";
import useSWR from "swr";
import { useUser } from "@clerk/nextjs";
import { fetcher } from "@/lib/utils";

import ChatHistory from "./ChatHistory";
import { AnimatePresence } from "motion/react";

interface SidebarProps {
  chatId: string | null;
  setChatId: (
    value: string | ((old: string | null) => string | null) | null,
    options?: Options | undefined,
  ) => Promise<URLSearchParams>;
  createNewChat: () => void;
  isChatOpen: boolean;
}

export default function Sidebar({
  setChatId,
  createNewChat,
  isChatOpen,
}: SidebarProps) {
  const { user } = useUser();

  const { data: history, isLoading: isHistoryLoading } = useSWR<Chat[]>(
    user ? "/api/history" : null,
    fetcher,
    {
      fallbackData: [],
    },
  );

  // async function handleSignOut() {
  //   try {
  //     await signOut({
  //       redirectUrl: "/",
  //     });
  //   } catch (e) {
  //     console.log("error : ", e);
  //   }
  // }

  return (
    <div className="flex h-full w-[300px] bg-gray-100">
      {isHistoryLoading && <span>Loading...</span>}
      {!isHistoryLoading && history && history.length === 0 && (
        <span>No history</span>
      )}
      {history && (
        <AnimatePresence mode="popLayout">
          {isChatOpen && (
            <ChatHistory
              history={history}
              setChatId={setChatId}
              createNewChat={createNewChat}
            />
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
