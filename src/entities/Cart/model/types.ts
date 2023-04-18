import type { FirebaseApi } from '@/shared/api'

export interface ICart extends ICartFB {
  id: FirebaseApi.TId
}

export interface ICartFB extends ICartTotal {
  products: ICartProduct[]
  userId: FirebaseApi.TId
}

export interface ICartDummyJsonResponse extends ICartTotal {
  id: number
  products: ICartProduct[]
  userId: number
  isDeleted?: boolean
  deletedOn?: string
}

export interface ICartTotal {
  total: number
  discountedTotal: number
  totalProducts: number
  totalQuantity: number
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
