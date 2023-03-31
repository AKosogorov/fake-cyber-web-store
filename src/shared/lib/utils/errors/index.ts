export function throwInjectError(key: string): never {
  throw new Error('Could not find provider ' + key)
}
