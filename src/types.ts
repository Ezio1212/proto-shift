export type Mapper<T, U> = (value: T, index: number) => U;

export type Reducer<T, U> = (
    previousValue: U,
    currentValue: T,
    currentIndex: number
) => U;

export type Predicate<T> = {
    // (value: T, index: number): value is S;
    (value: T, index: number): boolean;
};

export type Traverser<T> = {
    (value: T, index: number): void;
};

export type StringReplacer = {
    (substring: string, ...args: any[]): string;
};

export type Comparator<T> = {
    (a: T, b: T): number;
};
