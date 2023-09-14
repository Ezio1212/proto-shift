import { /*@__PURE__*/ protoShift } from "../../tool";
import { /*@__PURE__*/ arrayProto } from "../protos";

/**
 * Determines whether an array includes a certain element, returning true or false as appropriate.
 * @param _this The source array.
 * @param searchElement The element to search for.
 * @param fromIndex The position in this array at which to begin searching for searchElement.
 */
export const arrayIncludes: {
  <T>(_this: T[], searchElement: T, fromIndex?: number): boolean;
} = /*@__PURE__*/ protoShift(arrayProto.includes) as any;
