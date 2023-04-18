export interface IStore {
  productIds: number[]
  add: (id: number) => void
  remove: (id: number) => void
  checkInFavoritesBy: (id: number) => boolean
  reset: () => void
}
