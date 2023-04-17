import type { FirebaseApi } from '@/shared/api'

export interface ICart extends ICartFB {
  id: FirebaseApi.TId
}

export interface ICartFB {
  products: ICartProduct[]
  total: number
  discountedTotal: number
  userId: FirebaseApi.TId
  totalProducts: number
  totalQuantity: number
}

export interface ICartResponse {
  id: number
  products: ICartProduct[]
  total: number
  discountedTotal: number
  userId: number
  totalProducts: number
  totalQuantity: number
  isDeleted?: boolean
  deletedOn?: string
}

export interface ICartProduct extends ICartProductBase {
  title: string
  price: number
  total: number
  discountPercentage: number
  discountedPrice: number
}

export interface ICartProductBase {
  id: number
  quantity: number
}