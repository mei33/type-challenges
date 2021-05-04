type Chainable<C = {}> = {
  option<K extends string | number | symbol, V>(key: K, value: V): Chainable<C & {[P in K]: V}>
  get(): C
}
