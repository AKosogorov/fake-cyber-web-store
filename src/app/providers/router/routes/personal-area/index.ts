import type { RouteRecordRaw } from 'vue-router'
import { route as favoritesRoute } from './favorites'
import { route as ordersRoute } from './orders'
import { route as profileRoute } from './profile'
import { route as walletRoute } from './wallet'
import { SessionModel } from '@/entities/Session'

export const routeName: string = 'PersonalAreaPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/personal-area',
  component: () => import('@/pages/personal-area'),

  children: [favoritesRoute, ordersRoute, profileRoute, walletRoute],

  beforeEnter: (to, from, next) => {
    const session = SessionModel.useSessionStore()

    if (session.isAuth) {
      next()
    } else {
      next('/')
    }
  }
}
