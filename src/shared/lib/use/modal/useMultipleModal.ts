import { useRefValue } from '@/shared/lib/use/base/useRefValue'

export function useMultipleModal() {
  const { value: isModal, setValue } = useRefValue('')

  function openModal(name: string) {
    setValue(name)
  }

  function closeModal() {
    setValue('')
  }

  return {
    isModal,
    openModal,
    closeModal
  }
}
