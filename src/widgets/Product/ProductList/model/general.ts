import type { IProductListModel } from './types'
import { ProductApi, ProductModel } from '@/entities/Product'
import { useBaseListModel } from '@/shared/api'

export function useGeneralModel(): IProductListModel {
  const {
    list: products,
    loadList: loadProducts,
    isLoading
  } = useBaseListModel<ProductModel.IProduct, ProductModel.IProductGetResponse>(
    {
      apiHandler: ProductApi.getAll,
      mapper: ProductModel.getMapped
    }
  )

  return {
    products,
    loadProducts,
    isLoading
  }
}
