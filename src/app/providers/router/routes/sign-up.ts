import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'SignUpPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/sign-up',
  component: () => import('@/pages/sign-up')
}
