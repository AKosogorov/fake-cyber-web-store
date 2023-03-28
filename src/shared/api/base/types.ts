import type { TRequestParams } from '@/shared/api/types'
import type { AxiosPromise } from 'axios'

export interface IBaseReadApi<All, One> {
  getAll: (params?: TRequestParams) => AxiosPromise<All>
  getById: (id: number, params?: TRequestParams) => AxiosPromise<One>
}

export interface IBaseCRUDApi<All, One> extends IBaseReadApi<All, One> {
  create: (data: object, params: TRequestParams) => AxiosPromise
  update: (id: number, data: object, params: TRequestParams) => AxiosPromise
  destroy: (id: number) => AxiosPromise
}

export interface IBaseReadApiErrors {
  getAll: string
  getById: string
}

export interface IBaseCRUDApiErrors extends IBaseReadApiErrors {
  create: string
  update: string
  destroy: string
}
