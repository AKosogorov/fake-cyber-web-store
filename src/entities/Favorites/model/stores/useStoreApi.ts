import type { FirebaseApi } from '@/shared/api'
import type { IStore } from './types'
import { defineStore } from 'pinia'
import { api } from '../../api'
import { useReactiveArray } from '@/shared/lib/use/base/useReactiveArray'
import { useRefString } from '@/shared/lib/use/base/useRefString'
import { findSimpleBy } from '@/shared/lib/utils/array'

interface IStoreApi extends IStore {
  setFavoritesId: (id: FirebaseApi.TId) => void
  loadFavorites: () => Promise<void>
  refreshProductIds: (data: number[]) => void
}

const namespace = 'favorites'

export const useStoreApi = defineStore(namespace, (): IStoreApi => {
  const { value: favoritesId, setValue: setFavoritesId } = useRefString('')

  const {
    array: productIds,
    add,
    remove: removeId,
    refresh: refreshProductIds
  } = useReactiveArray<number>()

  function remove(id: number) {
    removeId(id, '')
  }

  function checkInFavoritesBy(id: number) {
    return !!findSimpleBy(id, productIds)
  }

  async function loadFavorites() {
    const { data } = await api.getById(favoritesId.value)

    refreshProductIds(data.productIds)
  }

  function reset() {
    setFavoritesId('')
    refreshProductIds([])
  }

  return {
    setFavoritesId,
    productIds,
    add,
    remove,
    refreshProductIds,
    checkInFavoritesBy,
    loadFavorites,
    reset
  }
})
