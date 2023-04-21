import { DummyJsonApi, createBaseReadApiErrors } from '@/shared/api'
import type { IProductGetResponse, IProductResponse, TProductCategoriesResponse } from '../model'

const URL = 'products'
const CATEGORIES_URL = `${URL}/categories`

const errors = createBaseReadApiErrors('product')

export const Api = {
  ...DummyJsonApi.useReadApi<IProductGetResponse, IProductResponse>(URL, errors),

  getCategories: async () => {
    try {
      return await DummyJsonApi.getAll<TProductCategoriesResponse>(CATEGORIES_URL)
    } catch (e: any) {
      throw new Error('Failed to get list of categories')
    }
  },

  getProductsOf: async (category: string, params: DummyJsonApi.TRequestParams = { limit: 100 }) => {
    try {
      return await DummyJsonApi.getAll<IProductGetResponse>(`${URL}/category/${category}`, params)
    } catch (e: any) {
      throw new Error(`Unable to get list of products from category "${category}"`)
    }
  }
}
