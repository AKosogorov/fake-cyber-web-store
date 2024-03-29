import { CartApi, CartModel } from '@/entities/Cart'

export function useAddToCart() {
  const store = CartModel.useCartStore()
  const { updateCart } = CartModel.useCartUpdate()

  async function addToCart(id: number) {
    const product = { id, quantity: 1 }
    const { data } = await CartApi.calculate([...store.cartProducts, product])

    store.setCart(data)

    const item = data.products.pop()
    if (!item) return await updateCart()

    store.add(item)
    await updateCart()
  }

  return {
    addToCart
  }
}
