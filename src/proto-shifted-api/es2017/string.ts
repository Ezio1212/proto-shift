import { /*@__PURE__*/ protoShift } from "../../tool";
import { /*@__PURE__*/ stringProto } from "../protos";

export const stringPadEnd: {
  (_this: string, maxLength: number, fillString?: string): string;
} = /*@__PURE__*/ protoShift(stringProto.padEnd) as any;

export const stringPadStart: {
  (_this: string, maxLength: number, fillString?: string): string;
} = /*@__PURE__*/ protoShift(stringProto.padStart) as any;
