import { /*@__PURE__*/ protoShift } from "../../tool";
import { Mapper, Predicate, Reducer, Traverser } from "../../types";
import { /*@__PURE__*/ arrayProto } from "../protos";

/**
 * Combines two or more arrays.
 * This method returns a new array without modifying any existing arrays.
 * @param _this The first source array.
 * @param items Additional arrays and/or items to add to the end of the array.
 */
export const arrayConcat: {
  <T>(_this: T[], ...items: ConcatArray<T>[]): T[];
} = /*@__PURE__*/ protoShift(arrayProto.concat) as any;

/**
 * Determines whether all the members of an array satisfy the specified test.
 * @param _this The source array.
 * @param predicate A function that accepts up to three arguments. The every method calls
 * the predicate function for each element in the array until the predicate returns a value
 * which is coercible to the Boolean value false, or until the end of the array.
 */
export const arrayEvery: {
  // <T, S extends T>(_this: T[], predicate: Predicate<T, S>): _this is S[];
  <T>(_this: T[], predicate: Predicate<T>): boolean;
} = /*@__PURE__*/ protoShift(arrayProto.every) as any;

/**
 * Returns the elements of an array that meet the condition specified in a callback function.
 * @param _this The source array.
 * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
 */
export const arrayFilter: {
  // <T, S extends T>(_this: T[], predicate: Predicate<T, S>): S[];
  <T>(_this: T[], predicate: Predicate<T>): T[];
} = /*@__PURE__*/ protoShift(arrayProto.filter) as any;

/**
 * Performs the specified action for each element in an array.
 * @param _this The source array.
 * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
 */
export const arrayForEach: {
  <T>(_this: T[], traverser: Traverser<T>): void;
} = /*@__PURE__*/ protoShift(arrayProto.forEach) as any;

/**
 * Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
 * @param _this The source array.
 * @param searchElement The value to locate in the array.
 * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
 */
export const arrayIndexOf: {
  <T>(_this: T[], searchElement: T, fromIndex?: number): number;
} = /*@__PURE__*/ protoShift(arrayProto.indexOf) as any;

/**
 * Adds all the elements of an array into a string, separated by the specified separator string.
 * @param _this The source array.
 * @param separator A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
 */
export const arrayJoin: {
  <T>(_this: T[], separator?: string): string;
} = /*@__PURE__*/ protoShift(arrayProto.join) as any;

/**
 * Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.
 * @param _this The source array.
 * @param searchElement The value to locate in the array.
 * @param fromIndex The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.
 */
export const arrayLastIndexOf: {
  <T>(_this: T[], searchElement: T, fromIndex?: number): number;
} = /*@__PURE__*/ protoShift(arrayProto.lastIndexOf) as any;

/**
 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
 * @param _this The source array.
 * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
 * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 */
export const arrayMap: {
  <T, U>(_this: T[], mapper: Mapper<T, U>): U[];
} = /*@__PURE__*/ protoShift(arrayProto.map) as any;

/**
 * Removes the last element from an array and returns it.
 * If the array is empty, undefined is returned and the array is not modified.
 * @param _this The source array.
 */
export const arrayPop: {
  <T>(_this: T[]): T | undefined;
} = /*@__PURE__*/ protoShift(arrayProto.pop) as any;

/**
 * Appends new elements to the end of an array, and returns the new length of the array.
 * @param _this The source array.
 * @param items New elements to add to the array.
 */
export const arrayPush: {
  <T>(_this: T[], ...items: T[]): number;
} = /*@__PURE__*/ protoShift(arrayProto.push) as any;
/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 * @param _this The source array.
 * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
 * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
 */
export const arrayReduce: {
  <T>(_this: T[], reducer: Reducer<T, T>): T;
  <T>(_this: T[], reducer: Reducer<T, T>, initialValue: T): T;
  <T, U>(_this: T[], reducer: Reducer<T, U>, initialValue: U): U;
} = /*@__PURE__*/ protoShift(arrayProto.reduce) as any;
/**
 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 * @param _this The source array.
 * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
 * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
 */
export const arrayReduceRight: {
  <T>(_this: T[], reducer: Reducer<T, T>): T;
  <T>(_this: T[], reducer: Reducer<T, T>, initialValue: T): T;
  <T, U>(_this: T[], reducer: Reducer<T, U>, initialValue: U): U;
} = /*@__PURE__*/ protoShift(arrayProto.reduceRight) as any;

/**
 * Reverses the elements in an array in place.
 * This method mutates the array and returns a reference to the same array.
 * @param _this The source array.
 */
export const arrayReverse: {
  <T>(_this: T[]): T[];
} = /*@__PURE__*/ protoShift(arrayProto.reverse) as any;

/**
 * Removes the first element from an array and returns it.
 * If the array is empty, undefined is returned and the array is not modified.
 * @param _this The source array.
 */
export const arrayShift: {
  <T>(_this: T[]): T | undefined;
} = /*@__PURE__*/ protoShift(arrayProto.shift) as any;

/**
 * Returns a copy of a section of an array.
 * For both start and end, a negative index can be used to indicate an offset from the end of the array.
 * For example, -2 refers to the second to last element of the array.
 * @param _this The source array.
 * @param start The beginning index of the specified portion of the array.
 * If start is undefined, then the slice begins at index 0.
 * @param end The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.
 * If end is undefined, then the slice extends to the end of the array.
 */
export const arraySlice: {
  <T>(_this: T[], start?: number, end?: number): T[];
} = /*@__PURE__*/ protoShift(arrayProto.slice) as any;

/**
 * Determines whether the specified callback function returns true for any element of an array.
 * @param _this The source array.
 * @param predicate A function that accepts up to three arguments. The some method calls
 * the predicate function for each element in the array until the predicate returns a value
 * which is coercible to the Boolean value true, or until the end of the array.
 */
export const arraySome: {
  <T>(_this: T[], predicate: Predicate<T>): boolean;
} = /*@__PURE__*/ protoShift(arrayProto.some) as any;

/**
 * Sorts an array in place.
 * This method mutates the array and returns a reference to the same array.
 * @param _this The source array.
 * @param compareFn Function used to determine the order of the elements. It is expected to return
 * a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
 * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
 * ```ts
 * [11,2,22,1].sort((a, b) => a - b)
 * ```
 */
export const arraySort: {
  <T>(_this: T[], compareFn?: (a: T, b: T) => number): T[];
} = /*@__PURE__*/ protoShift(arrayProto.sort) as any;

/**
 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
 * @param _this The source array.
 * @param start The zero-based location in the array from which to start removing elements.
 * @param deleteCount The number of elements to remove.
 * @returns An array containing the elements that were deleted.
 */
export const arraySplice: {
  <T>(_this: T[], start: number, deleteCount?: number): T[];
  <T>(_this: T[], start: number, deleteCount: number, ...items: T[]): T[];
} = /*@__PURE__*/ protoShift(arrayProto.splice) as any;

/**
 * Inserts new elements at the start of an array, and returns the new length of the array.
 * @param _this The source array.
 * @param items Elements to insert at the start of the array.
 */
export const arrayUnshift: {
  <T>(_this: T[], ...items: T[]): number;
} = /*@__PURE__*/ protoShift(arrayProto.unshift) as any;
