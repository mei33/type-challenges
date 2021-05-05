type Merge<
    F extends {[K: string]: unknown},
    S extends {[P: string]: unknown}
> = {
    [K in keyof F | keyof S]: K extends keyof S
        ? S[K] 
        : K extends keyof F
            ? F[K]
            : never
};