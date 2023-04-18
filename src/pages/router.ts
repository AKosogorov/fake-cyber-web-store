import type { RouteRecordRaw } from 'vue-router'

import { mainRoute } from './Main'
import { UIRoute } from './UI'
import { notFoundRoute } from './NotFound'
import { routes as catalogRoutes } from './Catalog'
import { route as cartRoute } from './Cart'
import { route as personalAreaRoute } from './PersonalArea'
import { route as loginRoute } from './Login'
import { route as signUpRoute } from './SignUp'

export const routes: RouteRecordRaw[] = [
  mainRoute,
  ...catalogRoutes,
  personalAreaRoute,
  cartRoute,
  loginRoute,
  signUpRoute,
  UIRoute,
  notFoundRoute
]
