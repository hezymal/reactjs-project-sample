import { format as fmt, parseISO } from "date-fns";
import { DEFAULT_DATE_TIME_FORMAT } from "constants/dateTime";

export type DateTime = string | Date;

export const toDate = (dateTime: DateTime): Date =>
  typeof dateTime === "string" ? parseISO(dateTime) : dateTime;

export const format = (
  dateTime: DateTime,
  format: string = DEFAULT_DATE_TIME_FORMAT
) => fmt(toDate(dateTime), format);
