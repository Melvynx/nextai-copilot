export function calculateDateDifference(startDate: Date, endDate: Date) {
  const diffInMilliseconds = Math.abs(endDate.getTime() - startDate.getTime());
  const seconds = Math.floor(diffInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  return {
    days: days,
    hours: hours % 24,
    minutes: minutes % 60,
    seconds: seconds % 60,
  };
}
