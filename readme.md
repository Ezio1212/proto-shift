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

This Library includes most of Javascript basic apis. You can use them like camelcased(`ClassName` + `FunctionName`).

For Example, to use `Array.prototype.filter`, you can use `arrayFilter` to instead.

```javascript
import { arrayFilter } from "proto-shift";

arrayFilter([1, 2, 3], (e) => e % 2); // [1, 3]
```

More Examples:

1. String.prototype.charCodeAt => stringCharCodeAt

2. Array.prototype.map => arrayMap

3. Array.prototype.concat => arrayConcat

### ES Compability

Compability According to `typescript`'s native declarations in `<package-DIR>\lib\es*.d.ts`.

🟢 All supported. 🟡 Partial supported. 🔴 Not supported. ➖ Not supported by language.

| Class             | ES5 | ES2015 | ES2016 | ES2017 | ES2018 | ES2019 | ES2020 | ES2021 | ES2022 | ES2023 |
| ----------------- | --- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| Function          | 🟢  | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     |
| Object            | 🟢  | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     |
| String            | 🟢  | 🟢     | 🟢     | 🟢     | 🟢     | 🟢     | 🟢     | 🟢     | 🟢     | 🟢     |
| Boolean           | 🔴  | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     |
| Number            | 🔴  | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     |
| Date              | 🔴  | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     |
| RegExp            | 🔴  | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     |
| Array             | 🟢  | 🟢     | 🟢     | 🟢     | 🟢     | 🟢     | 🟢     | 🟢     | 🟢     | 🟢     |
| Promise           | 🔴  | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     |
| ArrayBuffer       | 🔴  | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     |
| DataView          | 🔴  | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     |
| Int8Array         | 🔴  | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     |
| UInt8Array        | 🔴  | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     |
| Uint8ClampedArray | 🔴  | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     |
| Int16Array        | 🔴  | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     |
| Uint16Array       | 🔴  | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     |
| Int32Array        | 🔴  | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     |
| Uint32Array       | 🔴  | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     |
| Float32Array      | 🔴  | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     |
| Float64Array      | 🔴  | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     |
| Map               | ➖  | 🟢     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     |
| WeakMap           | ➖  | 🟢     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     |
| Set               | ➖  | 🟢     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     |
| WeakSet           | ➖  | 🟢     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     |
| Proxy             | ➖  | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     |
| SharedArrayBuffer | ➖  | ➖     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     |
| BigInt            | ➖  | ➖     | ➖     | ➖     | ➖     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     |
| BigInt64Array     | ➖  | ➖     | ➖     | ➖     | ➖     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     |
| BigUint64Array    | ➖  | ➖     | ➖     | ➖     | ➖     | 🔴     | 🔴     | 🔴     | 🔴     | 🔴     |

## License

[MIT](./LICENSE)
