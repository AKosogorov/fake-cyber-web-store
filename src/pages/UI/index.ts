import type { RouteRecordRaw } from 'vue-router'

export const UIRoute: RouteRecordRaw = {
  name: 'UIPage',
  path: '/UI',
  component: () => import('./UIPage.vue')
}
