
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

interface SelectorProps {
  label: string;
  items: string[];
  value: string;
  onChange: (value: string) => void;
}

export const Selector: React.FC<SelectorProps> = ({
  label,
  items,
  value,
  onChange,
}) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger
        className={`mx-1 my-2 h-fit w-min rounded-2xl px-3 py-1 text-xs text-opacity-80 shadow-none focus:outline-none focus:ring-transparent ${
          value
            ? "bg-orange-150 text-orange-800"
            : "bg-gray-150 text-gray-900 text-opacity-70"
        } hover:bg-orange-150 hover:text-orange-800`}
      >
        <span className="truncate">{value || label}</span>
      </SelectTrigger>
      <SelectContent className="rounded-xl text-gray-900 text-opacity-80">
        {items.map((item) => (
          <SelectItem
            key={item}
            value={item}
            className="focus:bg-gray-200 focus:text-gray-900"
          >
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
