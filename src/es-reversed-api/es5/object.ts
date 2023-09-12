import { /*@__PURE__*/ unbind } from "../../tool";

/** Returns the primitive value of the specified object. */
export const objectValueOf: {
  (_this: Object): Object;
} = /*@__PURE__*/ unbind(Object.prototype.valueOf) as any;

/**
 * Determines whether an object has a property with the specified name.
 * @param v A property name.
 */
export const objectHasOwnProperty: {
  (_this: Object, v: PropertyKey): boolean;
} = /*@__PURE__*/ unbind(Object.prototype.hasOwnProperty) as any;

/**
 * Determines whether an object exists in another object's prototype chain.
 * @param v Another object whose prototype chain is to be checked.
 */
export const objectIsPrototypeOf: {
  (_this: Object, v: Object): boolean;
} = /*@__PURE__*/ unbind(Object.prototype.isPrototypeOf) as any;

/**
 * Determines whether a specified property is enumerable.
 * @param v A property name.
 */
export const objectPropertyIsEnumerable: {
  (_this: Object, v: PropertyKey): boolean;
} = /*@__PURE__*/ unbind(Object.prototype.propertyIsEnumerable) as any;
