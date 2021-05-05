type Uppercased  = { 'f': 'F' };
type MyCapitalize1<S> = S extends `${infer C}${infer R}`
? `${C extends keyof Uppercased
    ? Uppercased[C]
    : C}${R}`
: S;
type MyCapitalize2<S> = S extends `${infer C}${infer R}`
? `${Uppercase<C>}${R}`
: S;