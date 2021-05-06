type Falsy = 0 | '' | false | [] | { [key: string]: never }
type AnyOf<T extends readonly any[]> = T[number] extends Falsy ? false : true
