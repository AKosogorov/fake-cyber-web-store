import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'WalletPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: 'wallet',
  component: () => import('./WalletPage.vue')
}
