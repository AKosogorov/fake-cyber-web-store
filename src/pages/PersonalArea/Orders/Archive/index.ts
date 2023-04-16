import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'ArchivePage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: 'archive',
  component: () => import('./ArchivePage.vue')
}
