import { /*@__PURE__*/ protoShift } from "../../tool";
import { Predicate } from "../../types";
import { /*@__PURE__*/ arrayProto } from "../protos";

/**
 * Returns the value of the last element in the array where predicate is true, and undefined
 * otherwise.
 * @param _this the source array.
 * @param predicate findLast calls predicate once for each element of the array, in descending
 * order, until it finds one where predicate returns true. If such an element is found, findLast
 * immediately returns that element value. Otherwise, findLast returns undefined.
 */
export const arrayFindLast: {
  <T>(_this: T[], predicate: Predicate<T>): T | undefined;
} = /*@__PURE__*/ protoShift(arrayProto.findLast) as any;
