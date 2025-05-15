import React from "react";
import { setHours, setMinutes } from "date-fns";
import { CustomInput } from "./CustomInput";
import LabeledSeparator from "./LabeledSeparator";
import { AutosizeTextarea } from "../ui/autosize-textarea";
import { TodoList } from "./TodoList";
import { DateTimeRangePicker } from "./DateTimeRangePicker";
import { SessionDetailsSelectors } from "./SessionDetailsSelectors";
import { Check, ClockCountdown, Sparkle, X } from "@phosphor-icons/react";

interface SessionFormProps {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  mode: "create" | "edit";
}

export const SessionForm: React.FC<SessionFormProps> = ({
  formData,
  setFormData,
  mode,
}) => {
  const handleDateChange = (date: Date) => {
    setFormData((prev: any) => ({
      ...prev,
      start: date,
      end: setHours(
        setMinutes(date, prev.end?.getMinutes() || 0),
        prev.end?.getHours() || 0,
      ),
    }));
  };
  const handleTimeChange = (
    type: "start" | "end",
    hour: number,
    minute: number,
  ) => {
    setFormData((prev: any) => ({
      ...prev,
      [type]:
        type === "start"
          ? setHours(setMinutes(prev.start || new Date(), minute), hour)
          : setHours(setMinutes(prev.end || new Date(), minute), hour),
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string,
  ) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-start">
        {mode === "edit" && (
          <div className="-my-1 mx-1 h-8 w-8 items-center justify-center rounded-full border-[1px] border-gray-900/20 p-1 shadow-md">
            {formData.status === "Complete" && (
              <Check color="#97BA56" size={22} />
            )}
            {formData.status === "In Progress" && (
              <ClockCountdown color="#659EF2" size={22} />
            )}
            {formData.status === "Incomplete" && (
              <X color="#922828" size={22} />
            )}
          </div>
        )}

        <div>
          <div
            className={`${
              mode === "edit" ? "flex w-[90%] flex-row items-center" : ""
            }`}
          >
            <CustomInput
              placeholder="Session Title"
              className="h-min flex-shrink-0 rounded-md bg-transparent px-1 text-xl placeholder:font-semibold placeholder:text-gray-900 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              style={{
                width: `calc(${formData.title?.length || 1}ch )`,
                maxWidth: mode === "edit" ? "30vh" : "50vh",
                minWidth: "10ch",
              }}
              value={formData.title || ""}
              onChange={(e) => handleInputChange(e, "title")}
            />
            {mode === "edit" && formData.ai_generated && (
              <div className="flex-shrink-0">
                <Sparkle size={18} color="#EE7B56" />
              </div>
            )}
          </div>

          <DateTimeRangePicker
            start={formData.start || new Date()}
            end={formData.end || new Date()}
            onDateChange={handleDateChange}
            onTimeChange={handleTimeChange}
          />
          <SessionDetailsSelectors
            type={formData.type || ""}
            subject={formData.subject || ""}
            priority={formData.priority || ""}
            onTypeChange={(value) =>
              setFormData((prev: any) => ({
                ...prev,
                type: value,
                ...(value === "Busy" && {
                  subject: null,
                  priority: null,
                  note: null,
                }),
              }))
            }
            onSubjectChange={(value) =>
              setFormData((prev: any) => ({ ...prev, subject: value }))
            }
            onPriorityChange={(value) =>
              setFormData((prev: any) => ({ ...prev, priority: value }))
            }
          />
        </div>
      </div>

      <div className="h-full px-1">
        {formData.type !== "Busy" && (
          <div>
            <LabeledSeparator text="Note" />
            <AutosizeTextarea
              placeholder="Add note .."
              className="h-auto max-h-72 min-h-12 w-full px-3 py-1 font-medium text-gray-900 placeholder:text-sm placeholder:font-medium placeholder:text-gray-700 focus-visible:outline-none"
              value={formData.note || ""}
              onChange={(e) => handleInputChange(e, "note")}
            />
          </div>
        )}
        {formData.type !== "Busy" && formData.type !== "Exam" && <TodoList />}
      </div>
    </div>
  );
};
