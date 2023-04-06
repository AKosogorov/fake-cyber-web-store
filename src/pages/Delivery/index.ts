export const routeName: string = 'DeliveryPage'

export const route = {
  name: routeName,
  path: '/delivery',
  component: () => import('./DeliveryPage.vue')
}
