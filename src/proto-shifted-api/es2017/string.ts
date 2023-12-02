import { /*@__PURE__*/ protoShift } from "../../tool";
import { /*@__PURE__*/ stringProto } from "../protos";
/**
 * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
 * The padding is applied from the end (right) of the current string.
 *
 * @param maxLength The length of the resulting string once the current string has been padded.
 *        If this parameter is smaller than the current string's length, the current string will be returned as it is.
 *
 * @param fillString The string to pad the current string with.
 *        If this string is too long, it will be truncated and the left-most part will be applied.
 *        The default value for this parameter is " " (U+0020).
 */
export const stringPadEnd: {
    (_this: string, maxLength: number, fillString?: string): string;
} = /*@__PURE__*/ protoShift(stringProto.padEnd) as any;

/**
 * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
 * The padding is applied from the start (left) of the current string.
 *
 * @param maxLength The length of the resulting string once the current string has been padded.
 *        If this parameter is smaller than the current string's length, the current string will be returned as it is.
 *
 * @param fillString The string to pad the current string with.
 *        If this string is too long, it will be truncated and the left-most part will be applied.
 *        The default value for this parameter is " " (U+0020).
 */
export const stringPadStart: {
    (_this: string, maxLength: number, fillString?: string): string;
} = /*@__PURE__*/ protoShift(stringProto.padStart) as any;
