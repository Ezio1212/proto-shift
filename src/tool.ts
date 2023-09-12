/**
 * transform foo.bar(...args) to bar(foo, ...args)
 * @example
 * const join = unbind(Array.prototype.join);
 * // 1|2|3
 * join([1,2,3], '|');
 * @param value the property function to be transformed.
 * @returns a new function.
 */
export const unbind = /*@__PURE__*/ Function.call.bind(
  Function.bind,
  Function.call
);

export const protoShift = /*@__PURE__*/ unbind;
