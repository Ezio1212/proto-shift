import { /*@__PURE__*/ unbind } from "../../tool";
/**
 * Returns a new String consisting of the single UTF-16 code unit located at the specified index.
 * @param index The zero-based index of the desired code unit. A negative index will count back from the last item.
 */
export const stringAt: {
  (_this: string, index: number): string | undefined;
} = /*@__PURE__*/ unbind(String.prototype.at) as any;
