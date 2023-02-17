export const routeName: string = 'ProductPage'

export const route = {
  name: routeName,
  path: '/product/:id',
  component: () => import('./ProductPage.vue')
}
