import { /*@__PURE__*/ unbind } from "../../tool";

/** Removes the trailing white space and line terminator characters from a string. */
export const stringTrimEnd: {
  (_this: string): string;
} = /*@__PURE__*/ unbind(String.prototype.trimEnd) as any;

/** Removes the leading white space and line terminator characters from a string. */
export const stringTrimStart: {
  (_this: string): string;
} = /*@__PURE__*/ unbind(String.prototype.trimStart) as any;

/**
 * Removes the leading white space and line terminator characters from a string.
 * @deprecated A legacy feature for browser compatibility. Use `trimStart` instead
 */
export const stringTrimLeft: {
  (_this: string): string;
} = /*@__PURE__*/ unbind(String.prototype.trimLeft) as any;

/**
 * Removes the trailing white space and line terminator characters from a string.
 * @deprecated A legacy feature for browser compatibility. Use `trimEnd` instead
 */
export const stringTrimRight: {
  (_this: string): string;
} = /*@__PURE__*/ unbind(String.prototype.trimRight) as any;
