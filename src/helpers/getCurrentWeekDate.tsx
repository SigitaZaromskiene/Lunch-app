export function getCurrentWeekDate(): string {
  const today = new Date();
  const firstDayOfWeek = today.getDate() - today.getDay() + 1;
  const lastDayOfWeek = firstDayOfWeek + 4;

  const startOfWeek = new Date(today.setDate(firstDayOfWeek));
  const endOfWeek = new Date(today.setDate(lastDayOfWeek));

  const monthOptions: Intl.DateTimeFormatOptions = { month: 'short' };
  const dayOptions: Intl.DateTimeFormatOptions = { day: 'numeric' };

  const startMonth = startOfWeek.toLocaleDateString(undefined, monthOptions);
  const startDay = startOfWeek.toLocaleDateString(undefined, dayOptions);
  const endDay = endOfWeek.toLocaleDateString(undefined, dayOptions);

  return `${startMonth} ${startDay}-${endDay}`;
}
