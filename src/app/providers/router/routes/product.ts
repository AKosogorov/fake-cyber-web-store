import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'ProductPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/product/:id',
  component: () => import('@/pages/product')
}
