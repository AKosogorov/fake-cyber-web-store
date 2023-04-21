import type { IStringIdx } from '@/shared/lib/types/object'
import type { IOrderFB } from './types'
import { EOrderStatus } from './types'
import type { FirebaseApi } from '@/shared/api'

import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { api } from '../api'
import { useIsLoading } from '@/shared/lib/use/useIsLoading'
import { useAlertsStore } from '@/shared/ui/TheAlerts'

const namespace = 'order'

export const useOrderStore = defineStore(namespace, () => {
  type TOrderFBFull = IOrderFB & FirebaseApi.IBaseItem

  const orders = reactive<IStringIdx<TOrderFBFull>>({})

  const ordersFiltered = computed(() => {
    const delivery = []
    const purchased = []

    for (const id in orders) {
      const order = { ...orders[id], id }

      switch (order.statusId) {
        case EOrderStatus.purchased:
          purchased.push(order)
          break
        case EOrderStatus.ready:
          delivery.unshift(order)
          break
        default:
          delivery.push(order)
      }
    }

    return {
      delivery,
      purchased
    }
  })

  const orderToReadyTimeouts: IStringIdx<number | undefined> = {}

  const { isLoading, startLoading, finishLoading } = useIsLoading()
  const { showError } = useAlertsStore()

  async function loadAllByUser(id: FirebaseApi.TId) {
    try {
      startLoading()
      const { data } = await api.getAllByUser(id)

      const now = Date.now()
      for (const id in data) {
        const order = data[id]

        orders[id] = order

        if (order.statusId === EOrderStatus.delivery) {
          const timeout = order.dateDelivery - now

          if (timeout <= 0) {
            patchReady(id)
          } else {
            setPatchReadyTimeout(id, timeout)
          }
        }
      }
    } catch (e: any) {
      showError(e.message)
    } finally {
      finishLoading()
    }
  }

  function addOrder(id: FirebaseApi.TId, order: TOrderFBFull) {
    orders[id] = order

    const timeout = order.dateDelivery - order.createdAt
    setPatchReadyTimeout(id, timeout)
  }

  function setPatchReadyTimeout(id: FirebaseApi.TId, timeout: number) {
    orderToReadyTimeouts[id] = setTimeout(() => patchReady(id), timeout)
  }

  function clearTimeoutAll() {
    for (const id in orderToReadyTimeouts) {
      const timeoutId = orderToReadyTimeouts[id]
      if (!timeoutId) continue

      clearTimeout(timeoutId)
    }
  }
  function clearTimeoutBy(id: FirebaseApi.TId) {
    clearTimeout(orderToReadyTimeouts[id])
  }

  async function patchReady(id: FirebaseApi.TId) {
    try {
      const statusId = EOrderStatus.ready
      await api.patchStatus(id, { statusId })

      orders[id].statusId = statusId
    } catch (e: any) {
      showError(e.message)
    }
  }

  return { orders, ordersFiltered, isLoading, loadAllByUser, addOrder }
})
