import { inject } from 'vue'
import { EAppProviders } from '@/app/providers/types'
import { throwInjectError } from '@/shared/lib/utils/errors'

export function useAppPages() {
  const appPages = inject(EAppProviders.AppPages)

  if (!appPages) {
    throwInjectError('AppPages')
  }

  return appPages
}
