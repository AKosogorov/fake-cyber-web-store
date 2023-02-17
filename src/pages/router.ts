import { mainRoute } from '@/pages/Main'
import { UIRoute } from '@/pages/UI'
import { notFoundRoute } from '@/pages/NotFound'
import { routes as catalogRoutes } from '@/pages/Catalog'

export const routes = [mainRoute, ...catalogRoutes, UIRoute, notFoundRoute]
