import { defineStore } from 'pinia'
import { computed } from 'vue'
import type { Ref } from 'vue'
import type { ComputedRef } from 'vue'
import type {
  ICartProduct,
  ICartResponse
} from '@/entities/Cart/model/interface'
import { api } from '../api'
import { useLocalStorage } from '@/shared/lib/browser'
import { useReactiveArray } from '@/shared/lib/use/base/useReactiveArray'
import { useRefNumber } from '@/shared/lib/use/base/useRefNumber'
import { findBy } from '@/shared/lib/utils/array'

interface ICartStore {
  total: Ref<number>
  totalQuantity: Ref<number>
  totalProducts: Ref<number>
  discountedTotal: Ref<number>
  cartProducts: ICartProduct[]
  cartHasProduct: (id: number) => boolean
  inCart: ComputedRef<number>
  addToCart: (id: number) => Promise<void>
  removeFromCart: (id: number) => Promise<void>
  incrementInCart: (id: number) => Promise<void>
  decrementInCart: (id: number) => Promise<void>
}

interface ILSCart {
  total: number
  discountedTotal: number
  totalProducts: number
  totalQuantity: number
}

const NAMESPACE = 'cart'

export const useCartStore = defineStore(NAMESPACE, (): ICartStore => {
  const { value: LSCart, setLSValue: setLSCart } = useLocalStorage<ILSCart>(
    NAMESPACE,
    {
      total: 0,
      totalQuantity: 0,
      totalProducts: 0,
      discountedTotal: 0
    }
  )

  const {
    value: total,
    increment: incrementTotal,
    decrement: decrementTotal
  } = useRefNumber(LSCart.total)

  const {
    value: totalQuantity,
    increment: incrementTotalQuantity,
    decrement: decrementTotalQuantity
  } = useRefNumber(LSCart.totalQuantity)

  const {
    value: totalProducts,
    increment: incrementTotalProducts,
    decrement: decrementTotalProducts
  } = useRefNumber(LSCart.totalProducts)

  const {
    value: discountedTotal,
    increment: incrementDiscountedTotal,
    decrement: decrementDiscountedTotal
  } = useRefNumber(LSCart.discountedTotal)

  const { value: LSCartProducts, setLSValue: setLSCartProducts } =
    useLocalStorage<ICartProduct[]>(`${NAMESPACE}-products`, [])

  const { array: cartProducts, add, remove } = useReactiveArray(LSCartProducts)

  const inCart = computed(() => cartProducts.length)

  function cartHasProduct(id: number) {
    return !!findInCart(id)
  }
  async function addToCart(id: number) {
    const product = { id, quantity: 1 }
    const { data } = await api.update([product])
    add(data.products[0])
  }

  async function removeFromCart(id: number) {
    remove(id)
  }
  async function incrementInCart(id: number) {}
  async function decrementInCart(id: number) {}

  function incrementCart(data: ICartResponse) {
    incrementTotal(data.total)
    incrementTotalQuantity(data.totalQuantity)
    incrementTotalProducts(data.totalProducts)
    incrementDiscountedTotal(data.discountedTotal)
  }

  function decrementCart(data: ICartResponse) {
    decrementTotal(data.total)
    decrementTotalQuantity(data.totalQuantity)
    decrementTotalProducts(data.totalProducts)
    decrementDiscountedTotal(data.discountedTotal)
  }

  function updateLS() {
    updateLSCart()
    updateLSCartProducts()
  }

  function updateLSCart() {
    setLSCart({
      total: total.value,
      totalQuantity: totalQuantity.value,
      totalProducts: totalProducts.value,
      discountedTotal: discountedTotal.value
    })
  }

  function updateLSCartProducts() {
    setLSCartProducts(cartProducts)
  }

  function findInCart(id: number) {
    return findBy(id, cartProducts)
  }

  return {
    total,
    totalQuantity,
    totalProducts,
    discountedTotal,
    cartProducts,
    inCart,
    cartHasProduct,
    addToCart,
    removeFromCart,
    incrementInCart,
    decrementInCart
  }
})
