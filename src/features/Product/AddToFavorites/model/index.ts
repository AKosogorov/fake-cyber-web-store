import { FavoritesModel, FavoritesApi } from '@/entities/Favorites'

export function useAddToFavorites() {
  const store = FavoritesModel.useFavoritesStore()

  async function add(id: number) {
    store.add(id)

    await patch()
  }

  async function remove(id: number) {
    store.remove(id)

    await patch()
  }

  async function patch() {
    if (!store.favoritesId) return

    await FavoritesApi.patchProducts(store.favoritesId, {
      productIds: store.productIds
    })
  }

  return {
    add,
    remove
  }
}
