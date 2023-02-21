import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ICartStore } from '@/entities/Cart/model/interface'
import { useLocalStorage } from '@/shared/lib/browser'

export const NAMESPACE = 'cart'

export const useCartStore = defineStore(NAMESPACE, (): ICartStore => {
  const { value, setValue: setLocalStorageInCart } = useLocalStorage(
    `${NAMESPACE}-product-count`,
    0
  )

  const inCart = ref(value)

  function incrementInCart() {
    inCart.value++
    setLocalStorageInCart(inCart.value)
  }

  return {
    inCart,
    incrementInCart
  }
})
