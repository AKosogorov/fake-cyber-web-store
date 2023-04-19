import type { CartModel } from '@/entities/Cart'

export interface IOrderFB extends CartModel.ICartFB {
  dateShipment: number
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
