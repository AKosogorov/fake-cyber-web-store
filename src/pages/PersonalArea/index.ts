import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'PersonalAreaPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/personal-area',
  component: () => import('./PersonalAreaPage.vue')
}
