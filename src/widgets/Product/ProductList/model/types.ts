import type { ProductModel } from '@/entities/Product'
import type { IBaseQuery } from '@/shared/api/types'

export interface IProductListModel {
  fetchProducts: (params?: IBaseQuery) => Promise<ProductModel.IProduct[]>
}
