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

export const Api = {
  ...createBaseReadApi<IProductAllResponse, IProductResponse>(URL),

  getCategories: async () => {
    try {
      return await getAll<TProductCategoriesResponse>(CATEGORIES_URL)
    } catch (e: any) {
      throw new Error('Не удалось получить список категорий')
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
        'Не удалось получить список товаров из категории ' + category
      )
    }
  }
}
