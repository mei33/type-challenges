type StringToUnion<
    T extends string,
    A extends string[] = []
> = T extends `${infer H}${infer T}`
    ? StringToUnion<T, [...A, H]>
    : A[number]