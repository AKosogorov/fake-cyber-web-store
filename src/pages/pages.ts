import { pages as catalog } from './Catalog'
import { routeName as cart } from './Cart'
import {
  routeName as personalArea,
  pages as personalAreaPages
} from './PersonalArea'
import { routeName as login } from './Login'
import { routeName as signUp } from './SignUp'

export const pages = {
  catalog,
  cart,
  personalArea,
  ...personalAreaPages,
  login,
  signUp
}
