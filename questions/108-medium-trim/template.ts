type Symbols = ' ' | '\n' | '\t';

type Trim<S> = S extends `${Symbols}${infer R}` 
    ? Trim<R>
    : S extends `${infer L}${Symbols}`
        ? Trim<L>
        : S