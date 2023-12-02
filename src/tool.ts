/**
 * transform foo.bar(...args) to bar(foo, ...args)
 * ``` ts
 * const join = protoShift(Array.prototype.join);
 * join([1,2,3], '|'); // 1|2|3
 * ```
 * @param value the property function to be transformed.
 * @returns a new function.
 */
export const protoShift = /*@__PURE__*/ Function.call.bind(
    Function.bind,
    Function.call
);
/**
 * transform foo.bar(...args) to bar(foo, ...args)
 * ``` ts
 * const join = unbind(Array.prototype.join);
 * join([1,2,3], '|'); // 1|2|3
 * ```
 * @param value the property function to be transformed.
 * @returns a new function.
 */
export const unbind = /*@__PURE__*/ protoShift;
