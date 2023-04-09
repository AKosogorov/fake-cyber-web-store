import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'CartPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/cart',
  component: () => import('./CartPage.vue')
}
