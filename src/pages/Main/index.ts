import type { RouteRecordRaw } from 'vue-router'

export const mainRoute: RouteRecordRaw = {
  name: 'MainPage',
  path: '/',
  component: () => import('./MainPage.vue')
}
