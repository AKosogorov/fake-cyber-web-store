import type { RouteRecordRaw } from 'vue-router'
import { route as favoritesRoute } from './Favorites'
import { route as ordersRoute } from './Orders'
import { route as walletRoute } from './Wallet'

export const routeName: string = 'PersonalAreaPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/personal-area',
  component: () => import('./PersonalAreaPage.vue'),
  children: [favoritesRoute, ordersRoute, walletRoute]
}
