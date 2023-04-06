import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'LoginPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/login',
  component: () => import('./LoginPage.vue')
}
