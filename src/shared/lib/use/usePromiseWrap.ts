import { useAlertsStore } from '@/shared/ui/TheAlerts'
import { useIsLoading } from '@/shared/lib/use/useIsLoading'

export function usePromiseWrap(handler: () => Promise<void>) {
  const { isLoading, startLoading, finishLoading } = useIsLoading()
  const { showError } = useAlertsStore()

  async function wrappedPromise() {
    try {
      startLoading()
      await handler()
    } catch (e: any) {
      showError(e.message)
    } finally {
      finishLoading()
    }
  }

  return {
    isLoading,
    wrappedPromise
  }
}
