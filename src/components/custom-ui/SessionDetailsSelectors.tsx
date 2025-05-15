import React from "react";
import { Selector } from "./Selector";
import selectorOptions from "@/data/selectorOptions.json";

interface SessionDetailsSelectorsProps {
  type: string;
  subject: string;
  priority: string;
  onTypeChange: (value: string) => void;
  onSubjectChange: (value: string) => void;
  onPriorityChange: (value: string) => void;
}

export const SessionDetailsSelectors: React.FC<
  SessionDetailsSelectorsProps
> = ({
  type,
  subject,
  priority,
  onTypeChange,
  onSubjectChange,
  onPriorityChange,
}) => {
  return (
    <div className="flex flex-row space-x-1">
      <Selector
        label="Type"
        items={selectorOptions.types}
        value={type}
        onChange={onTypeChange}
      />
      {type !== "Busy" && (
        <Selector
          label="Subject"
          items={selectorOptions.subjects}
          value={subject}
          onChange={onSubjectChange}
        />
      )}
      {type !== "Busy" && (
        <Selector
          label="Priority"
          items={selectorOptions.priorities}
          value={priority}
          onChange={onPriorityChange}
        />
      )}
    </div>
  );
};
