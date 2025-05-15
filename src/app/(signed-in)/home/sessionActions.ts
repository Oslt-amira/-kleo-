"use server";

import { createSession, deleteSession, updateSession } from "@/db/queries";
import { Session } from "@/db/schema";

export async function DeleteSession(sessionId: any): Promise<any | Error> {
  if (!sessionId) {
    return {
      error: "Session unavailable.",
      status: 400,
    };
  }

  try {
    const isDeleted = await deleteSession(sessionId);
    if (isDeleted) {
      return isDeleted;
    }
  } catch (error) {
    return { error: error, status: 500 };
  }
}
export async function UpdateSession(
  sessionData: Session,
): Promise<any | Error> {
  try {
    const session = await updateSession(sessionData);

    if (!session) {
      return {
        error: "Failed to update session or time range conflict",
        status: 400,
      };
    }

    return session;
  } catch (error) {
    console.error("Error updating session:", error);
    return { error: error };
  }
}

export async function CreateSession(sessionData: any): Promise<any | Error> {
  try {
    const { userId, title, timeRange, type, subject, priority, note } =
      sessionData;

    const session = await createSession(
      userId,
      title,
      timeRange,
      type,
      subject,
      priority,
      note,
    );

    if (!session) {
      return {
        error: "Failed to create session or time range conflict",
        status: 400,
      };
    }

    return session;
  } catch (error) {
    console.error("Error creating session:", error);
    return { error: error };
  }
}
