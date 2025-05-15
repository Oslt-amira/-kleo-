import {
  startOfWeek,
  addDays,
  addHours,
  formatISO,
  addMinutes,
  startOfDay,
  endOfDay,
  eachDayOfInterval,
} from "date-fns";

// Function to generate placeholder sessions
export function generatePlaceholderSessions(currentDate: any) {
  const startOfCurrentWeek = startOfWeek(currentDate);
  const sessions: any[] = [];

  for (let i = 0; i < 7; i++) {
    const dayOffset = i;
    const sessionDate = addDays(startOfCurrentWeek, dayOffset);

    // Randomly decide how many sessions to create for the day (1, 2, or 3)
    const sessionCount = Math.floor(Math.random() * 3) + 1;

    // Array to store sessions for the current day (to check for overlaps)
    const daySessions: any[] = [];

    for (let j = 0; j < sessionCount; j++) {
      let startTime: any;
      let endTime: any;
      let isOverlapping = true;

      while (isOverlapping) {
        const randomStartHour = Math.floor(Math.random() * 20) + 1; // hour between 1 and 8 PM
        const randomStartMinute = [0, 15, 30, 45][
          Math.floor(Math.random() * 4)
        ]; // Random minute increment
        startTime = addHours(sessionDate, randomStartHour);
        const adjustedStartTime = addMinutes(startTime, randomStartMinute); // Adjust the time for random minutes

        const randomSessionDuration = Math.floor(Math.random() * 4) + 1; // Random session duration (1 to 4 hours)
        endTime = addHours(adjustedStartTime, randomSessionDuration); // End time after the random duration

        // Check for overlap with existing sessions for the day
        isOverlapping = daySessions.some((existingSession) => {
          const existingStart = new Date(existingSession.timeRange.start);
          const existingEnd = new Date(existingSession.timeRange.end);
          return (
            (adjustedStartTime >= existingStart &&
              adjustedStartTime < existingEnd) || // New session starts within an existing session
            (endTime > existingStart && endTime <= existingEnd) // New session ends within an existing session
          );
        });
      }

      daySessions.push({
        title: `Placeholder ${sessions.length + 1}`,
        timeRange: {
          start: formatISO(startTime),
          end: formatISO(endTime),
        },
        type: "Loading",
      });

      sessions.push(daySessions[daySessions.length - 1]);
    }
  }

  return sessions;
}

// Function to generate 3 placeholder sessions for the current day
export function generatePlaceholderSessionsForOneDay(currentDate: any) {
  const startOfCurrentDay = startOfDay(currentDate); // Start of the current day
  const endOfCurrentDay = endOfDay(currentDate); // End of the current day
  const sessions: any[] = [];

  // Generate exactly 3 sessions for the current day
  for (let i = 0; i < 3; i++) {
    let startTime: any;
    let endTime: any;
    let isOverlapping = true;
    while (isOverlapping) {
      // Randomly decide start time for the session (between 1 AM and 10 PM)
      const randomStartHour = Math.floor(Math.random() * 20) + 1; // hour between 1 AM and 8 PM
      const randomStartMinute = [0, 15, 30, 45][Math.floor(Math.random() * 4)]; // Random minute increment
      startTime = addHours(startOfCurrentDay, randomStartHour);
      var adjustedStartTime = addMinutes(startTime, randomStartMinute); // Adjust the time for random minutes

      const randomSessionDuration = Math.floor(Math.random() * 4) + 1; // Random session duration (1 to 4 hours)
      endTime = addHours(adjustedStartTime, randomSessionDuration); // End time after the random duration

      // Ensure the session does not go beyond the end of the current day
      if (endTime > endOfCurrentDay) {
        continue;
      }

      // Check for overlap with existing sessions
      isOverlapping = sessions.some((existingSession) => {
        const existingStart = new Date(existingSession.timeRange.start);
        const existingEnd = new Date(existingSession.timeRange.end);
        return (
          (adjustedStartTime >= existingStart &&
            adjustedStartTime < existingEnd) || // New session starts within an existing session
          (endTime > existingStart && endTime <= existingEnd) // New session ends within an existing session
        );
      });
    }

    // Add the session to the list of sessions
    sessions.push({
      title: `Placeholder ${i + 1}`,
      timeRange: {
        start: formatISO(adjustedStartTime),
        end: formatISO(endTime),
      },
      type: "Loading",
    });
  }

  return sessions;
}

export function generatePlaceholderSessionsForMonth(
  monthStart: any,
  monthEnd: any,
) {
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const sessions: any[] = [];

  daysInMonth.forEach((day) => {
    const daySessions = [];
    const sessionCount = Math.floor(Math.random() * 3) + 1; // 1 to 3 sessions per day

    for (let i = 0; i < sessionCount; i++) {
      let startTime;
      let endTime: any;
      let isOverlapping = true;

      while (isOverlapping) {
        const randomStartHour = Math.floor(Math.random() * 20) + 1; // Between 1 AM and 8 PM
        const randomStartMinute = [0, 15, 30, 45][
          Math.floor(Math.random() * 4)
        ]; // Random minute increment
        startTime = addHours(startOfDay(day), randomStartHour);
        const adjustedStartTime = addMinutes(startTime, randomStartMinute);

        const randomSessionDuration = Math.floor(Math.random() * 4) + 1; // 1 to 4 hours
        endTime = addHours(adjustedStartTime, randomSessionDuration);

        // Ensure session doesn't exceed the day
        if (endTime > endOfDay(day)) continue;

        // Check for overlap
        isOverlapping = daySessions.some((existingSession) => {
          const existingStart = new Date(existingSession.timeRange.start);
          const existingEnd = new Date(existingSession.timeRange.end);
          return (
            (adjustedStartTime >= existingStart &&
              adjustedStartTime < existingEnd) ||
            (endTime > existingStart && endTime <= existingEnd)
          );
        });
      }

      const newSession = {
        title: `Placeholder ${sessions.length + 1}`,
        timeRange: {
          start: formatISO(startTime),
          end: formatISO(endTime),
        },
        type: "Loading",
      };

      daySessions.push(newSession);
      sessions.push(newSession);
    }
  });

  return sessions;
}
