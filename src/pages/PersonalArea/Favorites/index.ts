import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'FavoritesPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: 'favorites',
  component: () => import('./FavoritesPage.vue')
}
