import type { FirebaseApi } from '@/shared/api'
import { defineStore } from 'pinia'
import { api } from '../api'
import { useReactiveArray } from '@/shared/lib/use/base/useReactiveArray'
import { useRefString } from '@/shared/lib/use/base/useRefString'
import { findSimpleBy } from '@/shared/lib/utils/array'
import { useLocalStorage } from '@/shared/lib/browser'

interface IStore {
  productIds: number[]
  refreshProductIds: (data: number[]) => void
  add: (id: number) => void
  remove: (id: number) => void
  checkInFavoritesBy: (id: number) => boolean
  setFavoritesId: (id: FirebaseApi.TId) => void
  loadFavoritesById: () => Promise<void>
  reset: () => void
  resetLS: () => void
}

const namespace = 'favorites'

export const useFavoritesStore = defineStore(namespace, (): IStore => {
  const { value: favoritesId, setValue: setFavoritesId } = useRefString('')

  const { value, setLSValue } = useLocalStorage<number[]>(namespace, [])

  const {
    array: productIds,
    add: addId,
    remove: removeId,
    refresh: refreshProductIds
  } = useReactiveArray<number>(value)

  function add(id: number) {
    addId(id)

    if (!favoritesId.value) {
      syncLS()
    }
  }

  function remove(id: number) {
    removeId(id, '')

    if (!favoritesId.value) {
      syncLS()
    }
  }

  function checkInFavoritesBy(id: number) {
    return !!findSimpleBy(id, productIds)
  }

  async function loadFavoritesById() {
    const { data } = await api.getById(favoritesId.value)

    refreshProductIds(data.productIds)
  }

  function syncLS() {
    setLSValue(productIds)
  }

  function reset() {
    setFavoritesId('')
    refreshProductIds([])
  }

  function resetLS() {
    setLSValue([])
  }

  return {
    setFavoritesId,
    productIds,
    add,
    remove,
    refreshProductIds,
    checkInFavoritesBy,
    loadFavoritesById,
    reset,
    resetLS
  }
})
