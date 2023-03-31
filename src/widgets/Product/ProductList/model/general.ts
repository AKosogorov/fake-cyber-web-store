import type { IProductListModel } from './types'
import { ProductApi, ProductModel } from '@/entities/Product'
import { QUERY_DEFAULT, useQueryListModel } from '@/shared/api'

export function useGeneralModel(): IProductListModel {
  const {
    list: products,
    loadList: loadProducts,
    loadListWithQuery: loadProductsWithQuery,
    loadPage,
    setPage,
    page,
    countPages,
    isLoading
  } = useQueryListModel<
    ProductModel.IProduct,
    ProductModel.IProductGetResponse
  >({
    apiHandler: ProductApi.getAll,
    mapper: ProductModel.getMapped,
    initQuery: QUERY_DEFAULT
  })

  return {
    products,
    loadProducts,
    loadProductsWithQuery,
    loadPage,
    isLoading,
    setPage,
    page,
    countPages
  }
}
