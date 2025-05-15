import {
  getSessionById,
  getSessionsByLimits,
  getSessionsByType,
  getSessionsByUserId,
} from "@/db/queries";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const userId = searchParams.get("userId");
  const sessionId = searchParams.get("sessionId");
  const type = searchParams.get("type");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  try {
    if (sessionId) {
      const session = await getSessionById(sessionId);
      if (!session) {
        return Response.json({ error: "Session not found" }, { status: 404 });
      }
      return Response.json(session);
    }

    if (userId && startDate && endDate) {
      const sessions = await getSessionsByLimits(
        userId,
        new Date(startDate),
        new Date(endDate),
      );
      return Response.json(sessions);
    }

    if (userId) {
      const sessions = await getSessionsByUserId(userId);
      return Response.json(sessions);
    }

    if (type) {
      const sessions = await getSessionsByType(type);
      return Response.json(sessions);
    }

    return Response.json(
      { error: "Invalid query parameters" },
      { status: 400 },
    );
  } catch (error) {
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
