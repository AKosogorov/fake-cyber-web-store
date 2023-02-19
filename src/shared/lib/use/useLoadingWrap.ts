import { useIsLoading } from '@/shared/lib/use/useIsLoading'
import type { Ref } from 'vue'

interface IUseLoadingWrap {
  isLoading: Ref<boolean>
  runWithLoading: (handler: () => void) => Promise<void>
}

export default function useLoadingWrap(): IUseLoadingWrap {
  const { startLoading, finishLoading, isLoading } = useIsLoading()

  async function runWithLoading(handler: () => void): Promise<void> {
    try {
      startLoading()
      await handler()
    } finally {
      finishLoading()
    }
  }

  return {
    isLoading,
    runWithLoading
  }
}
