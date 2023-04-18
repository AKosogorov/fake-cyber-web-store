import type { FirebaseApi } from '@/shared/api'
import { WalletApi, WalletModel } from '@/entities/Wallet'
import { FavoritesApi, FavoritesModel } from '@/entities/Favorites'
import { CartApi, CartModel } from '@/entities/Cart'
import { UserApi } from '@/entities/User'

export function useSignUp() {
  const walletHandler = getWalletHandler()
  const favoritesHandler = getFavoritesHandler()
  const cartHandler = getCartHandler()

  async function createEntities(userId: FirebaseApi.TId) {
    await Promise.all([
      walletHandler(userId),
      favoritesHandler(userId),
      cartHandler(userId)
    ])
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
  const store = FavoritesModel.useFavoritesStore()

  return createAndSetFavorites

  async function createAndSetFavorites(userId: FirebaseApi.TId) {
    const { data } = await FavoritesApi.create({
      userId,
      productIds: store.productIds
    })
    await UserApi.patchFavoritesId(userId, { favoritesId: data.name })

    store.setFavoritesId(data.name)
    store.resetLS()
  }
}

function getCartHandler() {
  const store = CartModel.useCartStore()

  return createAndSetCart

  async function createAndSetCart(userId: FirebaseApi.TId) {
    const { data } = await CartApi.create({
      userId,
      products: store.cartProducts,
      total: store.total,
      discountedTotal: store.discountedTotal,
      totalProducts: store.totalProducts,
      totalQuantity: store.totalQuantity
    })

    await UserApi.patchCartId(userId, { cartId: data.name })

    store.setCartId(data.name)
    store.resetLS()
  }
}
