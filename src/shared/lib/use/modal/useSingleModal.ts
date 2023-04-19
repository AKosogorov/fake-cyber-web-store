import { useIsBoolean } from '@/shared/lib/use/base/useIsBoolean'

export function useSingleModal(init: boolean = false) {
  const {
    isBoolean: isModal,
    setTrue: openModal,
    setFalse: closeModal
  } = useIsBoolean(init)

  return {
    isModal,
    openModal,
    closeModal
  }
}
