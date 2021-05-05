type ReplaceAll<
    S extends string,
    From extends string,
    To extends string
> = S extends ''
    ? S
    : From extends ''
        ? S
        : S extends `${From}${infer R1}`
            ? `${To}${ReplaceAll<R1, From, To>}`
            : S extends `${infer L2}${infer R2}`
                ? `${L2}${ReplaceAll<R2, From, To>}`
                : S