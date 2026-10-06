// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";

dayjs.extend(customParseFormat);
dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.extend(utc);

export { dayjs };
export type DayJsInput = string | number | Date | dayjs.Dayjs;

// These exports are required for the consuming repo to see the types from the plugins
export type { default as customParseFormat } from "dayjs/plugin/customParseFormat";
export type { default as duration } from "dayjs/plugin/duration";
export type { default as relativeTime } from "dayjs/plugin/relativeTime";
export type { default as utc } from "dayjs/plugin/utc";

export const dateWithTzToIso = (dateStr: string) => {
  const timezone = dateStr.split(" ")[4];

  if (!/^[+-](?:[01]\d|2[0-3])[0-5]\d$/.test(timezone ?? "")) return null;

  const dateWithoutTz = dateStr.replace(timezone, "").trim();
  const date = dayjs.utc(dateWithoutTz, "ddd MMM DD HH:mm:ss YYYY");

  if (date.isValid()) {
    const hours = parseInt(timezone.slice(1, 3));
    const minutes = parseInt(timezone.slice(3));
    const offsetMinutes = (timezone[0] === "-" ? 1 : -1) * (hours * 60 + minutes);

    return date.add(offsetMinutes, "minute").toISOString();
  } else {
    console.error("Invalid date:", dateStr, date);

    return null;
  }
};
