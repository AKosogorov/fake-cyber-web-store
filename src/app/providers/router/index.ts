import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

export { pages as AppPages } from './pages'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
