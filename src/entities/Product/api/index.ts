import { createBaseReadApi } from '@/shared/api'
import type {
  IProductAllResponse,
  IProductResponse,
  TProductCategoriesResponse
} from '../model'
import type { TRequestParams } from '@/shared/api/types'
import { getAll } from '@/shared/api/requests'

const URL = 'products'
const CATEGORIES_URL = `${URL}/categories`

// TODO createBaseErrors
const errors = {
  getAll: 'Failed to get product list',
  getById: 'Failed to load product'
}

export const Api = {
  ...createBaseReadApi<IProductAllResponse, IProductResponse>(URL, errors),

  getCategories: async () => {
    try {
      return await getAll<TProductCategoriesResponse>(CATEGORIES_URL)
    } catch (e: any) {
      throw new Error('Failed to get list of categories')
    }
  },

  getProductsOf: async (
    category: string,
    params: TRequestParams = { limit: 100 }
  ) => {
    try {
      return await getAll<IProductAllResponse>(
        `${URL}/category/${category}`,
        params
      )
    } catch (e: any) {
      throw new Error(
        `Unable to get list of products from category "${category}"`
      )
    }
  }
}
