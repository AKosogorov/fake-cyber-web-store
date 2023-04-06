import type { RouteRecordRaw } from 'vue-router'

import { route as ProductPage } from './product'
import { route as CategoryPage } from './category'

export const routes: RouteRecordRaw[] = [CategoryPage, ProductPage]
