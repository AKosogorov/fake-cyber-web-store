import { useCartStore } from './stores'
import { api } from '../api'

export function useCartUpdate() {
  const store = useCartStore()

  async function updateCart() {
    if (!store.cartId) {
      return store.updateLS()
    }

    await api.update(store.cartId, {
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
