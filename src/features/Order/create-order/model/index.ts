import type { FirebaseApi } from '@/shared/api'

import { CartModel } from '@/entities/Cart'
import { OrderApi, OrderModel } from '@/entities/Order'
import { UserApi } from '@/entities/User'
import { SessionModel } from '@/entities/Session'

import { MINUTE } from '@/shared/lib/utils/date/const'
import { WalletModel } from '@/entities/Wallet'

export function useCreateOrder() {
  const session = SessionModel.useSessionStore()
  const cart = CartModel.useCartStore()
  const { addOrder } = OrderModel.useOrderStore()
  const { updateCart } = CartModel.useCartUpdate()
  const { writeOff } = WalletModel.useWriteOff()

  interface IPayload {
    isPrepaid: boolean
  }

  async function createOrder(payload: IPayload) {
    if (payload.isPrepaid) {
      await writeOff(cart.discountedTotal)
    }

    const now = Date.now()

    const orderData = {
      userId: session.user.id,
      dateDelivery: now + MINUTE,
      statusId: OrderModel.EOrderStatus.delivery,
      isPrepaid: payload.isPrepaid,
      location: {
        address: '',
        deliveryType: OrderModel.EDeliveryType.point
      },

      products: cart.cartProducts,
      total: cart.total,
      discountedTotal: cart.discountedTotal,
      totalProducts: cart.totalProducts,
      totalQuantity: cart.totalQuantity
    }

    const response = await OrderApi.create(orderData)
    const id = response.data.name

    addOrder(id, {
      ...orderData,
      products: orderData.products.slice(),
      createdAt: now,
      updatedAt: now
    })

    await Promise.all([patchOrderIds(id), clearAndUpdateCart()])
  }

  async function patchOrderIds(id: FirebaseApi.TId) {
    if (!session.user.orderIds) {
      session.user.orderIds = []
    }

    session.user.orderIds.push(id)

    await UserApi.patchOrderIds(session.user.id, {
      orderIds: session.user.orderIds
    })
  }

  async function clearAndUpdateCart() {
    cart.clearCart()
    await updateCart()
  }

  return {
    createOrder
  }
}
