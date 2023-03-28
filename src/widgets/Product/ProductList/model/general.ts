import type { IProductListModel } from './types'
import { ProductApi, ProductModel } from '@/entities/Product'

export const generalModel: IProductListModel = {
  async fetchProducts(params = { limit: 10 }) {
    const { data } = await ProductApi.getAll(params)

    return ProductModel.getMapped(data.products)
  }
}
