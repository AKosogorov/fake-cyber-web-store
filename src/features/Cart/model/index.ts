import { CartApi, CartModel } from '@/entities/Cart'

export function useCartUpdate() {
  const store = CartModel.useCartStore()

  async function updateCart() {
    if (!store.cartId) {
      return store.updateLS()
    }

    await CartApi.update(store.cartId, {
      total: store.total,
      totalQuantity: store.totalQuantity,
      totalProducts: store.totalProducts,
      discountedTotal: store.discountedTotal,
      products: store.cartProducts
    })
  }

  return {
    updateCart
  }
}
