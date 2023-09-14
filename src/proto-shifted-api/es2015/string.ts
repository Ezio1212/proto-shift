import { /*@__PURE__*/ unbind } from "../../tool";

export const stringCodePointAt: {
  (_this: string, pos: number): number | undefined;
} = /*@__PURE__*/ unbind(String.prototype.codePointAt) as any;

export const stringIncludes: {
  (_this: string, searchString: string, position?: number): boolean;
} = /*@__PURE__*/ unbind(String.prototype.includes) as any;

export const stringEndsWith: {
  (_this: string, searchString: string, endPosition?: number): boolean;
} = /*@__PURE__*/ unbind(String.prototype.endsWith) as any;

export const stringNormalize: {
  (_this: string, form: "NFC" | "NFD" | "NFKC" | "NFKD"): string;
  (_this: string, form?: string): string;
} = /*@__PURE__*/ unbind(String.prototype.normalize) as any;

export const stringRepeat: {
  (_this: string, count: number): string;
} = /*@__PURE__*/ unbind(String.prototype.repeat) as any;

export const stringStartsWith: {
  (_this: string, searchString: string, position?: number): boolean;
} = /*@__PURE__*/ unbind(String.prototype.startsWith) as any;
