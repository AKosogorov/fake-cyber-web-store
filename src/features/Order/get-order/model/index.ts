import type { FirebaseApi } from '@/shared/api'

import { OrderApi, OrderModel } from '@/entities/Order'

export function useGetOrder() {
  const orderStore = OrderModel.useOrderStore()

  async function getOrder(id: FirebaseApi.TId, statusId: OrderModel.EOrderStatus = OrderModel.EOrderStatus.purchased) {
    // const statusId = OrderModel.EOrderStatus.purchased

    await OrderApi.patchStatus(id, { statusId })

    const order = orderStore.orders[id]

    order.statusId = statusId
  }

  return {
    getOrder
  }
}
