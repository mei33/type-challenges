type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : T
