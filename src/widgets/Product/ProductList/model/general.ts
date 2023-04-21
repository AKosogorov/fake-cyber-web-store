import type { IProductListModel } from './types'
import { ProductApi, ProductModel } from '@/entities/Product'
import { DummyJsonModel } from '@/shared/api'

export function useGeneralModel(): IProductListModel {
  const {
    list: products,
    loadList: loadProducts,
    loadListWithQuery: loadProductsWithQuery,
    loadPage,
    setPage,
    page,
    countPages,
    isLoading,
    changeLimit
  } = DummyJsonModel.useQueryListModel<ProductModel.IProduct, ProductModel.IProductGetResponse>({
    apiHandler: ProductApi.getAll,
    mapper: ProductModel.getMapped,
    initQuery: DummyJsonModel.QUERY_DEFAULT
  })

  return {
    products,
    loadProducts,
    loadProductsWithQuery,
    loadPage,
    isLoading,
    setPage,
    page,
    countPages,
    changeLimit
  }
}
