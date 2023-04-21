import { CartApi, CartModel } from '@/entities/Cart'
import { findBy } from '@/shared/lib/utils/array'

export function useChangeProductQuantity() {
  const store = CartModel.useCartStore()
  const { updateCart } = CartModel.useCartUpdate()

  async function updateProductQuantity(id: number, quantity: number) {
    const product = store.findInCart(id)
    if (!product) return

    product.quantity = quantity

    const { data } = await CartApi.calculate(store.cartProducts)
    store.setCart(data)

    const productUpdated = findBy(id, data.products)
    if (!productUpdated) return

    product.total = productUpdated.total
    product.discountedPrice = productUpdated.discountedPrice

    await updateCart()
  }

  return {
    updateProductQuantity
  }
}
