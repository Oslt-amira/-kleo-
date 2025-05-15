import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AutosizeTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  maxHeight?: number;
}

export const AutosizeTextarea = React.forwardRef<
  HTMLTextAreaElement,
  AutosizeTextareaProps
>(({ className, maxHeight, value, ...props }, ref) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "auto";
    const scrollHeight = textarea.scrollHeight;
    textarea.style.height = `${
      maxHeight ? Math.min(scrollHeight, maxHeight) : scrollHeight
    }px`;
  };

  useEffect(() => {
    adjustHeight();
  }, [value]); // Adjust height when value changes

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const handleInput = () => adjustHeight();
    textarea.addEventListener("input", handleInput);

    // Initial adjustment
    adjustHeight();

    return () => textarea.removeEventListener("input", handleInput);
  }, [maxHeight]);

  return (
    <textarea
      ref={(node) => {
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
        textareaRef.current = node;
      }}
      value={value}
      className={cn(
        "custom-scrollbar resize-none overflow-y-auto",
        "disabled:cursor-default disabled:opacity-100",
        className,
      )}
      rows={1}
      {...props}
    />
  );
});

AutosizeTextarea.displayName = "AutosizeTextarea";
