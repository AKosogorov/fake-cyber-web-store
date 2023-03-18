import type { Ref } from 'vue'
import { ref } from 'vue'

interface IUseRefNumber {
  value: Ref<number>
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

  return {
    value,
    increment,
    decrement
  }
}
