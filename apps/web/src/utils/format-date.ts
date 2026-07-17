/**
 * Shared date formatting utilities (en-AU locale).
 *
 * Owns the app-wide `Intl.DateTimeFormat` instances so features don't each
 * define their own. `formatDateTime` renders a full timestamp
 * ("17 Jul 2026, 3:04 pm"); `formatDayMonth` renders a short axis-tick style
 * date ("17 Jul").
 */

const dateTimeFormat = new Intl.DateTimeFormat("en-AU", {
  dateStyle: "medium",
  timeStyle: "short",
});

const dayMonthFormat = new Intl.DateTimeFormat("en-AU", {
  day: "2-digit",
  month: "short",
});

export function formatDateTime(value: string | number | Date): string {
  return dateTimeFormat.format(new Date(value));
}

export function formatDayMonth(value: string | number | Date): string {
  return dayMonthFormat.format(new Date(value));
}
