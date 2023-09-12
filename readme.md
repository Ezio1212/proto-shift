# proto-shift

Javascript proto-shifted apis.

## Usage

### Install

```sh
npm i proto-shift
```

### Basic APIs

```typescript
/**
 * transform foo.bar(...args) to bar(foo, ...args)
 * @param value the property function to be transformed.
 * @returns a new function.
 */
declare const protoShift: (...args: any[]) => unknown;
declare const unbind: (...args: any[]) => unknown; // same as protoShift
```

### Sample

```javascript
import { protoShift } from "proto-shift";
const join = protoShift(Array.prototype.join);
join([1, 2, 3], "|"); // 1|2|3
```

This Library includes most of Javascript basic apis.

```javascript
// in index.d.ts

/** Removes the trailing white space and line terminator characters from a string. */
declare const stringTrimEnd: {
    (_this: string): string;
};
/** Removes the leading white space and line terminator characters from a string. */
declare const stringTrimStart: {
    (_this: string): string;
};
/**
 * Removes the leading white space and line terminator characters from a string.
 * @deprecated A legacy feature for browser compatibility. Use `trimStart` instead
 */
declare const stringTrimLeft: {
    (_this: string): string;
};
/**
 * Removes the trailing white space and line terminator characters from a string.
 * @deprecated A legacy feature for browser compatibility. Use `trimEnd` instead
 */
declare const stringTrimRight: {
    (_this: string): string;
};

/**
 * Matches a string with a regular expression, and returns an iterable of matches
 * containing the results of that search.
 * @param regexp A variable name or string literal containing the regular expression pattern and flags.
 */
declare const stringMatchAll: {
    (_this: string, regexp: RegExp): IterableIterator<RegExpMatchArray>;
};
```

For Example, to use `Array.prototype.filter`, you can use `arrayFilter` to instead:

```typescript
import { arrayFilter } from "proto-shift";

arrayFilter([1, 2, 3], (e) => e % 2); // [1, 3]
```

to find basic javascrpit functions, you can find them like followings.

Example:

1. String.prototype.charCodeAt => stringCharCodeAt
2. Array.prototype.map => arrayMap
3. ...

## License

[MIT](./LICENSE)
