import type { Ref } from 'vue'
import { useIsBoolean } from '@/shared/lib/use/base/useIsBoolean'

interface IUseIsLike {
  isLike: Ref<boolean>
  toggleIsLike: () => void
}

export function useIsLike(init: boolean = false): IUseIsLike {
  const { isBoolean: isLike, toggle: toggleIsLike } = useIsBoolean(init)

  return {
    isLike,
    toggleIsLike
  }
}
