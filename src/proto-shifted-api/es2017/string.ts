import { /*@__PURE__*/ unbind } from "../../tool";

export const stringPadEnd: {
  (_this: string, maxLength: number, fillString?: string): string;
} = /*@__PURE__*/ unbind(String.prototype.padEnd) as any;

export const stringPadStart: {
  (_this: string, maxLength: number, fillString?: string): string;
} = /*@__PURE__*/ unbind(String.prototype.padStart) as any;
