import { /*@__PURE__*/ protoShift } from "../../tool";
import {
    /*@__PURE__*/ mapProto,
    /*@__PURE__*/ setProto,
    /*@__PURE__*/ weakMapProto,
    /*@__PURE__*/ weakSetProto,
} from "../protos";

/**
 * To clear a spefic map.
 */
export const mapClear: {
    <K, V>(_this: Map<K, V>): void;
} = /*@__PURE__*/ protoShift(mapProto.clear) as any;

/**
 * @returns true if an element in the Map existed and has been removed, or false if the element does not exist.
 */
export const mapDelete: {
    <K, V>(_this: Map<K, V>, key: K): boolean;
} = /*@__PURE__*/ protoShift(mapProto.delete) as any;

/**
 * Executes a provided function once per each key/value pair in the Map, in insertion order.
 */
export const mapForEach: {
    <K, V>(
        _this: Map<K, V>,
        callbackfn: (value: V, key: K, map: Map<K, V>) => void,
        thisArg?: any
    ): void;
} = /*@__PURE__*/ protoShift(mapProto.forEach) as any;

/**
 * Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.
 * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
 */
export const mapGet: {
    <K, V>(_this: Map<K, V>, key: K): V | undefined;
} = /*@__PURE__*/ protoShift(mapProto.get) as any;

/**
 * Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.
 */
export const mapHas: {
    <K, V>(_this: Map<K, V>, key: K): boolean;
} = /*@__PURE__*/ protoShift(mapProto.has) as any;

/**
 * @returns the number of elements in the Map.
 */
export const mapSet: {
    <K, V>(_this: Map<K, V>, key: K, value: V): typeof _this;
} = /*@__PURE__*/ protoShift(mapProto.set) as any;

/**
 * Removes the specified element from the WeakMap.
 * @returns true if the element was successfully removed, or false if it was not present.
 */
export const weakMapDelete: {
    <K extends object, V>(_this: WeakMap<K, V>, key: K): boolean;
} = /*@__PURE__*/ protoShift(weakMapProto.delete) as any;
/**
 * @returns a specified element.
 */
export const weakMapGet: {
    <K extends object, V>(_this: WeakMap<K, V>, key: K): V | undefined;
} = /*@__PURE__*/ protoShift(weakMapProto.get) as any;
/**
 * @returns a boolean indicating whether an element with the specified key exists or not.
 */
export const weakMapHas: {
    <K extends object, V>(_this: WeakMap<K, V>, key: K): boolean;
} = /*@__PURE__*/ protoShift(weakMapProto.has) as any;
/**
 * Adds a new element with a specified key and value.
 * @param key Must be an object.
 */
export const weakMapSet: {
    <K extends object, V>(_this: WeakMap<K, V>, key: K, value: V): typeof _this;
} = /*@__PURE__*/ protoShift(weakMapProto.set) as any;

/**
 * Appends a new element with a specified value to the end of the Set.
 */
export const setAdd: {
    <T>(_this: Set<T>, value: T): typeof _this;
} = /*@__PURE__*/ protoShift(setProto.add) as any;

export const setClear: {
    <T>(_this: Set<T>): void;
} = /*@__PURE__*/ protoShift(setProto.clear) as any;
/**
 * Removes a specified value from the Set.
 * @returns Returns true if an element in the Set existed and has been removed, or false if the element does not exist.
 */
export const setDelete: {
    <T>(_this: Set<T>, value: T): boolean;
} = /*@__PURE__*/ protoShift(setProto.delete) as any;
/**
 * Executes a provided function once per each value in the Set object, in insertion order.
 */
export const setForEach: {
    <T>(
        _this: Set<T>,
        callbackfn: (value: T, value2: T, set: Set<T>) => void,
        thisArg?: any
    ): void;
} = /*@__PURE__*/ protoShift(setProto.forEach) as any;
/**
 * @returns a boolean indicating whether an element with the specified value exists in the Set or not.
 */
export const setHas: {
    <T>(_this: Set<T>, value: T): boolean;
} = /*@__PURE__*/ protoShift(setProto.has) as any;

/**
 * Appends a new object to the end of the WeakSet.
 */
export const weakSetAdd: {
    <T extends Object>(_this: WeakSet<T>, value: T): typeof _this;
} = /*@__PURE__*/ protoShift(weakSetProto.add) as any;
/**
 * Removes the specified element from the WeakSet.
 * @returns Returns true if the element existed and has been removed, or false if the element does not exist.
 */
export const weakSetDelete: {
    <T extends Object>(_this: WeakSet<T>, value: T): boolean;
} = /*@__PURE__*/ protoShift(weakSetProto.delete) as any;
/**
 * @returns a boolean indicating whether an object exists in the WeakSet or not.
 */
export const weakSetHas: {
    <T extends Object>(_this: WeakSet<T>, value: T): boolean;
} = /*@__PURE__*/ protoShift(weakSetProto.has) as any;
