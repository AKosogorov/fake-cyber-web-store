import { SessionModel } from '@/entities/Session'
import { WalletModel } from '@/entities/Wallet'
import { FavoritesModel } from '@/entities/Favorites'
import { CartModel } from '@/entities/Cart'

export function useLogout() {
  const { logout: resetSession } = SessionModel.useSessionStore()
  const { reset: resetCart } = CartModel.useCartStore()
  const { reset: resetFavorites } = FavoritesModel.useFavoritesStore()
  const { reset: resetWallet } = WalletModel.useWalletStore()

  function logout() {
    resetSession()
    resetCart()
    resetFavorites()
    resetWallet()
  }

  return {
    logout
  }
}
