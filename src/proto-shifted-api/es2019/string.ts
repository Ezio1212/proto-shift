import { /*@__PURE__*/ protoShift } from "../../tool";
import { /*@__PURE__*/ stringProto } from "../protos";

/** Removes the trailing white space and line terminator characters from a string. */
export const stringTrimEnd: {
    (_this: string): string;
} = /*@__PURE__*/ protoShift(stringProto.trimEnd) as any;

/** Removes the leading white space and line terminator characters from a string. */
export const stringTrimStart: {
    (_this: string): string;
} = /*@__PURE__*/ protoShift(stringProto.trimStart) as any;

/**
 * Removes the leading white space and line terminator characters from a string.
 * @deprecated A legacy feature for browser compatibility. Use `trimStart` instead
 */
export const stringTrimLeft: {
    (_this: string): string;
} = /*@__PURE__*/ protoShift(stringProto.trimLeft) as any;

/**
 * Removes the trailing white space and line terminator characters from a string.
 * @deprecated A legacy feature for browser compatibility. Use `trimEnd` instead
 */
export const stringTrimRight: {
    (_this: string): string;
} = /*@__PURE__*/ protoShift(stringProto.trimRight) as any;
