import { /*@__PURE__*/ protoShift } from "../../tool";
import { /*@__PURE__*/ functionProto } from "../protos";

/**
 * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
 * @param thisArg The object to be used as the this object.
 * @param argArray A set of arguments to be passed to the function.
 */
export const functionApply: {
  <T extends (...args: any) => any>(
    func: T,
    thisArg: any,
    argArray?: Parameters<T>
  ): ReturnType<T>;
} = /*@__PURE__*/ protoShift(functionProto.apply) as any;

/**
 * Calls a method of an object, substituting another object for the current object.
 * @param thisArg The object to be used as the current object.
 * @param argArray A list of arguments to be passed to the method.
 */
export const functionCall: {
  <T extends (...args: any) => any>(
    func: T,
    thisArg: any,
    ...argArray: Parameters<T>
  ): ReturnType<T>;
} = /*@__PURE__*/ protoShift(functionProto.call) as any;

/**
 * For a given function, creates a bound function that has the same body as the original function.
 * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
 * @param thisArg An object to which the this keyword can refer inside the new function.
 * @param argArray A list of arguments to be passed to the new function.
 */
export const functionBind: {
  <T extends (...args: any) => any>(
    func: T,
    thisArg: any,
    ...argArray: Parameters<T>
  ): T;
} = /*@__PURE__*/ protoShift(functionProto.bind) as any;
