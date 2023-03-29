import type { ProductModel } from '@/entities/Product'
import type { IBaseQuery } from '@/shared/api/types'
import type { Ref } from 'vue'

export interface IProductListModel<Q = IBaseQuery> {
  products: ProductModel.IProduct[]
  loadProducts: (params?: Q) => Promise<void>
  isLoading: Ref<boolean>
}
