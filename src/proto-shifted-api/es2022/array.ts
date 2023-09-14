import { /*@__PURE__*/ protoShift } from "../../tool";
import { /*@__PURE__*/ arrayProto } from "../protos";

/**
 * Returns the item located at the specified index.
 * @param _this The source array.
 * @param index The zero-based index of the desired code unit. A negative index will count back from the last item.
 */
export const arrayAt: {
  <T>(_this: T[], index: number): T | undefined;
} = /*@__PURE__*/ protoShift(arrayProto.at) as any;
