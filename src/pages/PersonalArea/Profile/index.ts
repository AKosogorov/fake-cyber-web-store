import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'ProfilePage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: 'profile',
  component: () => import('./ProfilePage.vue')
}
