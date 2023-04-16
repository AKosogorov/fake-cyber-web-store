import { routeName as favorites } from './Favorites'
import { routeName as orders, pages as orderPages } from './Orders'
import { routeName as wallet } from './Wallet'

export const pages = {
  favorites,
  orders,
  ...orderPages,
  wallet
}
