import type { Ref } from 'vue'
import { ref } from 'vue'

interface IUseRefNumber {
  value: Ref<number>
  setValue: (num: number) => void
  increment: (num?: number) => void
  decrement: (num?: number) => void
}

export function useRefNumber(init: number): IUseRefNumber {
  const value = ref(init)

  function increment(num: number = 1) {
    value.value += num
  }
  function decrement(num: number = 1) {
    value.value -= num
  }

  function setValue(num: number) {
    value.value = num
  }

  return {
    value,
    increment,
    decrement,
    setValue
  }
}
