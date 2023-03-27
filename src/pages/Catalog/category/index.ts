export const routeName: string = 'CategoryPage'

export const route = {
  name: routeName,
  path: '/category/:category',
  component: () => import('./CategoryPage.vue')
}
