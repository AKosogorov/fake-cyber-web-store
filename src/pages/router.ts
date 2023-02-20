import { mainRoute } from '@/pages/Main'
import { UIRoute } from '@/pages/UI'
import { notFoundRoute } from '@/pages/NotFound'
import { routes as catalogRoutes } from '@/pages/Catalog'
import { route as cartRoute } from './Cart'
export const routes = [
  mainRoute,
  ...catalogRoutes,
  cartRoute,
  UIRoute,
  notFoundRoute
]
