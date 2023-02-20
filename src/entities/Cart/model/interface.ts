import type { Ref } from 'vue'

export interface ICart {}

export interface ICartStore {
  inCart: Ref<number>
  incrementInCart: () => void
}
