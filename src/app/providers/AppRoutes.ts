import { AppPages } from '@/pages'

interface IRoute<T extends object = {}> {
  name: string
  params: T
}

export class AppRoutes {
  private constructor() {}

  static getCatalogCategory(category: string) {
    return getRoute(AppPages.catalog.category, { category })
  }

  static getProduct(id: number) {
    return getRoute(AppPages.catalog.product, { id })
  }
}

function getRoute<T extends object = {}>(name: string, params: T): IRoute<T> {
  return {
    name,
    params
  }
}
