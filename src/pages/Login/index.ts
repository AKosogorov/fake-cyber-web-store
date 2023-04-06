export const routeName: string = 'LoginPage'

export const route = {
  name: routeName,
  path: '/login',
  component: () => import('./LoginPage.vue')
}
