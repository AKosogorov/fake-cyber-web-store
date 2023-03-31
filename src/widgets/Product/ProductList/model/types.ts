import type { ProductModel } from '@/entities/Product'
import type { IBaseQuery, TExtraQuery } from '@/shared/api'
import type { Ref, ComputedRef } from 'vue'

export interface IProductListModel<Q extends object = IBaseQuery> {
  products: ProductModel.IProduct[]
  loadProducts: (params?: TExtraQuery<Q>) => Promise<void>
  loadProductsWithQuery: (params?: TExtraQuery<Q>) => Promise<void>
  loadPage: (num: number) => Promise<void>
  isLoading: Ref<boolean>
  page: Ref<number>
  countPages: ComputedRef<number>
  setPage: (num: number) => void
  changeLimit: (num: number) => void
}
