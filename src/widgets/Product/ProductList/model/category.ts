import type { IProductListModel } from './types'
import { ProductApi, ProductModel } from '@/entities/Product'
import { useRoute } from 'vue-router'

export const categoryModel: IProductListModel = {
  async fetchProducts(params = { limit: 10 }) {
    const route = useRoute()
    const category = route.params.category

    if (typeof category !== 'string') {
      throw new Error(
        'Не удалось определить категорию для получения списка товаров'
      )
    }

    const { data } = await ProductApi.getProductsOf(category, params)

    return ProductModel.getMapped(data.products)
  }
}
