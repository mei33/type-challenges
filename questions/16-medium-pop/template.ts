type Pop<T extends any[]> = T extends [...infer H, unknown] ? H : never
