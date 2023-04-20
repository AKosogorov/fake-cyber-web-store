import type { FirebaseApi } from '@/shared/api'

import { OrderApi, OrderModel } from '@/entities/Order'
import { WalletModel } from '@/entities/Wallet'

export function usePayOrder() {
  const orderStore = OrderModel.useOrderStore()
  const { writeOff } = WalletModel.useWriteOff()

  interface IPayload {
    id: FirebaseApi.TId
    sum: number
  }

  async function payOrder({ id, sum }: IPayload) {
    await writeOff(sum)

    const { data } = await OrderApi.patchIsPrepaid(id)

    const order = orderStore.orders[id]

    order.isPrepaid = data.isPrepaid
  }

  return {
    payOrder
  }
}
