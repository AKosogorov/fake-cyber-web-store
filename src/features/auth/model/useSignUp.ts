import type { FirebaseApi } from '@/shared/api'
import { WalletApi, WalletModel } from '@/entities/Wallet'
import { FavoritesApi, FavoritesModel } from '@/entities/Favorites'
import { UserApi } from '@/entities/User'
// import { CartApi, CartModel } from '@/entities/Cart'

export function useSignUp() {
  const walletHandler = getWalletHandler()
  const favoritesHandler = getFavoritesHandler()

  async function createEntities(userId: FirebaseApi.TId) {
    await Promise.all([walletHandler(userId), favoritesHandler(userId)])
  }

  return {
    createEntities
  }
}

function getWalletHandler() {
  const { setWalletId } = WalletModel.useWalletStore()

  return createAndSetWallet

  async function createAndSetWallet(userId: FirebaseApi.TId) {
    const { data } = await WalletApi.create({
      balance: 0,
      userId
    })
    await UserApi.patchWalletId(userId, { walletId: data.name })

    setWalletId(data.name)
  }
}

function getFavoritesHandler() {
  const { productIds, reset } = FavoritesModel.useStoreLS()
  const { setFavoritesId, refreshProductIds } = FavoritesModel.useStoreApi()

  return createAndSetFavorites

  async function createAndSetFavorites(userId: FirebaseApi.TId) {
    const { data } = await FavoritesApi.create({
      userId,
      productIds
    })
    await UserApi.patchFavoritesId(userId, { favoritesId: data.name })

    setFavoritesId(data.name)
    refreshProductIds(productIds)
    reset()
  }
}
