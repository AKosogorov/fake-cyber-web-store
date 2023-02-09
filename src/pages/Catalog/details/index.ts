export const routeName: string = 'ProductDetailsPage'

export const route = {
  name: routeName,
  path: '/product/:id',
  component: () => import('./ProductDetailsPage.vue')
}
