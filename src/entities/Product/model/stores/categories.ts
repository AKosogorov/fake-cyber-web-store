import { defineStore } from 'pinia'
import { reactive } from 'vue'
import type { TProductCategory } from '../../model'
import { Api } from '../../api'
import { refreshArray } from '@/shared/lib/utils/array'

interface IProductCategoriesStore {
  categories: TProductCategory[]
  getCategories: () => Promise<void>
}

const NAMESPACE = 'product-categories'

export const useProductCategoriesStore = defineStore(NAMESPACE, (): IProductCategoriesStore => {
  const categories = reactive<TProductCategory[]>([])

  async function getCategories() {
    const { data } = await Api.getCategories()
    refreshArray(categories, data)
  }

  return {
    categories,
    getCategories
  }
})
