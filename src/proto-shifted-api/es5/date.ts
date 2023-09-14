import { /*@__PURE__*/ protoShift } from "../../tool";
import { /*@__PURE__*/ dateProto } from "../protos";

/** Returns a date as a string value. */
export const dateToDateString: {
  (date: Date): string;
} = /*@__PURE__*/ protoShift(dateProto.toDateString) as any;

/** Returns a time as a string value. */
export const dateToTimeString: {
  (date: Date): string;
} = /*@__PURE__*/ protoShift(dateProto.toTimeString) as any;

/** Returns a value as a string value appropriate to the host environment's current locale. */
export const dateToLocaleString: {
  (date: Date): string;
} = /*@__PURE__*/ protoShift(dateProto.toLocaleString) as any;

/** Returns a date as a string value appropriate to the host environment's current locale. */
export const dateToLocaleDateString: {
  (date: Date): string;
} = /*@__PURE__*/ protoShift(dateProto.toLocaleDateString) as any;

/** Returns a time as a string value appropriate to the host environment's current locale. */
export const dateToLocaleTimeString: {
  (date: Date): string;
} = /*@__PURE__*/ protoShift(dateProto.toLocaleTimeString) as any;

/** Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC. */
export const dateGetTime: {
  (date: Date): number;
} = /*@__PURE__*/ protoShift(dateProto.getTime) as any;

/** Gets the year, using local time. */
export const dateGetFullYear: {
  (date: Date): number;
} = /*@__PURE__*/ protoShift(dateProto.getFullYear) as any;

/** Gets the year using Universal Coordinated Time (UTC). */
export const dateGetUTCFullYear: {
  (date: Date): number;
} = /*@__PURE__*/ protoShift(dateProto.getUTCFullYear) as any;

/** Gets the month, using local time. */
export const dateGetMonth: {
  (date: Date): number;
} = /*@__PURE__*/ protoShift(dateProto.getMonth) as any;

/** Gets the month of a Date object using Universal Coordinated Time (UTC). */
export const dateGetUTCMonth: {
  (date: Date): number;
} = /*@__PURE__*/ protoShift(dateProto.getUTCMonth) as any;

/** Gets the day-of-the-month, using local time. */
export const dateGetDate: {
  (date: Date): number;
} = /*@__PURE__*/ protoShift(dateProto.getDate) as any;

/** Gets the day-of-the-month, using Universal Coordinated Time (UTC). */
export const dateGetUTCDate: {
  (date: Date): number;
} = /*@__PURE__*/ protoShift(dateProto.getUTCDate) as any;

/** Gets the day of the week, using local time. */
export const dateGetDay: {
  (date: Date): number;
} = /*@__PURE__*/ protoShift(dateProto.getDay) as any;

/** Gets the day of the week using Universal Coordinated Time (UTC). */
export const dateGetUTCDay: {
  (date: Date): number;
} = /*@__PURE__*/ protoShift(dateProto.getUTCDay) as any;

/** Gets the hours in a date, using local time. */
export const dateGetHours: {
  (date: Date): number;
} = /*@__PURE__*/ protoShift(dateProto.getHours) as any;

/** Gets the hours value in a Date object using Universal Coordinated Time (UTC). */
export const dateGetUTCHours: {
  (date: Date): number;
} = /*@__PURE__*/ protoShift(dateProto.getUTCHours) as any;

/** Gets the minutes of a Date object, using local time. */
export const dateGetMinutes: {
  (date: Date): number;
} = /*@__PURE__*/ protoShift(dateProto.getMinutes) as any;

/** Gets the minutes of a Date object using Universal Coordinated Time (UTC). */
export const dateGetUTCMinutes: {
  (date: Date): number;
} = /*@__PURE__*/ protoShift(dateProto.getUTCMinutes) as any;

/** Gets the seconds of a Date object, using local time. */
export const dateGetSeconds: {
  (date: Date): number;
} = /*@__PURE__*/ protoShift(dateProto.getSeconds) as any;

/** Gets the seconds of a Date object using Universal Coordinated Time (UTC). */
export const dateGetUTCSeconds: {
  (date: Date): number;
} = /*@__PURE__*/ protoShift(dateProto.getUTCSeconds) as any;

/** Gets the milliseconds of a Date, using local time. */
export const dateGetMilliseconds: {
  (date: Date): number;
} = /*@__PURE__*/ protoShift(dateProto.getMilliseconds) as any;

/** Gets the milliseconds of a Date object using Universal Coordinated Time (UTC). */
export const dateGetUTCMilliseconds: {
  (date: Date): number;
} = /*@__PURE__*/ protoShift(dateProto.getUTCMilliseconds) as any;

/** Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC). */
export const dateGetTimezoneOffset: {
  (date: Date): number;
} = /*@__PURE__*/ protoShift(dateProto.getTimezoneOffset) as any;

/**
 * Sets the date and time value in the Date object.
 * @param time A numeric value representing the number of elapsed milliseconds since midnight, January 1, 1970 GMT.
 */
export const dateSetTime: {
  (date: Date, time: number): number;
} = /*@__PURE__*/ protoShift(dateProto.setTime) as any;

/**
 * Sets the milliseconds value in the Date object using local time.
 * @param ms A numeric value equal to the millisecond value.
 */
export const dateSetMilliseconds: {
  (date: Date, ms: number): number;
} = /*@__PURE__*/ protoShift(dateProto.setMilliseconds) as any;

/**
 * Sets the milliseconds value in the Date object using Universal Coordinated Time (UTC).
 * @param ms A numeric value equal to the millisecond value.
 */
export const dateSetUTCMilliseconds: {
  (date: Date, ms: number): number;
} = /*@__PURE__*/ protoShift(dateProto.setUTCMilliseconds) as any;

/**
 * Sets the seconds value in the Date object using local time.
 * @param sec A numeric value equal to the seconds value.
 * @param ms A numeric value equal to the milliseconds value.
 */
export const dateSetSeconds: {
  (date: Date, sec: number, ms?: number): number;
} = /*@__PURE__*/ protoShift(dateProto.setSeconds) as any;

/**
 * Sets the seconds value in the Date object using Universal Coordinated Time (UTC).
 * @param sec A numeric value equal to the seconds value.
 * @param ms A numeric value equal to the milliseconds value.
 */
export const dateSetUTCSeconds: {
  (date: Date, sec: number, ms?: number): number;
} = /*@__PURE__*/ protoShift(dateProto.setUTCSeconds) as any;

/**
 * Sets the minutes value in the Date object using local time.
 * @param min A numeric value equal to the minutes value.
 * @param sec A numeric value equal to the seconds value.
 * @param ms A numeric value equal to the milliseconds value.
 */
export const dateSetMinutes: {
  (date: Date, min: number, sec?: number, ms?: number): number;
} = /*@__PURE__*/ protoShift(dateProto.setMinutes) as any;

/**
 * Sets the minutes value in the Date object using Universal Coordinated Time (UTC).
 * @param min A numeric value equal to the minutes value.
 * @param sec A numeric value equal to the seconds value.
 * @param ms A numeric value equal to the milliseconds value.
 */
export const dateSetUTCMinutes: {
  (date: Date, min: number, sec?: number, ms?: number): number;
} = /*@__PURE__*/ protoShift(dateProto.setUTCMinutes) as any;

/**
 * Sets the hour value in the Date object using local time.
 * @param hours A numeric value equal to the hours value.
 * @param min A numeric value equal to the minutes value.
 * @param sec A numeric value equal to the seconds value.
 * @param ms A numeric value equal to the milliseconds value.
 */
export const dateSetHours: {
  (date: Date, hours: number, min?: number, sec?: number, ms?: number): number;
} = /*@__PURE__*/ protoShift(dateProto.setHours) as any;

/**
 * Sets the hours value in the Date object using Universal Coordinated Time (UTC).
 * @param hours A numeric value equal to the hours value.
 * @param min A numeric value equal to the minutes value.
 * @param sec A numeric value equal to the seconds value.
 * @param ms A numeric value equal to the milliseconds value.
 */
export const dateSetUTCHours: {
  (date: Date, hours: number, min?: number, sec?: number, ms?: number): number;
} = /*@__PURE__*/ protoShift(dateProto.setUTCHours) as any;

/**
 * Sets the numeric day-of-the-month value of the Date object using local time.
 * @param dateNumber A numeric value equal to the day of the month.
 */
export const dateSetDate: {
  (date: Date, dateNumber: number): number;
} = /*@__PURE__*/ protoShift(dateProto.setDate) as any;

/**
 * Sets the numeric day of the month in the Date object using Universal Coordinated Time (UTC).
 * @param dateNumber A numeric value equal to the day of the month.
 */
export const dateSetUTCDate: {
  (date: Date, dateNumber: number): number;
} = /*@__PURE__*/ protoShift(dateProto.setUTCDate) as any;

/**
 * Sets the month value in the Date object using local time.
 * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
 * @param dateNumber A numeric value representing the day of the month. If this value is not supplied, the value from a call to the getDate method is used.
 */
export const dateSetMonth: {
  (date: Date, month: number, dateNumber?: number): number;
} = /*@__PURE__*/ protoShift(dateProto.setMonth) as any;

/**
 * Sets the month value in the Date object using Universal Coordinated Time (UTC).
 * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
 * @param dateNumber A numeric value representing the day of the month. If it is not supplied, the value from a call to the getUTCDate method is used.
 */
export const dateSetUTCMonth: {
  (date: Date, month: number, dateNumber?: number): number;
} = /*@__PURE__*/ protoShift(dateProto.setUTCMonth) as any;

/**
 * Sets the year of the Date object using local time.
 * @param year A numeric value for the year.
 * @param month A zero-based numeric value for the month (0 for January, 11 for December). Must be specified if numDate is specified.
 * @param dateNumber A numeric value equal for the day of the month.
 */
export const dateSetFullYear: {
  (date: Date, year: number, month?: number, dateNumber?: number): number;
} = /*@__PURE__*/ protoShift(dateProto.setFullYear) as any;

/**
 * Sets the year value in the Date object using Universal Coordinated Time (UTC).
 * @param year A numeric value equal to the year.
 * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. Must be supplied if numDate is supplied.
 * @param dateNumber A numeric value equal to the day of the month.
 */
export const dateSetUTCFullYear: {
  (date: Date, year: number, month?: number, dateNumber?: number): number;
} = /*@__PURE__*/ protoShift(dateProto.setUTCFullYear) as any;

/** Returns a date converted to a string using Universal Coordinated Time (UTC). */
export const dateToUTCString: {
  (date: Date): string;
} = /*@__PURE__*/ protoShift(dateProto.toUTCString) as any;

/** Returns a date as a string value in ISO format. */
export const dateToISOString: {
  (date: Date): string;
} = /*@__PURE__*/ protoShift(dateProto.toISOString) as any;
