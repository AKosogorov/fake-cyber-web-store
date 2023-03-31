import type { InjectionKey } from 'vue'
import type { AppRoutes } from './AppRoutes'

export const EAppProviders = {
  AppRoutes: Symbol() as InjectionKey<typeof AppRoutes>
}
