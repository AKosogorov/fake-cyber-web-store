import type { CartModel } from '@/entities/Cart'
import type { FirebaseApi } from '@/shared/api'

export interface IOrderFB {
  userId: FirebaseApi.TId
  date: number
  dateShipment: number
  statusId: EOrderStatus
  isPrepaid: boolean
  products: CartModel.ICartProduct[]
  total: number
  location: IOrderLocation
}

export enum EOrderStatus {
  delivery = 1,
  ready,
  purchased
}

export interface IOrderLocation {
  address?: string
  deliveryType: EDeliveryType
}

export enum EDeliveryType {
  point = 1,
  delivery
}
