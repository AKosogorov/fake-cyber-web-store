import type { FirebaseApi } from '@/shared/api'
import { SessionModel } from '@/entities/Session'
import { UserApi } from '@/entities/User'
import { WalletModel } from '@/entities/Wallet'
import { FavoritesModel } from '@/entities/Favorites'
import { CartModel } from '@/entities/Cart'

export function useAuth() {
  const session = SessionModel.useSessionStore()

  const { setCartId, loadCartById } = CartModel.useCartStore()

  const { setFavoritesId, loadFavoritesById } =
    FavoritesModel.useFavoritesStore()

  const { setWalletId, loadWalletById } = WalletModel.useWalletStore()

  async function loadSessionUser(id: FirebaseApi.TId) {
    const { data } = await UserApi.getById(id)
    session.setUser({ ...data, id })
  }

  async function loadStoresData() {
    await Promise.all([loadCart(), loadFavorites(), loadWallet()])
  }

  async function loadCart() {
    if (!session.user.cartId) return

    setCartId(session.user.cartId)
    await loadCartById()
  }

  async function loadFavorites() {
    if (!session.user.favoritesId) return

    setFavoritesId(session.user.favoritesId)
    await loadFavoritesById()
  }

  async function loadWallet() {
    if (!session.user.walletId) return

    setWalletId(session.user.walletId)
    await loadWalletById()
  }

  return {
    loadSessionUser,
    loadStoresData
  }
}
