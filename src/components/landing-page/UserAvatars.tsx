"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserAvatars() {
  return (
    <div className="mt-8 flex items-center">
      <div className="mr-3 flex -space-x-4">
        <Avatar className="h-8 w-8 border-2 border-stone-400 dark:border-stone-800">
          <AvatarImage
            src="/users/user1.jpg?height=32&width=32"
            className="bg-cover object-cover shadow-md blur-[1px] brightness-95 filter"
          />
          <AvatarFallback>U1</AvatarFallback>
        </Avatar>
        <Avatar className="h-8 w-8 border-2 border-stone-400 dark:border-stone-800">
          <AvatarImage
            src="/users/user3.jpg?height=32&width=32"
            className="brightness-85 bg-cover object-cover shadow-md blur-[2px] filter"
          />
          <AvatarFallback>U2</AvatarFallback>
        </Avatar>
        <Avatar className="h-8 w-8 border-2 border-stone-400 dark:border-stone-800">
          <AvatarImage
            src="/users/user2.jpg?height=32&width=32"
            className="bg-cover object-cover shadow-md blur-[1px] brightness-95 filter"
          />
          <AvatarFallback>U3</AvatarFallback>
        </Avatar>
      </div>
      <span className="text-sm text-stone-500/80 dark:text-stone-400/60">
        ~ 50+ People already joined
      </span>
    </div>
  );
}
