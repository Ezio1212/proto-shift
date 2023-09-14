import { /*@__PURE__*/ protoShift } from "../../tool";
import type { StringReplacer } from "../../types";
import { /*@__PURE__*/ stringProto } from "../protos";

export const stringReplaceAll: {
  /**
   * Replace all instances of a substring in a string, using a regular expression or search string.
   * @param searchValue A string to search for.
   * @param replaceValue A string containing the text to replace for every successful match of searchValue in this string.
   */
  (_this: string, searchValue: string | RegExp, replaceValue: string): string;
  /**
   * Replace all instances of a substring in a string, using a regular expression or search string.
   * @param searchValue A string to search for.
   * @param replacer A function that returns the replacement text.
   */
  (
    _this: string,
    searchValue: string | RegExp,
    replacer: StringReplacer
  ): string;
} = /*@__PURE__*/ protoShift(stringProto.replaceAll) as any;
