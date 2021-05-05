import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyCapitalize1<'foobar'>, 'Foobar'>>,
  Expect<Equal<MyCapitalize1<'FOOBAR'>, 'FOOBAR'>>,
  Expect<Equal<MyCapitalize1<'foo bar'>, 'Foo bar'>>,
  Expect<Equal<MyCapitalize1<''>, ''>>,
  Expect<Equal<MyCapitalize2<'foobar'>, 'Foobar'>>,
  Expect<Equal<MyCapitalize2<'FOOBAR'>, 'FOOBAR'>>,
  Expect<Equal<MyCapitalize2<'foo bar'>, 'Foo bar'>>,
  Expect<Equal<MyCapitalize2<''>, ''>>,
]
