"server-only";

import { db } from "@/db";
import {
  chat,
  type Message,
  message,
  type Session,
  session,
  user,
} from "./schema";
import { and, asc, desc, eq, gte, lte, ne, or, sql } from "drizzle-orm";

export async function createUser(email: string, clerkId?: string | null) {
  try {
    return await db.insert(user).values({ email, clerkId }).returning();
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function getUserByClerkId(clerkId: string) {
  try {
    return await db
      .select()
      .from(user)
      .where(eq(user.clerkId, clerkId))
      .limit(1);
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function getChatById(id: string) {
  try {
    const [selectedChat] = await db.select().from(chat).where(eq(chat.id, id));
    return selectedChat;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function saveChat(userId: string, title: string, chatId: string) {
  try {
    return await db
      .insert(chat)
      .values({ userId, title, createdAt: new Date(), id: chatId })
      .returning();
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function saveMessages({ messages }: { messages: Message[] }) {
  try {
    return await db.insert(message).values(messages);
  } catch (error) {
    console.error("Failed to save messages in database", error);
    throw error;
  }
}

export async function getChatsByUserId({ id }: { id: string }) {
  try {
    return await db
      .select({
        createdAt: chat.createdAt,
        title: chat.title,
        id: chat.id,
      })
      .from(chat)
      .innerJoin(user, eq(chat.userId, user.id))
      .where(eq(user.clerkId, id))
      .orderBy(desc(chat.createdAt));
  } catch (error) {
    console.error("Failed to get chats by user from database");
    throw error;
  }
}

export async function getMessagesByChatId({ id }: { id: string }) {
  try {
    return await db
      .select()
      .from(message)
      .where(eq(message.chatId, id))
      .orderBy(asc(message.createdAt));
  } catch (error) {
    console.error("Failed to get messages by chat id from database", error);
    throw error;
  }
}

export async function deleteChatById({ id }: { id: string }) {
  try {
    await db.delete(message).where(eq(message.chatId, id));
    return await db.delete(chat).where(eq(chat.id, id));
  } catch (error) {
    console.error("Failed to delete chat by id from database");
    throw error;
  }
}

export async function createSession(
  userId: string,
  title: string | null,
  timeRange: { start: Date; end: Date },
  type: string,
  subject: string | null,
  priority: string | null = null,
  note: string | null = null,
) {
  try {
    const startIso = timeRange.start.toISOString();
    const endIso = timeRange.end.toISOString();

    // Check for overlapping sessions
    const overlappingSessions = await db
      .select()
      .from(session)
      .where(
        and(
          eq(session.userId, userId),
          or(
            and(
              //A session starts within the new session
              gte(sql`${session.timeRange} ->> 'start'`, startIso),
              lte(sql`${session.timeRange} ->> 'start'`, endIso),
            ),
            and(
              //A session ends within the new sessionA session fully encompasses the new session
              gte(sql`${session.timeRange} ->> 'end'`, startIso),
              lte(sql`${session.timeRange} ->> 'end'`, endIso),
            ),
            and(
              //A session fully encompasses the new session
              lte(sql`${session.timeRange} ->> 'start'`, startIso),
              gte(sql`${session.timeRange} ->> 'end'`, endIso),
            ),
          ),
        ),
      );

    if (overlappingSessions.length > 0) {
      return {
        success: false,
        error: "A session already exists with an overlapping time range",
      };
    }

    return await db
      .insert(session)
      .values({
        userId,
        title,
        timeRange,
        type,
        subject,
        createdAt: new Date(),
        priority,
        note,
      })
      .returning();
  } catch (error) {
    console.log("Failed to create session", error);
    throw error;
  }
}

export async function updateSession(sessionData: Session) {
  try {
    const startIso = new Date(sessionData.timeRange.start).toISOString();
    const endIso = new Date(sessionData.timeRange.end).toISOString();

    // Fetch the session to be updated
    const existingSessions = await db
      .select()
      .from(session)
      .where(eq(session.id, sessionData.id))
      .limit(1);

    if (existingSessions.length === 0) {
      return {
        success: false,
        error: "Session not found.",
      };
    }

    const existingSession = existingSessions[0];

    // Check for overlapping sessions
    const overlappingSessions = await db
      .select()
      .from(session)
      .where(
        and(
          eq(session.userId, existingSession.userId),
          ne(session.id, sessionData.id), // Exclude the session being updated
          or(
            and(
              // A session starts within the updated session
              gte(sql`${session.timeRange} ->> 'start'`, startIso),
              lte(sql`${session.timeRange} ->> 'start'`, endIso),
            ),
            and(
              // A session ends within the updated session
              gte(sql`${session.timeRange} ->> 'end'`, startIso),
              lte(sql`${session.timeRange} ->> 'end'`, endIso),
            ),
            and(
              // A session fully encompasses the updated session
              lte(sql`${session.timeRange} ->> 'start'`, startIso),
              gte(sql`${session.timeRange} ->> 'end'`, endIso),
            ),
          ),
        ),
      );

    if (overlappingSessions.length > 0) {
      return {
        success: false,
        error: "A session already exists with an overlapping time range.",
      };
    }

    // Perform the update
    const result = await db
      .update(session)
      .set(sessionData)
      .where(eq(session.id, sessionData.id))
      .returning();

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    console.error("updateSession: Failed to update session", error);
    return {
      success: false,
      error: "Failed to update session. Please try again later.",
    };
  }
}

export async function deleteSession(sessionId: string) {
  try {
    await db.delete(session).where(eq(session.id, sessionId));
    return {
      success: true,
      data: "Session Deleted. This action is permanent",
    };
  } catch (error) {
    console.error("Failed to delete session : ", error);
    return {
      success: false,
      error: "Failed to delete session. Please try again later.",
    };
  }
}

export async function getSessionsByUserId(userId: string) {
  try {
    return await db.select().from(session).where(eq(session.userId, userId));
  } catch (error) {
    console.log("Failed to get sessions by user ID", error);
    return null;
  }
}

export async function getSessionById(sessionId: string) {
  try {
    const [sessionData] = await db
      .select()
      .from(session)
      .where(eq(session.id, sessionId));
    return sessionData;
  } catch (error) {
    console.log("Failed to get session by ID", error);
    return null;
  }
}

export async function getSessionsByLimits(
  userId: string,
  startDate: Date,
  endDate: Date,
) {
  try {
    const startIso = startDate.toISOString();
    const endIso = endDate.toISOString();

    return await db
      .select()
      .from(session)
      .where(
        and(
          eq(session.userId, userId),
          gte(sql`${session.timeRange} ->> 'start'`, startIso),
          lte(sql`${session.timeRange} ->> 'end'`, endIso),
        ),
      );
  } catch (error) {
    console.error("Failed to get sessions", error);
    return null;
  }
}

export async function getSessionsByType(type: string) {
  try {
    return await db.select().from(session).where(eq(session.type, type));
  } catch (error) {
    console.log("Failed to filter sessions by type", error);
    return null;
  }
}
