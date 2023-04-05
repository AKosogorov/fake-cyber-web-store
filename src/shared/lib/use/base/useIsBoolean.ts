import { ref } from 'vue'
import type { Ref } from 'vue'

interface IUseIsBoolean {
  isBoolean: Ref<boolean>
  setIs: (bool: boolean) => void
  setTrue: () => void
  setFalse: () => void
  toggle: () => void
}

export function useIsBoolean(init: boolean = false): IUseIsBoolean {
  const isBoolean = ref(init)

  function setIs(bool: boolean) {
    isBoolean.value = bool
  }
  function setTrue() {
    isBoolean.value = true
  }
  function setFalse() {
    isBoolean.value = false
  }
  function toggle() {
    isBoolean.value = !isBoolean.value
  }

  return {
    isBoolean,
    setIs,
    setTrue,
    setFalse,
    toggle
  }
}
