import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'UIKitPage'
export const route: RouteRecordRaw = {
  name: routeName,
  path: '/ui-kit',
  component: () => import('@/pages/ui-kit')
}
