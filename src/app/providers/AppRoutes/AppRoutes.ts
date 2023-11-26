import { AppPages } from '../router'

interface IRoute<T extends object = {}> {
  name: string
  params: T
}

export class AppRoutes {
  private constructor() {}

  static getCatalogCategory(category: string) {
    return getRoute(AppPages.category, { category })
  }

  static getProduct(id: number) {
    return getRoute(AppPages.product, { id })
  }

  static getCart() {
    return getRoute(AppPages.cart, {})
  }

  static getLogin() {
    return getRoute(AppPages.login, {})
  }

  static getSignUp() {
    return getRoute(AppPages.signUp, {})
  }

  static getPersonalArea() {
    return getRoute(AppPages.personalArea, {})
  }

  static getFavorites() {
    return getRoute(AppPages.favorites, {})
  }
  static getOrders() {
    return getRoute(AppPages.orders, {})
  }
  static getDelivery() {
    return getRoute(AppPages.delivery, {})
  }
  static getArchive() {
    return getRoute(AppPages.archive, {})
  }
  static getProfile() {
    return getRoute(AppPages.profile, {})
  }
  static getWallet() {
    return getRoute(AppPages.wallet, {})
  }

  static getUIKit() {
    return getRoute(AppPages.UIKit, {})
  }

  static getMain() {
    return getRoute(AppPages.main, {})
  }

  static getNotFound() {
    return getRoute(AppPages.notFound, {})
  }
}

// TODO необязательный 2й параметр
function getRoute<T extends object = {}>(name: string, params: T): IRoute<T> {
  return {
    name,
    params
  }
}
