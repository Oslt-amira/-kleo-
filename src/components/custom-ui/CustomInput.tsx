import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const CustomInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex font-semibold placeholder:font-medium text-gray-900 text-opacity-80 w-full rounded-md bg-transparent px-1 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        autoFocus={true}
      
        ref={ref}
        {...props}
      />
    );
  }
);
CustomInput.displayName = "CustomInput";

export { CustomInput };
