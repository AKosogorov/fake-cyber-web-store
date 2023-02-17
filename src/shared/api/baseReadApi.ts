import type { AxiosPromise } from 'axios'
import type { TRequestParams } from './types'

import { create, destroy, getAll, getById, update } from './requests'

export interface IBaseReadApi<All, One> {
  getAll: (params?: TRequestParams) => AxiosPromise<All>
  getById: (id: number, params?: TRequestParams) => AxiosPromise<One>
}

export function createBaseReadApi<All, One>(
  url: string
): IBaseReadApi<All, One> {
  return {
    getAll: (params?: TRequestParams): AxiosPromise<All> =>
      getAll<All>(url, params),
    getById: (id: number, params?: TRequestParams): AxiosPromise<One> =>
      getById<One>(url, id, params)
  }
}
