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
  updateProductQuantity: (id: number, quantity: number) => Promise<void>
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
    const { data } = await api.update([...cartProducts, product])

    setCart(data)

    const item = data.products.pop()
    if (!item) return updateLS()

    add(item)
    updateLS()
  }

  async function removeFromCart(id: number) {
    remove(id)
    await updateCart()
  }

  async function updateCart() {
    const { data } = await api.update(cartProducts)

    setCart(data)
    updateLS()
  }

  async function updateProductQuantity(id: number, quantity: number) {
    const product = findInCart(id)
    if (!product) return

    product.quantity = quantity
    await updateCart()
  }

  function setCart(data: ICartResponse) {
    total.value = data.total
    totalQuantity.value = data.totalQuantity
    totalProducts.value = data.totalProducts
    discountedTotal.value = data.discountedTotal
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
    updateProductQuantity
  }
})
