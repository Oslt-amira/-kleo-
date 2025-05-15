import type { Chat } from "@/db/schema";
import { Button } from "./ui/button";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis, Trash2 } from "lucide-react";
import { type MouseEvent, useState } from "react";
import { LoadingIcon } from "./icons";
import { deleteChat } from "@/app/(signed-in)/home/actions";
import { useSWRConfig } from "swr";

interface ChatItemProps {
  chat: Chat;
  onClick: () => void;
  urlChatId: string | null;
  onCleanUpAfterDelete: () => void;
}

export default function ChatItem({
  chat,
  onClick,
  urlChatId,
  onCleanUpAfterDelete,
}: ChatItemProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const { mutate } = useSWRConfig();

  async function handleDelete(e: MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDeleteLoading(true);
    await deleteChat(chat.id);
    setIsDeleteLoading(false);
    setIsDropdownOpen(false);
    mutate("/api/history");
    if (urlChatId === chat.id) {
      onCleanUpAfterDelete();
    }
    return;
  }

  return (
    <Button
      className={cn(
        "group flex h-auto w-full flex-col items-start gap-1 rounded-xl border-none p-2 px-4 shadow-none transition hover:bg-gray-300",
        chat.id === urlChatId ? "bg-gray-300" : "bg-transparent",
        isDropdownOpen && "bg-gray-300",
      )}
      onClick={onClick}
      variant="outline"
    >
      <div className="flex w-full justify-between">
        <span className="text-sm font-semibold text-gray-1200">
          {chat.title}
        </span>
        <DropdownMenu onOpenChange={setIsDropdownOpen} open={isDropdownOpen}>
          <DropdownMenuTrigger>
            <Button
              variant="outline"
              size="icon"
              className={cn(
                "z-10 hidden h-5 w-7 rounded-xl border-none bg-gray-300 p-0 shadow-none transition hover:bg-gray-100 group-hover:flex",
                isDropdownOpen && "flex bg-gray-100",
              )}
            >
              <Ellipsis className="h-5 w-5 stroke-gray-1200" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="right"
            sideOffset={24}
            className="rounded-xl border-gray-300 bg-gray-100 shadow-none"
          >
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            {/* <DropdownMenuSeparator className="bg-gray-400" /> */}
            <DropdownMenuItem
              className="cursor-pointer rounded-lg font-medium text-red-500 hover:!bg-red-400/10 hover:!text-red-500"
              onClick={handleDelete}
            >
              {isDeleteLoading ? (
                <div className="animate-spin">
                  <LoadingIcon />
                </div>
              ) : (
                <Trash2 className="h-4 w-4 stroke-red-500" />
              )}
              {isDeleteLoading ? "Deleting..." : "Delete"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex w-full justify-between">
        <span className="text-xs font-semibold text-gray-800">
          {format(chat.createdAt, "MMM dd")}
        </span>
        <span className="text-xs font-semibold text-gray-800">
          {format(chat.createdAt, "kk:mm")}
        </span>
      </div>
    </Button>
  );
}
