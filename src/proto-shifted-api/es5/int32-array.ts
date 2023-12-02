import { /*@__PURE__*/ protoShift } from "../../tool";
import { Comparator, Mapper, Predicate, Reducer, Traverser } from "../../types";
import { /*@__PURE__*/ int32ArrayProto } from "../protos";

/**
 * Returns the this object after copying a section of the array identified by start and end
 * to the same array starting at position target
 * @param target If target is negative, it is treated as length+target where length is the
 * length of the array.
 * @param start If start is negative, it is treated as length+start. If end is negative, it
 * is treated as length+end.
 * @param end If not specified, length of the this object is used as its default value.
 */
export const int32ArrayCopyWithin: {
    (
        _this: Int32Array,
        target: number,
        start: number,
        end?: number
    ): typeof _this;
} = /*@__PURE__*/ protoShift(int32ArrayProto.copyWithin) as any;

/**
 * Determines whether all the members of an array satisfy the specified test.
 * @param predicate A function that accepts up to three arguments. The every method calls
 * the predicate function for each element in the array until the predicate returns a value
 * which is coercible to the Boolean value false, or until the end of the array.
 * @param thisArg An object to which the this keyword can refer in the predicate function.
 * If thisArg is omitted, undefined is used as the this value.
 */
export const int32ArrayEvery: {
    (_this: Int32Array, predicate: Predicate<number>, thisArg?: any): boolean;
} = /*@__PURE__*/ protoShift(int32ArrayProto.every) as any;

/**
 * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
 * @param value value to fill array section with
 * @param start index to start filling the array at. If start is negative, it is treated as
 * length+start where length is the length of the array.
 * @param end index to stop filling the array at. If end is negative, it is treated as
 * length+end.
 */
export const int32ArrayFill: {
    (
        _this: Int32Array,
        value: number,
        start?: number,
        end?: number
    ): typeof _this;
} = /*@__PURE__*/ protoShift(int32ArrayProto.fill) as any;

/**
 * Returns the elements of an array that meet the condition specified in a callback function.
 * @param predicate A function that accepts up to three arguments. The filter method calls
 * the predicate function one time for each element in the array.
 * @param thisArg An object to which the this keyword can refer in the predicate function.
 * If thisArg is omitted, undefined is used as the this value.
 */
export const int32ArrayFilter: {
    (
        _this: Int32Array,
        predicate: (value: number, index: number, array: Int32Array) => any,
        thisArg?: any
    ): Int32Array;
} = /*@__PURE__*/ protoShift(int32ArrayProto.filter) as any;

/**
 * Returns the value of the first element in the array where predicate is true, and undefined
 * otherwise.
 * @param predicate find calls predicate once for each element of the array, in ascending
 * order, until it finds one where predicate returns true. If such an element is found, find
 * immediately returns that element value. Otherwise, find returns undefined.
 * @param thisArg If provided, it will be used as the this value for each invocation of
 * predicate. If it is not provided, undefined is used instead.
 */
export const int32ArrayFind: {
    (
        _this: Int32Array,
        predicate: (value: number, index: number, obj: Int32Array) => boolean,
        thisArg?: any
    ): number | undefined;
} = /*@__PURE__*/ protoShift(int32ArrayProto.find) as any;

/**
 * Returns the index of the first element in the array where predicate is true, and -1
 * otherwise.
 * @param predicate find calls predicate once for each element of the array, in ascending
 * order, until it finds one where predicate returns true. If such an element is found,
 * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
 * @param thisArg If provided, it will be used as the this value for each invocation of
 * predicate. If it is not provided, undefined is used instead.
 */
export const int32ArrayFindIndex: {
    (
        _this: Int32Array,
        predicate: (value: number, index: number, obj: Int32Array) => boolean,
        thisArg?: any
    ): number;
} = /*@__PURE__*/ protoShift(int32ArrayProto.findIndex) as any;

/**
 * Performs the specified action for each element in an array.
 * @param callbackfn  A function that accepts up to three arguments. forEach calls the
 * callbackfn function one time for each element in the array.
 * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
 * If thisArg is omitted, undefined is used as the this value.
 */
export const int32ArrayForEach: {
    (_this: Int32Array, callbackfn: Traverser<number>, thisArg?: any): void;
} = /*@__PURE__*/ protoShift(int32ArrayProto.forEach) as any;

/**
 * Returns the index of the first occurrence of a value in an array.
 * @param searchElement The value to locate in the array.
 * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
 *  search starts at index 0.
 */
export const int32ArrayIndexOf: {
    (_this: Int32Array, searchElement: number, fromIndex?: number): number;
} = /*@__PURE__*/ protoShift(int32ArrayProto.indexOf) as any;

/**
 * Adds all the elements of an array separated by the specified separator string.
 * @param separator A string used to separate one element of an array from the next in the
 * resulting String. If omitted, the array elements are separated with a comma.
 */
export const int32ArrayJoin: {
    (_this: Int32Array, separator?: string): string;
} = /*@__PURE__*/ protoShift(int32ArrayProto.join) as any;

/**
 * Returns the index of the last occurrence of a value in an array.
 * @param searchElement The value to locate in the array.
 * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
 * search starts at index 0.
 */
export const int32ArrayLastIndexOf: {
    (_this: Int32Array, searchElement: number, fromIndex?: number): number;
} = /*@__PURE__*/ protoShift(int32ArrayProto.lastIndexOf) as any;

/**
 * Calls a defined callback function on each element of an array, and returns an array that
 * contains the results.
 * @param callbackfn A function that accepts up to three arguments. The map method calls the
 * callbackfn function one time for each element in the array.
 * @param thisArg An object to which the this keyword can refer in the callbackfn function.
 * If thisArg is omitted, undefined is used as the this value.
 */
export const int32ArrayMap: {
    <T>(
        _this: Int32Array,
        callbackfn: Mapper<number, T>,
        thisArg?: any
    ): Int32Array;
} = /*@__PURE__*/ protoShift(int32ArrayProto.map) as any;

/**
 * Calls the specified callback function for all the elements in an array. The return value of
 * the callback function is the accumulated result, and is provided as an argument in the next
 * call to the callback function.
 * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
 * callbackfn function one time for each element in the array.
 * @param initialValue If initialValue is specified, it is used as the initial value to start
 * the accumulation. The first call to the callbackfn function provides this value as an argument
 * instead of an array value.
 */
export const int32ArrayReduce: {
    /**
     * Calls the specified callback function for all the elements in an array. The return value of
     * the callback function is the accumulated result, and is provided as an argument in the next
     * call to the callback function.
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
     * callbackfn function one time for each element in the array.
     */
    (_this: Int32Array, callbackfn: Reducer<number, number>): number;
    /**
     * Calls the specified callback function for all the elements in an array. The return value of
     * the callback function is the accumulated result, and is provided as an argument in the next
     * call to the callback function.
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
     * callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start
     * the accumulation. The first call to the callbackfn function provides this value as an argument
     * instead of an array value.
     */
    (
        _this: Int32Array,
        callbackfn: Reducer<number, number>,
        initialValue: number
    ): number;
    /**
     * Calls the specified callback function for all the elements in an array. The return value of
     * the callback function is the accumulated result, and is provided as an argument in the next
     * call to the callback function.
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
     * callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start
     * the accumulation. The first call to the callbackfn function provides this value as an argument
     * instead of an array value.
     */
    <U>(_this: Int32Array, callbackfn: Reducer<number, U>, initialValue: U): U;
} = /*@__PURE__*/ protoShift(int32ArrayProto.reduce) as any;

/**
 * Calls the specified callback function for all the elements in an array, in descending order.
 * The return value of the callback function is the accumulated result, and is provided as an
 * argument in the next call to the callback function.
 * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
 * the callbackfn function one time for each element in the array.
 * @param initialValue If initialValue is specified, it is used as the initial value to start
 * the accumulation. The first call to the callbackfn function provides this value as an
 * argument instead of an array value.
 */
export const int32ArrayReduceRight: {
    /**
     * Calls the specified callback function for all the elements in an array, in descending order.
     * The return value of the callback function is the accumulated result, and is provided as an
     * argument in the next call to the callback function.
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
     * the callbackfn function one time for each element in the array.
     */
    (_this: Int32Array, callbackfn: Reducer<number, number>): number;
    /**
     * Calls the specified callback function for all the elements in an array, in descending order.
     * The return value of the callback function is the accumulated result, and is provided as an
     * argument in the next call to the callback function.
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
     * the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start
     * the accumulation. The first call to the callbackfn function provides this value as an
     * argument instead of an array value.
     */
    (
        _this: Int32Array,
        callbackfn: Reducer<number, number>,
        initialValue: number
    ): number;
    /**
     * Calls the specified callback function for all the elements in an array, in descending order.
     * The return value of the callback function is the accumulated result, and is provided as an
     * argument in the next call to the callback function.
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
     * the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start
     * the accumulation. The first call to the callbackfn function provides this value as an argument
     * instead of an array value.
     */
    <U>(_this: Int32Array, callbackfn: Reducer<number, U>, initialValue: U): U;
} = /*@__PURE__*/ protoShift(int32ArrayProto.reduceRight) as any;

/**
 * Reverses the elements in an Array.
 */
export const int32ArrayReverse: {
    (_this: Int32Array): Int32Array;
} = /*@__PURE__*/ protoShift(int32ArrayProto.reverse) as any;

/**
 * Sets a value or an array of values.
 * @param array A typed or untyped array of values to set.
 * @param offset The index in the current array at which the values are to be written.
 */
export const int32ArraySet: {
    (_this: Int32Array, array: ArrayLike<number>, offset?: number): void;
} = /*@__PURE__*/ protoShift(int32ArrayProto.set) as any;

/**
 * Returns a section of an array.
 * @param start The beginning of the specified portion of the array.
 * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
 */
export const int32ArraySlice: {
    (_this: Int32Array, start?: number, end?: number): Int32Array;
} = /*@__PURE__*/ protoShift(int32ArrayProto.slice) as any;

/**
 * Determines whether the specified callback function returns true for any element of an array.
 * @param predicate A function that accepts up to three arguments. The some method calls
 * the predicate function for each element in the array until the predicate returns a value
 * which is coercible to the Boolean value true, or until the end of the array.
 * @param thisArg An object to which the this keyword can refer in the predicate function.
 * If thisArg is omitted, undefined is used as the this value.
 */
export const int32ArraySome: {
    (_this: Int32Array, predicate: Predicate<number>, thisArg?: any): boolean;
} = /*@__PURE__*/ protoShift(int32ArrayProto.some) as any;

/**
 * Sorts an array.
 * @param compareFn Function used to determine the order of the elements. It is expected to return
 * a negative value if first argument is less than second argument, zero if they're equal and a positive
 * value otherwise. If omitted, the elements are sorted in ascending order.
 * ```ts
 * [11,2,22,1].sort((a, b) => a - b)
 * ```
 */
export const int32ArraySort: {
    (_this: Int32Array, compareFn?: Comparator<number>): typeof _this;
} = /*@__PURE__*/ protoShift(int32ArrayProto.sort) as any;

/**
 * Gets a new Int32Array view of the ArrayBuffer store for this array, referencing the elements
 * at begin, inclusive, up to end, exclusive.
 * @param begin The index of the beginning of the array.
 * @param end The index of the end of the array.
 */
export const int32ArraySubarray: {
    (_this: Int32Array, begin?: number, end?: number): Int32Array;
} = /*@__PURE__*/ protoShift(int32ArrayProto.subarray) as any;
