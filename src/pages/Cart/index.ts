export const routeName: string = 'CartPage'

export const route = {
  name: routeName,
  path: '/cart',
  component: () => import('./CartPage.vue')
}
