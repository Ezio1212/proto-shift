import { /*@__PURE__*/ unbind } from "../../tool";
import type { Mapper } from "../../types";
/**
 * Returns a new array with all sub-array elements concatenated into it recursively up to the
 * specified depth.
 * @param _this The source array.
 * @param depth The maximum recursion depth
 */
export const arrayFlat: {
  <T, D extends number = 1>(_this: T[], depth?: D): FlatArray<T[], D>[];
} = /*@__PURE__*/ unbind(Array.prototype.flat) as any;
/**
 * Calls a defined callback function on each element of an array. Then, flattens the result into
 * a new array.
 * This is identical to a map followed by flat with depth 1.
 * @param _this The source array.
 * @param callback A function that accepts up to three arguments. The flatMap method calls the
 * callback function one time for each element in the array.
 */
export const arrayFlatMap: {
  <T, U>(_this: T[], callback: Mapper<T, U | ReadonlyArray<U>>): U[];
} = /*@__PURE__*/ unbind(Array.prototype.flatMap) as any;
