import type { IProductListModel } from './types'
import { ProductApi, ProductModel } from '@/entities/Product'
import type { DummyJsonApi } from '@/shared/api'
import { DummyJsonModel } from '@/shared/api'

interface IQuery extends DummyJsonApi.IBaseQuery {
  category: string
}

export function useCategoryModel(): IProductListModel<IQuery> {
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
  } = DummyJsonModel.useQueryListModel<ProductModel.IProduct, ProductModel.IProductGetResponse, IQuery>({
    apiHandler: fetchProducts,
    mapper: ProductModel.getMapped,
    initQuery: DummyJsonModel.QUERY_DEFAULT
  })

  async function fetchProducts(params?: IQuery) {
    if (!params?.category) {
      throw new Error('Unable to determine category to load list')
    }

    return ProductApi.getProductsOf(params.category, params)
  }

  return {
    products,
    loadProducts,
    loadProductsWithQuery,
    loadPage,
    setPage,
    page,
    countPages,
    isLoading,
    changeLimit
  }
}
