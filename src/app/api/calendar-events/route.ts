//import { getCalendarEventTimes } from "@/lib/googleCalendars";

//export async function GET(req: Request) {
// try {
//  const { searchParams } = new URL(req.url);
//const clerkUserId = searchParams.get("userId");
//const startDate = searchParams.get("start");
//const endDate = searchParams.get("end");

//if (!clerkUserId || !startDate || !endDate) {
// return Response.json({ error: "Missing params" }, { status: 400 });
//}

// const events = await getCalendarEventTimes(
//  clerkUserId,
//  new Date(startDate),
// new Date(endDate),
// );

//   return Response.json(events);
// } catch (error) {
//   console.error("Error fetching events:", error);
//   return Response.json({ error: "Failed to fetch events" }, { status: 500 });
// }
//}
