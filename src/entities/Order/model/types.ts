import type { CartModel } from '@/entities/Cart'
import type { FirebaseApi } from '@/shared/api'

export interface IOrder extends IOrderFB {
  id: FirebaseApi.TId
}

export interface IOrderFB extends CartModel.ICartFB {
  dateDelivery: number
  dateReceiving?: number
  statusId: EOrderStatus
  isPrepaid: boolean
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
