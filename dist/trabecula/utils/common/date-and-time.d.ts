import dayjs from "dayjs";
export { dayjs };
export type DayJsInput = string | number | Date | dayjs.Dayjs;
export declare const dateWithTzToIso: (dateStr: string) => string;
