import type { IStringIdx } from '@/shared/lib/types/object'
import type { IOrderFB } from './types'
import type { FirebaseApi } from '@/shared/api'

import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { api } from '../api'
import { useIsLoading } from '@/shared/lib/use/useIsLoading'
import { useAlertsStore } from '@/shared/ui/TheAlerts'

const namespace = 'order'

export const useOrderStore = defineStore(namespace, () => {
  const orders = reactive<IStringIdx<IOrderFB & FirebaseApi.IBaseItem>>({})

  const { isLoading, startLoading, finishLoading } = useIsLoading()
  const { showError } = useAlertsStore()

  async function loadAllByUser(id: FirebaseApi.TId) {
    try {
      startLoading()
      const { data } = await api.getAllByUser(id)

      for (const key in data) {
        orders[key] = data[key]
      }
    } catch (e: any) {
      showError(e.message)
    } finally {
      finishLoading()
    }
  }

  return { orders, isLoading, loadAllByUser }
})
