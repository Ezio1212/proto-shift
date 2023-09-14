import { /*@__PURE__*/ protoShift } from "../../tool";
import { /*@__PURE__*/ stringProto } from "../protos";
/**
 * Returns a new String consisting of the single UTF-16 code unit located at the specified index.
 * @param index The zero-based index of the desired code unit. A negative index will count back from the last item.
 */
export const stringAt: {
  (_this: string, index: number): string | undefined;
} = /*@__PURE__*/ protoShift(stringProto.at) as any;
