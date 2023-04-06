import { inject } from 'vue'
import { EAppProviders } from '@/app/providers/types'
import { throwInjectError } from '@/shared/lib/utils/errors'

export function useAppRoutes() {
  const appRoutes = inject(EAppProviders.AppRoutes)

  if (!appRoutes) {
    throwInjectError('GetRoute')
  }

  return appRoutes
}
