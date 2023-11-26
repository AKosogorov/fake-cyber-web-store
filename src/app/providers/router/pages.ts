import { routeName as cart } from './routes/cart'
import { routeName as login } from './routes/login'
import { routeName as signUp } from './routes/sign-up'
import { routeName as category } from './routes/category'
import { routeName as product } from './routes/product'
import { routeName as personalArea } from './routes/personal-area'
import { routeName as profile } from './routes/personal-area/profile'
import { routeName as favorites } from './routes/personal-area/favorites'
import { routeName as orders } from './routes/personal-area/orders'
import { routeName as delivery } from './routes/personal-area/orders/delivery'
import { routeName as archive } from './routes/personal-area/orders/archive'
import { routeName as wallet } from './routes/personal-area/wallet'
import { routeName as main } from './routes/main'
import { routeName as UIKit } from './routes/ui-kit'
import { routeName as notFound } from './routes/not-found'

export const pages = {
  archive,
  cart,
  category,
  delivery,
  favorites,
  login,
  main,
  notFound,
  orders,
  personalArea,
  product,
  profile,
  signUp,
  UIKit,
  wallet
} as const
