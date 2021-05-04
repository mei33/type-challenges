type MyOmit0<T, K> = {[P in MyExclude<keyof T, K>]: T[P]}
type MyOmit<T, K> = {[P in keyof T as P extends K ? never : P]: T[P]}
