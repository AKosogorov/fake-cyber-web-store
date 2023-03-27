type TValue = number | string
interface IObject {
  id: TValue
}

export function spliceBy(id: TValue, array: IObject[]): void {
  const idx = array.findIndex(item => item.id === id)
  splice(idx, array)
}

export function spliceSimpleBy(value: TValue, array: TValue[]) {
  const idx = array.findIndex(item => item === value)
  splice(idx, array)
}

function splice<T>(idx: number, array: T[]) {
  if (idx === -1) return
  array.splice(idx, 1)
}

export function findBy<T extends IObject>(
  id: TValue,
  array: T[]
): T | undefined {
  return array.find(item => item.id === id)
}

export function findSimpleBy(
  value: TValue,
  array: TValue[]
): TValue | undefined {
  return array.find(item => item === value)
}

export function refreshArray<T>(arr: T[], newArr: T[]): void {
  arr.length = 0
  arr.push(...newArr)
}
