import type { RouteRecordRaw } from 'vue-router'

import { route as cartRoute } from './cart'
import { route as mainRoute } from './main'
import { route as UIKitRoute } from './ui-kit'
import { route as notFoundRoute } from './not-found'
import { route as categoryRoute } from './category'
import { route as productRoute } from './product'
import { route as personalAreaRoute } from './personal-area'
import { route as loginRoute } from './login'
import { route as signUpRoute } from './sign-up'
export const routes: readonly RouteRecordRaw[] = [
  mainRoute,
  cartRoute,
  categoryRoute,
  loginRoute,
  personalAreaRoute,
  productRoute,
  signUpRoute,
  UIKitRoute,
  notFoundRoute
] as const
