import useSWR, { mutate } from "swr";
import {
  CreateSession,
  DeleteSession,
  UpdateSession,
} from "@/app/(signed-in)/home/sessionActions";
import {
  endOfDay,
  endOfMonth,
  endOfWeek,
  startOfDay,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { Session } from "@/db/schema";

export interface HandleUpdateProps {
  formData: any;
  session: Session;
  toast?: any;
  view?: any;
  onOpenChange?: (isOpen: boolean) => void;
}

export interface HandleDeleteProps {
  session: Session;
  toast: any;
  view?: any;
}

export interface HandleCreateProps {
  formData: any;
  dialogData: {
    userId: string;
    timeRange: {
      start: string;
      end: string;
    };
  };
  toast: any;
  view?: any;
  onOpenChange: (isOpen: boolean) => void;
}
export interface HandleCreateBusyProps {
  sessionData: any;
  toast?: any | null;
  view?: any;
  onOpenChange?: (isOpen: boolean) => void;
}
export const getViewApiUrl = (
  userId: any,
  view: "day" | "week" | "month",
  date: Date,
): string => {
  const viewUrlMap: Record<typeof view, string> = {
    day: `/api/session?userId=${userId}&startDate=${startOfDay(date).toISOString()}&endDate=${endOfDay(date).toISOString()}`,
    week: `/api/session?userId=${userId}&startDate=${startOfWeek(date).toISOString()}&endDate=${endOfWeek(date).toISOString()}`,
    month: `/api/session?userId=${userId}&startDate=${startOfMonth(date).toISOString()}&endDate=${endOfMonth(date).toISOString()}`,
  };

  return viewUrlMap[view];
};

export const useSessionData = (ActionUrl: any) => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, mutate } = useSWR(ActionUrl, fetcher);
  return {
    data: data,
    isLoading: !error && !data,
    error: error,
    mutate,
  };
};

// Update session function
export const handleSessionUpdate = async ({
  formData,
  session,
  toast,
  view,
  onOpenChange,
}: HandleUpdateProps) => {
  const updatedSession: Session = {
    ...session,
    title: formData.title || "",
    timeRange: {
      start: formData.start,
      end: formData.end,
    },
    type: formData.type || "",
    subject: formData.subject || "",
    priority: formData.priority || "",
    note: formData.note || "",
    userId: session?.userId || "",
    id: session?.id || "",
    createdAt: new Date(session.createdAt),
  };
  const url = getViewApiUrl(session?.userId, view, session.timeRange?.start);
  try {
    await mutate(
      url,
      async (currentData: any) => {
        if (!currentData) {
          throw new Error("No data available to update.");
        }
        const response = await UpdateSession(updatedSession);
        if (response?.error) {
          toast &&
            toast({
              title: "Uh oh! Something went wrong.",
              description: response.error,
            });
        } else {
          toast &&
            toast({
              title: "Success!",
              description: "Session updated successfully.",
            });
          onOpenChange && onOpenChange(false);
        }

        const updatedData = response.result;
        return currentData.map((item: any) =>
          item.id === session.id ? updatedData : item,
        );
      },
      {
        optimisticData: (currentData: any) => {
          if (!currentData) return [];
          return currentData.map((item: any) =>
            item.id === session.id ? { ...item, ...updatedSession } : item,
          );
        },
        rollbackOnError: true,
        revalidate: true,
        populateCache: (currentData) => {
          if (!currentData) return [];
          return currentData.map((item: any) =>
            !item || item.id === session.id
              ? { ...item, ...updatedSession }
              : item,
          );
        },
      },
    );
  } catch (error) {
    console.error("Error updating session:", error);
  }
};

// Delete session function
export const handleSessionDelete = async ({
  session,
  toast,
  view,
}: HandleDeleteProps) => {
  const url = getViewApiUrl(session?.userId, view, session.timeRange?.start);

  try {
    await mutate(
      url,
      async (currentData: any) => {
        if (!currentData) {
          throw new Error("No data available to delete.");
        }

        const response = await DeleteSession(session.id);

        response?.error
          ? toast({
              title: "Uh oh! Something went wrong.",
              description: response.error,
            })
          : toast({
              title: "Success!",
              description: "Session deleted successfully.",
            });

        return currentData.filter((item: any) => item.id !== session.id);
      },
      {
        optimisticData: (currentData) => {
          if (!currentData) return [];
          return currentData.filter((item: any) => item.id !== session.id);
        },
        rollbackOnError: true,
        revalidate: false,
        populateCache: (currentData) => {
          if (!currentData) return [];
          return currentData.map((item: any) =>
            item.id === session.id ? session : item,
          );
        },
      },
    );
  } catch (error) {
    console.error("Error deleting session:", error);
    toast({
      title: "Error",
      description: "There was an issue deleting the session.",
    });
  }
};

// Create session function
export const handleSessionCreate = async ({
  formData,
  dialogData,
  toast,
  view,
  onOpenChange,
}: HandleCreateProps) => {
  const session: Partial<Session> = {
    title: formData.title || "",
    timeRange: {
      start: formData.start || new Date(),
      end: formData.end || new Date(),
    },
    type: formData.type || "",
    subject: formData.subject || "",
    priority: formData.priority || "",
    note: formData.note || "",
    userId: dialogData?.userId || "",
  };

  const url = getViewApiUrl(session?.userId, view, formData.start);

  try {
    await mutate(
      url,
      async (currentData: any) => {
        const response = await CreateSession(session);

        response?.error
          ? toast({
              title: "Uh oh! Something went wrong.",
              description: response.error,
            })
          : (onOpenChange(false),
            toast({
              title: "Success!",
              description: "Session created successfully.",
            }));

        return [...(currentData || []), response.session];
      },
      {
        optimisticData: (currentData: any) => [
          ...(currentData || []),
          { ...session, id: "temp-id" },
        ],
        rollbackOnError: true,
        revalidate: true,
        populateCache: (currentData) => {
          return [...(currentData || []), { ...session, id: "temp-id" }];
        },
      },
    );
  } catch (error) {
    console.error("Error creating session:", error);
  }
};

export const handleBusySessionCreate = async ({
  sessionData,
  toast,
  view,
  onOpenChange,
}: HandleCreateBusyProps) => {
  const session: Partial<Session> = {
    timeRange: {
      start: sessionData.timeRange.start || new Date(),
      end: sessionData.timeRange.end || new Date(),
    },
    type: sessionData.type || "",
    userId: sessionData?.userId || "",
  };
  const url = getViewApiUrl(
    sessionData?.userId,
    view,
    sessionData.timeRange?.start,
  );

  try {
    await mutate(
      url,
      async (currentData: any) => {
        const response = await CreateSession(session);

        response?.error
          ? toast({
              title: "Uh oh! Something went wrong.",
              description: response.error,
            })
          : (onOpenChange && onOpenChange(false),
            toast({
              title: "Success!",
              description: "Session created successfully.",
            }));

        return [...(currentData || []), response.session];
      },
      {
        optimisticData: (currentData) => [
          ...(currentData || []),
          { ...session, id: "temp-id" },
        ],
        rollbackOnError: true,
        revalidate: true,
        populateCache: (currentData) => {
          return [...(currentData || []), { ...session, id: "temp-id" }];
        },
      },
    );
  } catch (error) {
    console.error("Error creating session:", error);
  }
};
