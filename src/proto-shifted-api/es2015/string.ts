import { /*@__PURE__*/ protoShift } from "../../tool";
import { /*@__PURE__*/ stringProto } from "../protos";

/**
 * Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point
 * value of the UTF-16 encoded code point starting at the string element at position pos in
 * the String resulting from converting this object to a String.
 * If there is no element at that position, the result is undefined.
 * If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.
 */
export const stringCodePointAt: {
    (_this: string, pos: number): number | undefined;
} = /*@__PURE__*/ protoShift(stringProto.codePointAt) as any;

/**
 * Returns true if searchString appears as a substring of the result of converting this
 * object to a String, at one or more positions that are
 * greater than or equal to position; otherwise, returns false.
 * @param searchString search string
 * @param position If position is undefined, 0 is assumed, so as to search all of the String.
 */
export const stringIncludes: {
    (_this: string, searchString: string, position?: number): boolean;
} = /*@__PURE__*/ protoShift(stringProto.includes) as any;

/**
 * Returns true if the sequence of elements of searchString converted to a String is the
 * same as the corresponding elements of this object (converted to a String) starting at
 * endPosition – length(this). Otherwise returns false.
 */
export const stringEndsWith: {
    (_this: string, searchString: string, endPosition?: number): boolean;
} = /*@__PURE__*/ protoShift(stringProto.endsWith) as any;

/**
 * Returns the String value result of normalizing the string into the normalization form
 * named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.
 * @param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
 * is "NFC"
 */
export const stringNormalize: {
    (_this: string, form: "NFC" | "NFD" | "NFKC" | "NFKD"): string;
    /**
     * Returns the String value result of normalizing the string into the normalization form
     * named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.
     * @param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
     * is "NFC"
     */
    (_this: string, form?: string): string;
} = /*@__PURE__*/ protoShift(stringProto.normalize) as any;

/**
 * Returns a String value that is made from count copies appended together. If count is 0,
 * the empty string is returned.
 * @param count number of copies to append
 */
export const stringRepeat: {
    (_this: string, count: number): string;
} = /*@__PURE__*/ protoShift(stringProto.repeat) as any;

/**
 * Returns true if the sequence of elements of searchString converted to a String is the
 * same as the corresponding elements of this object (converted to a String) starting at
 * position. Otherwise returns false.
 */
export const stringStartsWith: {
    (_this: string, searchString: string, position?: number): boolean;
} = /*@__PURE__*/ protoShift(stringProto.startsWith) as any;
