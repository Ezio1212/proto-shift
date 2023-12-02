import { protoShift } from "../../tool";
import { arrayBufferProto } from "../protos";

/**
 * Returns a section of an ArrayBuffer.
 */
export const arrayBufferslice: {
    (arrayBuffer: ArrayBuffer, begin: number, end?: number): ArrayBuffer;
} = /*@__PURE__*/ protoShift(arrayBufferProto.slice) as any;
