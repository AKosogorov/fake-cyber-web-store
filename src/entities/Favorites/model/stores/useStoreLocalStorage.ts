import type { IStore } from './types'
import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { useLocalStorage } from '@/shared/lib/browser'
import {
  findSimpleBy,
  refreshArray,
  spliceSimpleBy
} from '@/shared/lib/utils/array'

const namespace = 'favorites-LS'

export const useStoreLS = defineStore(namespace, (): IStore => {
  const { value, setLSValue } = useLocalStorage<number[]>(namespace, [])

  const productIds = reactive(value)

  function add(id: number) {
    productIds.push(id)
    syncLS()
  }

  function remove(id: number) {
    spliceSimpleBy(id, productIds)
    syncLS()
  }

  function checkInFavoritesBy(id: number) {
    return !!findSimpleBy(id, productIds)
  }

  function reset() {
    refreshArray(productIds, [])
    syncLS()
  }

  function syncLS() {
    setLSValue(productIds)
  }

  return {
    productIds,
    add,
    remove,
    checkInFavoritesBy,
    reset
  }
})
