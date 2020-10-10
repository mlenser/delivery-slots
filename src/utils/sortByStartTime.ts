export const sortByStartTime = (
  a: { startTime: string },
  b: { startTime: string },
): number => a.startTime.localeCompare(b.startTime);
