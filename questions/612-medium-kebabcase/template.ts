type KebabCase<S> = S extends `${infer H}${infer T}`
? T extends Uncapitalize<T>
    ? `${Uncapitalize<H>}${KebabCase<T>}`
    : `${Uncapitalize<H>}-${KebabCase<T>}`
: S;