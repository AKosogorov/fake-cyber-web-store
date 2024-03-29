import type { FirebaseApi } from '@/shared/api'

export enum EGender {
  male = 'male',
  female = 'female'
}

export interface IUserFB {
  username: string
  gender: EGender
  email: string
  phone?: string
  avatar?: string
  walletId?: FirebaseApi.TId
  favoritesId?: FirebaseApi.TId
  cartId?: FirebaseApi.TId
  orderIds?: FirebaseApi.TId[]
  commentIds?: FirebaseApi.TId[]
  ratingIds?: FirebaseApi.TId[]
}

export interface IUser extends IUserFB {
  id: FirebaseApi.TId
}
