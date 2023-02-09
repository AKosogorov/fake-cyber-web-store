import { ref } from 'vue'
import type { Ref } from 'vue'

interface IUseIsLoading {
  isLoading: Ref<boolean>
  startLoading: Function
  finishLoading: Function
}

export function useIsLoading(): IUseIsLoading {
  const isLoading = ref(false)

  function startLoading(): void {
    isLoading.value = true
  }

  function finishLoading(): void {
    isLoading.value = false
  }

  return {
    isLoading,
    startLoading,
    finishLoading
  }
}
