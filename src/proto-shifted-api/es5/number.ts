import { /*@__PURE__*/ unbind } from "../../tool";

/**
 * Returns a string representation of an object.
 * @param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.
 */
export const numberToString: {
  (_this: Number, radix?: number): string;
} = /*@__PURE__*/ unbind(Number.prototype.toString) as any;

/**
 * Returns a string representing a number in fixed-point notation.
 * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
 */
export const numberToFixed: {
  (_this: Number, fractionDigits?: number): string;
} = /*@__PURE__*/ unbind(Number.prototype.toFixed) as any;

/**
 * Returns a string containing a number represented in exponential notation.
 * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
 */
export const numberToExponential: {
  (_this: Number, fractionDigits?: number): string;
} = /*@__PURE__*/ unbind(Number.prototype.toExponential) as any;

/**
 * Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
 * @param precision Number of significant digits. Must be in the range 1 - 21, inclusive.
 */
export const numberToPrecision: {
  (_this: Number, precision?: number): string;
} = /*@__PURE__*/ unbind(Number.prototype.toPrecision) as any;
