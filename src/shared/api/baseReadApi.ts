import type { AxiosPromise } from 'axios'
import type { TRequestParams } from './types'

import { create, destroy, getAll, getById, update } from './requests'

export interface IBaseReadApi {
  getAll: (params?: TRequestParams) => AxiosPromise
  getById: (id: number, params?: TRequestParams) => AxiosPromise
}

export function createBaseReadApi(url: string): IBaseReadApi {
  return {
    getAll: (params?: TRequestParams): AxiosPromise => getAll(url, params),
    getById: (id: number, params?: TRequestParams): AxiosPromise =>
      getById(url, id, params)
  }
}
