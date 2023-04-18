import { CartApi, CartModel } from '@/entities/Cart'
import { useCartUpdate } from '../../model'

export function useRemoveFromCart() {
  const store = CartModel.useCartStore()
  const { updateCart } = useCartUpdate()

  async function removeFromCart(id: number) {
    store.remove(id)
    const { data } = await CartApi.calculate(store.cartProducts)

    store.setCart(data)
    await updateCart()
  }

  return {
    removeFromCart
  }
}
