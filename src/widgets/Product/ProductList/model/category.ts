import type { IProductListModel } from './types'
import { ProductApi, ProductModel } from '@/entities/Product'
import type { IBaseQuery } from '@/shared/api/types'
import { useBaseListModel } from '@/shared/api'

interface IQuery extends IBaseQuery {
  category: string
}

export function useCategoryModel(): IProductListModel<IQuery> {
  const {
    list: products,
    loadList: loadProducts,
    isLoading
  } = useBaseListModel<
    ProductModel.IProduct,
    ProductModel.IProductGetResponse,
    IQuery
  >({
    apiHandler: fetchProducts,
    mapper: ProductModel.getMapped
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
    isLoading
  }
}
