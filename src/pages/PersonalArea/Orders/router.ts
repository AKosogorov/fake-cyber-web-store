import type { RouteRecordRaw } from 'vue-router'

import { route as deliveryRoute } from './Delivery'
import { route as archiveRoute } from './Archive'

export const routeName: string = 'OrdersPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: 'orders',
  redirect: deliveryRoute,
  component: () => import('./OrdersPage.vue'),
  children: [deliveryRoute, archiveRoute]
}
