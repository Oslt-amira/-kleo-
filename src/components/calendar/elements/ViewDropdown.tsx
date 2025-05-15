  import { Button } from "@/components/ui/button";
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import { StackSimple } from "@phosphor-icons/react";
  import React, { useEffect } from "react";
  import { useView } from "@/components/calendar/views/ViewContext";


  export const ViewDropdown: React.FC= () => {
    const {  setView } = useView();


    const handleSelectView = (view: "month" | "week" | "day") => {
      setView(view);
    };

    const handleKeyPress = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.shiftKey) {
        if (event.key === "1") {
          setView("month");
        } else if (event.key === "2") {
          setView("week");
        } else if (event.key === "3") {
          setView("day");
        }
      }
    };

    useEffect(() => {
      window.addEventListener("keydown", handleKeyPress);
      return () => {
        window.removeEventListener("keydown", handleKeyPress);
      };
    }, []);

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="w-10 rounded-lg bg-[#FCFCFC] px-1 hover:bg-[#FCFCFC]"
          >
            <StackSimple size="20" color="#8D8D8D" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-min content-center">
          <DropdownMenuGroup>
            <DropdownMenuItem
              className="flex flex-row justify-between hover:cursor-pointer"
              onClick={() => handleSelectView("month")}
            >
              <span className="text-s font-medium text-gray-800">Month</span>
              <span className="text-xs font-medium text-gray-600">⌘ ⇧ 1</span>
            </DropdownMenuItem>

            <DropdownMenuItem
              className="flex flex-row justify-between hover:cursor-pointer"
              onClick={() => handleSelectView("week")}
            >
              <span className="text-s font-medium text-gray-800">Week</span>
              <span className="text-xs font-medium text-gray-600">⌘ ⇧ 2</span>
            </DropdownMenuItem>

            <DropdownMenuItem
              className="flex flex-row justify-between hover:cursor-pointer"
              onClick={() => handleSelectView("day")}
            >
              <span className="text-s font-medium text-gray-800">Day</span>
              <span className="text-xs font-medium text-gray-600">⌘ ⇧ 3</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };
