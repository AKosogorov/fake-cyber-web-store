import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'CartPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/cart',
  component: () => import('@/pages/cart')
}
