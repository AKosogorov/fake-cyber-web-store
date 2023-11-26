import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'DeliveryPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: 'delivery',
  component: () => import('@/pages/personal-area-orders-delivery')
}
