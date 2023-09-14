import { /*@__PURE__*/ protoShift } from "../../tool";
import { /*@__PURE__*/ stringProto } from "../protos";

export const stringCodePointAt: {
  (_this: string, pos: number): number | undefined;
} = /*@__PURE__*/ protoShift(stringProto.codePointAt) as any;

export const stringIncludes: {
  (_this: string, searchString: string, position?: number): boolean;
} = /*@__PURE__*/ protoShift(stringProto.includes) as any;

export const stringEndsWith: {
  (_this: string, searchString: string, endPosition?: number): boolean;
} = /*@__PURE__*/ protoShift(stringProto.endsWith) as any;

export const stringNormalize: {
  (_this: string, form: "NFC" | "NFD" | "NFKC" | "NFKD"): string;
  (_this: string, form?: string): string;
} = /*@__PURE__*/ protoShift(stringProto.normalize) as any;

export const stringRepeat: {
  (_this: string, count: number): string;
} = /*@__PURE__*/ protoShift(stringProto.repeat) as any;

export const stringStartsWith: {
  (_this: string, searchString: string, position?: number): boolean;
} = /*@__PURE__*/ protoShift(stringProto.startsWith) as any;
