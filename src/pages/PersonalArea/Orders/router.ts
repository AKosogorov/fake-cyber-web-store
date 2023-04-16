import type { RouteRecordRaw } from 'vue-router'

import { route as deliveryRoute, routeName as delivery } from './Delivery'
import { route as archiveRoute } from './Archive'

export const routeName: string = 'OrdersPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: 'orders',
  redirect: delivery,
  component: () => import('./OrdersPage.vue'),
  children: [deliveryRoute, archiveRoute]
}
