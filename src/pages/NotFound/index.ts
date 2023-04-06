import type { RouteRecordRaw } from 'vue-router'

export const notFoundRoute: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'NotFoundPage',
  meta: {
    layout: 'empty'
  },
  component: () => import('./NotFoundPage.vue')
}
