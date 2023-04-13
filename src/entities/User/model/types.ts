import type { FirebaseApi } from '@/shared/api'

export enum EGender {
  male = 'male',
  female = 'female'
}

export interface IUserFB {
  username: string
  gender: EGender
  email: string
  balance: number
  phone?: string
  avatar?: string
  favorite_ids?: FirebaseApi.TId[]
  cart_id?: FirebaseApi.TId
  order_ids?: FirebaseApi.TId[]
  comment_ids?: FirebaseApi.TId[]
  rating_ids?: FirebaseApi.TId[]
}

export interface IUser extends IUserFB {
  id: FirebaseApi.TId
}
