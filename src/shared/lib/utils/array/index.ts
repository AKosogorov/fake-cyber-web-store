type tId = number | string
interface IObject {
  id: tId
}

export function spliceBy(id: tId, arr: IObject[]): void {
  const idx = arr.findIndex(item => item.id === id)
  if (idx === -1) return
  arr.splice(idx, 1)
}
