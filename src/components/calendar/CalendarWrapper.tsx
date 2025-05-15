"use client";
import React from "react";
import { MonthView } from "./views/MonthView";
import { DayView } from "./views/DayView";
import { WeekView } from "./views/WeekView";
import { CalendarHeader } from "./CalendarHeader";
import { TimeCommand } from "./elements/TimeCommand";
import { useView, ViewProvider } from "@/components/calendar/views/ViewContext";

export const CalendarWrapper: React.FC = () => {
  const { view } = useView();

  const renderView = () => {
    const viewComponents = {
      week: <WeekView />,
      month: <MonthView />,
      day: <DayView />,
    };

    return viewComponents[view] || <WeekView />;
  };

  return (
    <div className="mx-4 mt-auto h-fit w-full p-4">
      <TimeCommand />
      <CalendarHeader />
      {renderView()}
    </div>
  );
};

export const CalendarWrapperWithProvider = () => (
  <ViewProvider>
    <CalendarWrapper />
  </ViewProvider>
);
