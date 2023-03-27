export const notFoundRoute = {
  path: '/:pathMatch(.*)*',
  name: 'NotFoundPage',
  meta: {
    layout: 'empty'
  },
  component: () => import('./NotFoundPage.vue')
}
