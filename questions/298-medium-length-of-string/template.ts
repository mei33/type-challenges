type LengthOfString<
    S extends string, A extends string[] = []
> = S extends `${infer H}${infer T}`
    ? LengthOfString<T, [...A, H]>
    : A['length'];