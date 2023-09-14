import { protoShift } from "../../tool";
import { promiseProto } from "../protos";

/**
 * Attaches callbacks for the resolution and/or rejection of the Promise.
 * @param onfulfilled The callback to execute when the Promise is resolved.
 * @param onrejected The callback to execute when the Promise is rejected.
 * @returns A Promise for the completion of which ever callback is executed.
 */
export const promiseThen: {
  <T, TResult1 = T, TResult2 = never>(
    promise: Promise<T>,
    onfulfilled?:
      | ((value: T) => TResult1 | PromiseLike<TResult1>)
      | undefined
      | null,
    onrejected?:
      | ((reason: any) => TResult2 | PromiseLike<TResult2>)
      | undefined
      | null
  ): Promise<TResult1 | TResult2>;
} = /*@__PURE__*/ protoShift(promiseProto.then) as any;

/**
 * Attaches a callback for only the rejection of the Promise.
 * @param onrejected The callback to execute when the Promise is rejected.
 * @returns A Promise for the completion of the callback.
 */
export const promiseCatch: {
  <T, TResult = never>(
    promise: Promise<T>,
    onrejected?:
      | ((reason: any) => TResult | PromiseLike<TResult>)
      | undefined
      | null
  ): Promise<T | TResult>;
} = /*@__PURE__*/ protoShift(promiseProto.catch) as any;
