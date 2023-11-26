import type { RouteRecordRaw } from 'vue-router'

import { route as deliveryRoute } from './delivery'
import { route as archiveRoute } from './archive'

export const routeName: string = 'OrdersPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: 'orders',
  redirect: deliveryRoute,
  component: () => import('@/pages/personal-area-orders-archive'),
  children: [deliveryRoute, archiveRoute]
}
