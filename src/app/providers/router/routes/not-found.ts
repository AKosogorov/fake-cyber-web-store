import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'NotFoundPage'

export const route: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: routeName,
  meta: {
    layout: 'empty'
  },
  component: () => import('@/pages/not-found')
}
