import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'SignUpPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/sign-up',
  component: () => import('./SignUpPage.vue')
}
