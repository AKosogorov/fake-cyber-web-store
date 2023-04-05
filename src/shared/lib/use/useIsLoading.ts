import type { Ref } from 'vue'
import { useIsBoolean } from '@/shared/lib/use/base/useIsBoolean'

interface IUseIsLoading {
  isLoading: Ref<boolean>
  startLoading: () => void
  finishLoading: () => void
}

export function useIsLoading(): IUseIsLoading {
  const {
    isBoolean: isLoading,
    setTrue: startLoading,
    setFalse: finishLoading
  } = useIsBoolean()

  return {
    isLoading,
    startLoading,
    finishLoading
  }
}
