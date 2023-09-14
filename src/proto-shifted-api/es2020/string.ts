import { /*@__PURE__*/ protoShift } from "../../tool";
import { /*@__PURE__*/ stringProto } from "../protos";

/**
 * Matches a string with a regular expression, and returns an iterable of matches
 * containing the results of that search.
 * @param regexp A variable name or string literal containing the regular expression pattern and flags.
 */
export const stringMatchAll: {
  (_this: string, regexp: RegExp): IterableIterator<RegExpMatchArray>;
} = /*@__PURE__*/ protoShift(stringProto.matchAll) as any;
