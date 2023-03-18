import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { useLocalStorage } from '@/shared/lib/browser'
import { findSimpleBy, spliceSimpleBy } from '@/shared/lib/utils/array'

interface IFavoritesStore {
  favorites: number[]
  checkInFavoritesBy: (id: number) => boolean
  add: (id: number) => void
  remove: (id: number) => void
}

const NAMESPACE_FAVORITES = 'product-favorites'

export const useFavoritesStore = defineStore(
  NAMESPACE_FAVORITES,
  (): IFavoritesStore => {
    const { value, setLSValue } = useLocalStorage<number[]>(
      NAMESPACE_FAVORITES,
      []
    )

    const favorites = reactive(value)

    function add(id: number) {
      favorites.push(id)
      setLSValue(favorites)
    }

    function remove(id: number) {
      spliceSimpleBy(id, favorites)
      setLSValue(favorites)
    }

    function checkInFavoritesBy(id: number) {
      return !!findSimpleBy(id, favorites)
    }

    return {
      favorites,
      add,
      remove,
      checkInFavoritesBy
    }
  }
)
