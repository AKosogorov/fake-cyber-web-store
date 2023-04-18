import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Ref } from 'vue'
import type { ComputedRef } from 'vue'
import type { ICartProduct, ICartTotal } from './types'
import { api } from '../api'
import { useLocalStorage } from '@/shared/lib/browser'
import { useReactiveArray } from '@/shared/lib/use/base/useReactiveArray'
import { findBy } from '@/shared/lib/utils/array'
import { useRefString } from '@/shared/lib/use/base/useRefString'

interface ICartStore {
  cartId: Ref<string>
  setCartId: (val: string) => void
  total: Ref<number>
  totalQuantity: Ref<number>
  totalProducts: Ref<number>
  discountedTotal: Ref<number>
  cartProducts: ICartProduct[]
  loadCartById: () => Promise<void>
  cartHasProduct: (id: number) => boolean
  inCart: ComputedRef<number>
  addToCart: (id: number) => Promise<void>
  removeFromCart: (id: number) => Promise<void>
  updateProductQuantity: (id: number, quantity: number) => Promise<void>
  reset: () => void
  resetLS: () => void
}

const NAMESPACE = 'cart'

export const useCartStore = defineStore(NAMESPACE, (): ICartStore => {
  const { value: cartId, setValue: setCartId } = useRefString('')

  const { value: LSCart, setLSValue: setLSCart } = useLocalStorage<ICartTotal>(
    NAMESPACE,
    {
      total: 0,
      totalQuantity: 0,
      totalProducts: 0,
      discountedTotal: 0
    }
  )

  const total = ref(LSCart.total)
  const totalQuantity = ref(LSCart.totalQuantity)
  const totalProducts = ref(LSCart.totalProducts)
  const discountedTotal = ref(LSCart.discountedTotal)

  const { value: LSCartProducts, setLSValue: setLSCartProducts } =
    useLocalStorage<ICartProduct[]>(`${NAMESPACE}-products`, [])

  const {
    array: cartProducts,
    add,
    remove,
    refresh
  } = useReactiveArray(LSCartProducts)

  const inCart = computed(() => cartProducts.length)

  function cartHasProduct(id: number) {
    return Boolean(findInCart(id))
  }

  async function loadCartById() {
    const { data } = await api.getById(cartId.value)

    setCart(data)
    refresh(data.products)
  }

  async function addToCart(id: number) {
    const product = { id, quantity: 1 }
    const { data } = await api.calculate([...cartProducts, product])

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
    const { data } = await api.calculate(cartProducts)

    setCart(data)
    updateLS()
    return data
  }

  async function updateProductQuantity(id: number, quantity: number) {
    const product = findInCart(id)
    if (!product) return

    product.quantity = quantity

    const { products } = await updateCart()

    const productUpdated = findBy(id, products)
    if (!productUpdated) return

    product.total = productUpdated.total
    product.discountedPrice = productUpdated.discountedPrice

    updateLSCartProducts()
  }

  function setCart(data: ICartTotal) {
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

  function reset() {
    setCartId('')
    setCart({
      total: 0,
      totalProducts: 0,
      discountedTotal: 0,
      totalQuantity: 0
    })
    refresh([])
  }

  function resetLS() {
    setLSCart({
      total: 0,
      totalQuantity: 0,
      totalProducts: 0,
      discountedTotal: 0
    })
    setLSCartProducts([])
  }

  return {
    cartId,
    setCartId,
    total,
    totalQuantity,
    totalProducts,
    discountedTotal,
    cartProducts,
    inCart,
    loadCartById,
    cartHasProduct,
    addToCart,
    removeFromCart,
    updateProductQuantity,
    reset,
    resetLS
  }
})
