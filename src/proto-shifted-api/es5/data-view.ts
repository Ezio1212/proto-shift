import { protoShift } from "../../tool";

/**
 * Gets the Float32 value at the specified byte offset from the start of the view. There is
 * no alignment constraint; multi-byte values may be fetched from any offset.
 * @param byteOffset The place in the buffer at which the value should be retrieved.
 * @param littleEndian If false or undefined, a big-endian value should be read.
 */
export const dataViewGetFloat32: {
    (dataView: DataView, byteOffset: number, littleEndian?: boolean): number;
} = /*@__PURE__*/ protoShift(DataView.prototype.getFloat32) as any;

/**
 * Gets the Float64 value at the specified byte offset from the start of the view. There is
 * no alignment constraint; multi-byte values may be fetched from any offset.
 * @param byteOffset The place in the buffer at which the value should be retrieved.
 * @param littleEndian If false or undefined, a big-endian value should be read.
 */
export const dataViewGetFloat64: {
    (dataView: DataView, byteOffset: number, littleEndian?: boolean): number;
} = /*@__PURE__*/ protoShift(DataView.prototype.getFloat64) as any;

/**
 * Gets the Int8 value at the specified byte offset from the start of the view. There is
 * no alignment constraint; multi-byte values may be fetched from any offset.
 * @param byteOffset The place in the buffer at which the value should be retrieved.
 */
export const dataViewGetInt8: {
    (dataView: DataView, byteOffset: number): number;
} = /*@__PURE__*/ protoShift(DataView.prototype.getInt8) as any;

/**
 * Gets the Int16 value at the specified byte offset from the start of the view. There is
 * no alignment constraint; multi-byte values may be fetched from any offset.
 * @param byteOffset The place in the buffer at which the value should be retrieved.
 * @param littleEndian If false or undefined, a big-endian value should be read.
 */
export const dataViewGetInt16: {
    (dataView: DataView, byteOffset: number, littleEndian?: boolean): number;
} = /*@__PURE__*/ protoShift(DataView.prototype.getInt16) as any;
/**
 * Gets the Int32 value at the specified byte offset from the start of the view. There is
 * no alignment constraint; multi-byte values may be fetched from any offset.
 * @param byteOffset The place in the buffer at which the value should be retrieved.
 * @param littleEndian If false or undefined, a big-endian value should be read.
 */
export const dataViewGetInt32: {
    (dataView: DataView, byteOffset: number, littleEndian?: boolean): number;
} = /*@__PURE__*/ protoShift(DataView.prototype.getInt32) as any;

/**
 * Gets the Uint8 value at the specified byte offset from the start of the view. There is
 * no alignment constraint; multi-byte values may be fetched from any offset.
 * @param byteOffset The place in the buffer at which the value should be retrieved.
 */
export const dataViewGetUint8: {
    (dataView: DataView, byteOffset: number): number;
} = /*@__PURE__*/ protoShift(DataView.prototype.getUint8) as any;

/**
 * Gets the Uint16 value at the specified byte offset from the start of the view. There is
 * no alignment constraint; multi-byte values may be fetched from any offset.
 * @param byteOffset The place in the buffer at which the value should be retrieved.
 * @param littleEndian If false or undefined, a big-endian value should be read.
 */
export const dataViewGetUint16: {
    (dataView: DataView, byteOffset: number, littleEndian?: boolean): number;
} = /*@__PURE__*/ protoShift(DataView.prototype.getUint16) as any;

/**
 * Gets the Uint32 value at the specified byte offset from the start of the view. There is
 * no alignment constraint; multi-byte values may be fetched from any offset.
 * @param byteOffset The place in the buffer at which the value should be retrieved.
 * @param littleEndian If false or undefined, a big-endian value should be read.
 */
export const dataViewGetUint32: {
    (dataView: DataView, byteOffset: number, littleEndian?: boolean): number;
} = /*@__PURE__*/ protoShift(DataView.prototype.getUint32) as any;

/**
 * Stores an Float32 value at the specified byte offset from the start of the view.
 * @param byteOffset The place in the buffer at which the value should be set.
 * @param value The value to set.
 * @param littleEndian If false or undefined, a big-endian value should be written.
 */
export const dataViewSetFloat32: {
    (
        dataView: DataView,
        byteOffset: number,
        value: number,
        littleEndian?: boolean
    ): void;
} = /*@__PURE__*/ protoShift(DataView.prototype.setFloat32) as any;

/**
 * Stores an Float64 value at the specified byte offset from the start of the view.
 * @param byteOffset The place in the buffer at which the value should be set.
 * @param value The value to set.
 * @param littleEndian If false or undefined, a big-endian value should be written.
 */
export const dataViewSetFloat64: {
    (
        dataView: DataView,
        byteOffset: number,
        value: number,
        littleEndian?: boolean
    ): void;
} = /*@__PURE__*/ protoShift(DataView.prototype.setFloat64) as any;

/**
 * Stores an Int8 value at the specified byte offset from the start of the view.
 * @param byteOffset The place in the buffer at which the value should be set.
 * @param value The value to set.
 */
export const dataViewSetInt8: {
    (dataView: DataView, byteOffset: number, value: number): void;
} = /*@__PURE__*/ protoShift(DataView.prototype.setInt8) as any;

/**
 * Stores an Int16 value at the specified byte offset from the start of the view.
 * @param byteOffset The place in the buffer at which the value should be set.
 * @param value The value to set.
 * @param littleEndian If false or undefined, a big-endian value should be written.
 */
export const dataViewSetInt16: {
    (
        dataView: DataView,
        byteOffset: number,
        value: number,
        littleEndian?: boolean
    ): void;
} = /*@__PURE__*/ protoShift(DataView.prototype.setInt16) as any;

/**
 * Stores an Int32 value at the specified byte offset from the start of the view.
 * @param byteOffset The place in the buffer at which the value should be set.
 * @param value The value to set.
 * @param littleEndian If false or undefined, a big-endian value should be written.
 */
export const dataViewSetInt32: {
    (
        dataView: DataView,
        byteOffset: number,
        value: number,
        littleEndian?: boolean
    ): void;
} = /*@__PURE__*/ protoShift(DataView.prototype.setInt32) as any;

/**
 * Stores an Uint8 value at the specified byte offset from the start of the view.
 * @param byteOffset The place in the buffer at which the value should be set.
 * @param value The value to set.
 */
export const dataViewSetUint8: {
    (dataView: DataView, byteOffset: number, value: number): void;
} = /*@__PURE__*/ protoShift(DataView.prototype.setUint8) as any;

/**
 * Stores an Uint16 value at the specified byte offset from the start of the view.
 * @param byteOffset The place in the buffer at which the value should be set.
 * @param value The value to set.
 * @param littleEndian If false or undefined, a big-endian value should be written.
 */
export const dataViewSetUint16: {
    (
        dataView: DataView,
        byteOffset: number,
        value: number,
        littleEndian?: boolean
    ): void;
} = /*@__PURE__*/ protoShift(DataView.prototype.setUint16) as any;

/**
 * Stores an Uint32 value at the specified byte offset from the start of the view.
 * @param byteOffset The place in the buffer at which the value should be set.
 * @param value The value to set.
 * @param littleEndian If false or undefined, a big-endian value should be written.
 */
export const dataViewSetUint32: {
    (
        dataView: DataView,
        byteOffset: number,
        value: number,
        littleEndian?: boolean
    ): void;
} = /*@__PURE__*/ protoShift(DataView.prototype.setUint32) as any;
