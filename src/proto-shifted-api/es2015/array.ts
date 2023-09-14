import { /*@__PURE__*/ protoShift } from "../../tool";
import type { Predicate } from "../../types";
import { /*@__PURE__*/ arrayProto } from "../protos";

/**
 * Returns the value of the first element in the array where predicate is true, and undefined
 * otherwise.
 * @param _this The source array.
 * @param predicate find calls predicate once for each element of the array, in ascending
 * order, until it finds one where predicate returns true. If such an element is found, find
 * immediately returns that element value. Otherwise, find returns undefined.
 * @param thisArg If provided, it will be used as the this value for each invocation of
 * predicate. If it is not provided, undefined is used instead.
 */
export const arrayFind: {
  <T, S extends T>(_this: T[], predicate: Predicate<T>): S | undefined;
  <T>(_this: T[], predicate: Predicate<T>): T | undefined;
} = /*@__PURE__*/ protoShift(arrayProto.find) as any;
/**
 * Returns the index of the first element in the array where predicate is true, and -1
 * otherwise.
 * @param _this The source array.
 * @param predicate find calls predicate once for each element of the array, in ascending
 * order, until it finds one where predicate returns true. If such an element is found,
 * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
 */
export const arrayFindIndex: {
  <T>(_this: T[], predicate: Predicate<T>): number;
} = /*@__PURE__*/ protoShift(arrayProto.findIndex) as any;
/**
 * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array.
 * @param _this The source array.
 * @param value value to fill array section with
 * @param start index to start filling the array at. If start is negative, it is treated as
 * length+start where length is the length of the array.
 * @param end index to stop filling the array at. If end is negative, it is treated as
 * length+end.
 */
export const arrayFill: {
  <T>(_this: T[], value: T, start?: number, end?: number): typeof _this;
} = /*@__PURE__*/ protoShift(arrayProto.fill) as any;
/**
 * Returns the this object after copying a section of the array identified by start and end
 * to the same array starting at position target
 * @param _this The source array.
 * @param target If target is negative, it is treated as length+target where length is the
 * length of the array.
 * @param start If start is negative, it is treated as length+start. If end is negative, it
 * is treated as length+end.
 * @param end If not specified, length of the this object is used as its default value.
 */
export const arrayCopyWithin: {
  <T>(_this: T[], target: number, start: number, end?: number): typeof _this;
} = /*@__PURE__*/ protoShift(arrayProto.copyWithin) as any;
