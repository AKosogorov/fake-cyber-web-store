export const routeName: string = 'SignUpPage'

export const route = {
  name: routeName,
  path: '/sign-up',
  component: () => import('./SignUpPage.vue')
}
