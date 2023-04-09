import { ref } from 'vue'

type TInit = string | number

export function useRefValue(init: TInit) {
  const value = ref(init)

  function setValue(newValue: TInit) {
    value.value = newValue
  }

  return {
    value,
    setValue
  }
}
