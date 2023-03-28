import type { IProductListModel } from './types'
import { ProductApi, ProductModel } from '@/entities/Product'
import { useRoute } from 'vue-router'

const route = useRoute()

export const categoryModel: IProductListModel = {
  async fetchProducts(params = { limit: 10 }) {
    const category = route.params.category
    console.log(category)

    if (typeof category !== 'string') {
      throw new Error(
        'Не удалось определить категорию для получения списка товаров'
      )
    }

    const { data } = await ProductApi.getProductsOf(category, params)

    return ProductModel.getMapped(data.products)
  }
}
