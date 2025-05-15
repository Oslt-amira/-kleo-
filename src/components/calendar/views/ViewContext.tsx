import React, { createContext, useContext, ReactNode, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { getViewApiUrl, useSessionData } from "@/lib/sessionUtils";

const ViewContext = createContext<{
  view: "day" | "week" | "month";
  setView: React.Dispatch<React.SetStateAction<"day" | "week" | "month">>;
  userId: any;
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
  data: any;
  isLoading: boolean;
  error: any;
} | undefined>(undefined);

export const ViewProvider = ({ children }: { children: ReactNode }) => {
  const [view, setView] = useState<"month" | "week" | "day">("week");
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const { user } = useUser();
  const userId = user?.publicMetadata.id;

  const apiUrl = userId ? getViewApiUrl(userId, view, currentDate) : null;
  const { data, isLoading, error } = useSessionData(apiUrl);

  return (
    <ViewContext.Provider value={{ view, setView, userId, currentDate, setCurrentDate, data, isLoading, error }}>
      {children}
    </ViewContext.Provider>
  );
};

export const useView = () => {
  const context = useContext(ViewContext);
  if (!context) {
    throw new Error("useView must be used within a ViewProvider");
  }
  return context;
};
