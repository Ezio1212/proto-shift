import { /*@__PURE__*/ protoShift } from "../../tool";
import type { StringReplacer } from "../../types";
import { stringProto } from "../protos";

/**
 * Returns the character at the specified index.
 * @param pos The zero-based index of the desired character.
 */
export const stringCharAt: {
  (_this: string, pos: number): string;
} = /*@__PURE__*/ protoShift(stringProto.charAt) as any;

/**
 * Returns the Unicode value of the character at the specified location.
 * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.
 */
export const stringCharCodeAt: {
  (_this: string, index: number): number;
} = /*@__PURE__*/ protoShift(stringProto.charCodeAt) as any;

/**
 * Returns a string that contains the concatenation of two or more strings.
 * @param strings The strings to append to the end of the string.
 */
export const stringConcat: {
  (_this: string, ...strings: string[]): string;
} = /*@__PURE__*/ protoShift(stringProto.concat) as any;

/**
 * Returns the position of the first occurrence of a substring.
 * @param searchString The substring to search for in the string
 * @param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
 */
export const stringIndexOf: {
  (_this: string, searchString: string, position?: number): number;
} = /*@__PURE__*/ protoShift(stringProto.indexOf) as any;

/**
 * Returns the last occurrence of a substring in the string.
 * @param searchString The substring to search for.
 * @param position The index at which to begin searching. If omitted, the search begins at the end of the string.
 */
export const stringLastIndexOf: {
  (_this: string, searchString: string, position?: number): number;
} = /*@__PURE__*/ protoShift(stringProto.lastIndexOf) as any;

/**
 * Determines whether two strings are equivalent in the current locale.
 * @param that String to compare to target string
 */
export const stringLocaleCompare: {
  (_this: string, that: string): number;
} = /*@__PURE__*/ protoShift(stringProto.localeCompare) as any;

/**
 * Matches a string with a regular expression, and returns an array containing the results of that search.
 * @param regexp A variable name or string literal containing the regular expression pattern and flags.
 */
export const stringMatch: {
  (_this: string, regexp: string | RegExp): RegExpMatchArray | null;
} = /*@__PURE__*/ protoShift(stringProto.match) as any;

export const stringReplace: {
  /**
   * Replaces text in a string, using a regular expression or search string.
   * @param searchValue A string or regular expression to search for.
   * @param replaceValue A string containing the text to replace. When the {@linkcode searchValue} is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of {@linkcode searchValue} is replaced.
   */
  (_this: string, searchValue: string | RegExp, replaceValue: string): string;
  /**
   * Replaces text in a string, using a regular expression or search string.
   * @param searchValue A string to search for.
   * @param replacer A function that returns the replacement text.
   */
  (
    _this: string,
    searchValue: string | RegExp,
    replacer: StringReplacer
  ): string;
} = /*@__PURE__*/ protoShift(stringProto.replace) as any;

/**
 * Finds the first substring match in a regular expression search.
 * @param regexp The regular expression pattern and applicable flags.
 */
export const stringSearch: {
  (_this: string, regexp: string | RegExp): number;
} = /*@__PURE__*/ protoShift(stringProto.search) as any;

/**
 * Returns a section of a string.
 * @param start The index to the beginning of the specified portion of stringObj.
 * @param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
 * If this value is not specified, the substring continues to the end of stringObj.
 */
export const stringSlice: {
  (_this: string, start?: number, end?: number): string;
} = /*@__PURE__*/ protoShift(stringProto.slice) as any;

/**
 * Split a string into substrings using the specified separator and return them as an array.
 * @param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
 * @param limit A value used to limit the number of elements returned in the array.
 */
export const stringSplit: {
  (_this: string, separator: string | RegExp, limit?: number): string[];
} = /*@__PURE__*/ protoShift(stringProto.split) as any;

/**
 * Returns the substring at the specified location within a String object.
 * @param start The zero-based index number indicating the beginning of the substring.
 * @param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
 * If end is omitted, the characters from start through the end of the original string are returned.
 */
export const stringSubstring: {
  (_this: string, start: number, end?: number): string;
} = /*@__PURE__*/ protoShift(stringProto.substring) as any;

/** Converts all the alphabetic characters in a string to lowercase. */
export const stringToLowerCase: {
  (_this: string): string;
} = /*@__PURE__*/ protoShift(stringProto.toLowerCase) as any;

/** Converts all alphabetic characters to lowercase, taking into account the host environment's current locale. */
export const stringToLocaleLowerCase: {
  (_this: string, locales?: string | string[]): string;
} = /*@__PURE__*/ protoShift(stringProto.toLocaleLowerCase) as any;

/** Converts all the alphabetic characters in a string to uppercase. */
export const stringToUpperCase: {
  (_this: string): string;
} = /*@__PURE__*/ protoShift(stringProto.toUpperCase) as any;

/** Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale. */
export const stringToLocaleUpperCase: {
  (_this: string, locales?: string | string[]): string;
} = /*@__PURE__*/ protoShift(stringProto.toLocaleUpperCase) as any;

/** Removes the leading and trailing white space and line terminator characters from a string. */
export const stringTrim: {
  (_this: string): string;
} = /*@__PURE__*/ protoShift(stringProto.trim) as any;

/**
 * Gets a substring beginning at the specified location and having the specified length.
 * @deprecated A legacy feature for browser compatibility
 * @param from The starting position of the desired substring. The index of the first character in the string is zero.
 * @param length The number of characters to include in the returned substring.
 */
export const stringSubstr: {
  (_this: string, from: number, length?: number): string;
} = /*@__PURE__*/ protoShift(stringProto.substr) as any;

/**
 * Gets a string from spefic char codes
 */
export const stringFromCharCode: {
  (...codes: number[]): string;
} = /*@__PURE__*/ String.fromCharCode.bind(String);
