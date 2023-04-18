import type { FirebaseApi } from '@/shared/api'

export interface IFavorites extends IFavoritesFB {
  id: FirebaseApi.TId
}

export interface IFavoritesFB {
  userId: FirebaseApi.TId
  productIds: number[]
}
