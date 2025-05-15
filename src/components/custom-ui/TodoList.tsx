"use client";

import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import LabeledSeparator from "./LabeledSeparator";
import { CustomInput } from "./CustomInput";
import { Button } from "../ui/button";
import { ScrollArea, ScrollBar, Viewport } from "./scroll-area";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  // Add a new task when pressing Enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      setTasks((prev) => [
        ...prev,
        { id: Date.now(), text: inputValue.trim(), completed: false },
      ]);
      setInputValue("");
    }
  };

  // Toggle task completion
  const toggleTaskCompletion = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  // Delete a task
  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="mb-10 space-y-2">
      {/* Section Title */}
      <LabeledSeparator text="Tasks" />

      {/* To-Do List */}
      <ScrollArea className="h-full">
        <Viewport className="max-h-40">
          <div className="flex w-full flex-col space-y-1">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex h-min items-center justify-between rounded-md px-3 py-0"
              >
                <div className="flex w-full min-w-0 justify-start space-x-3">
                  {/* Task Checkbox */}
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={() => toggleTaskCompletion(task.id)}
                    className="h-4 w-4 border-gray-800 text-gray-800/60 shadow-none data-[state=checked]:border-orange-800 data-[state=checked]:bg-transparent data-[state=checked]:text-orange-800"
                  />
                  {/* Task Text (Proper Wrapping) */}
                  <span
                    className={`block w-full min-w-0 break-all text-sm font-medium ${
                      task.completed
                        ? "text-orange-700 line-through"
                        : "text-gray-900/70"
                    }`}
                  >
                    {task.text}
                  </span>
                </div>
                {/* Delete Task Button */}
                <Button
                  variant="ghost"
                  onClick={() => deleteTask(task.id)}
                  className="border-none text-gray-400 shadow-none hover:bg-transparent hover:text-red-500"
                >
                  &#10005;
                </Button>
              </div>
            ))}
          </div>
        </Viewport>
        <ScrollBar />
      </ScrollArea>
      {/* Input Area */}
      <div className="flex h-fit flex-row items-center space-x-2 px-3 py-0">
        <Checkbox
          className="h-4 w-4 border-gray-700 shadow-none"
          disabled={true}
        />
        <CustomInput
          className="h-fit w-full rounded-md font-medium text-gray-900 text-opacity-80 placeholder:text-gray-700"
          placeholder="Add a task ..."
          value={inputValue}
          autoFocus={false}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};
