/* eslint-disable @typescript-eslint/no-explicit-any */

import { cn } from "@/lib/utils";
import { Markdown } from "./Markdown";
import type { ToolInvocation } from "ai";
import { motion } from "motion/react";
import { File } from "lucide-react";

interface MessageProps {
  content: string;
  role: "user" | "assistant";
  toolCalls: ToolInvocation[] | undefined | any;
}

export default function MessageContainer({
  content,
  role,
  toolCalls,
}: MessageProps) {
  return (
    <div
      className={cn(
        "flex w-fit max-w-[85%] flex-col gap-2",
        role === "user" && "ml-auto max-w-[75%]",
      )}
    >
      {toolCalls &&
        toolCalls[0] &&
        toolCalls[0].toolName === "getReleventResources" &&
        toolCalls[0]?.result !== undefined && (
          <div className={cn("flex gap-4")}>
            {Array.from(
              new Map(
                toolCalls[0]?.result.map((item: any) => [
                  `${item.resourceTitle}-${item.pageNumber}`,
                  item,
                ]),
              ).values(),
            ).map((item: any, index) => (
              <motion.span
                key={`${item.resourceTitle}-${item.pageNumber}`}
                className="flex w-fit items-center gap-2 rounded-lg bg-gray-300 px-2 py-1 text-sm font-semibold"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  duration: 0.3,
                  delay: index * 0.1,
                }}
              >
                <File size={16} strokeWidth={2.5} />
                {item?.resourceTitle} / {item?.pageNumber}
              </motion.span>
            ))}
          </div>
        )}

      {content.length > 0 && (
        <div className="flex flex-col gap-2">
          <div
            className={cn(
              "w-fit rounded-lg bg-gray-200 px-2 py-1",
              role === "assistant" ? "bg-transparent" : "ml-auto",
            )}
          >
            <Markdown>{content}</Markdown>
          </div>
        </div>
      )}
    </div>
  );
}
