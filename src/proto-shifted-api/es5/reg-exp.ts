import { /*@__PURE__*/ protoShift } from "../../tool";
import { /*@__PURE__*/ regExpProto } from "../protos";

/**
 * Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.
 * @param string The String object or string literal on which to perform the search.
 */
export const regExpExec: {
    (regExp: RegExp, string: string): RegExpExecArray | null;
} = /*@__PURE__*/ protoShift(regExpProto.exec) as any;

/**
 * Returns a Boolean value that indicates whether or not a pattern exists in a searched string.
 * @param string String on which to perform the search.
 */
export const regExpTest: {
    (regExp: RegExp, string: string): boolean;
} = /*@__PURE__*/ protoShift(regExpProto.test) as any;
