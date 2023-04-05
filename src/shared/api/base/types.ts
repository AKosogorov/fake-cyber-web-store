import type { IBaseGetResponse, IBaseQuery, TRequestParams } from '../types'
import type { AxiosPromise } from 'axios'

export interface IBaseReadApi<A extends IBaseGetResponse, S> {
  getAll: (params?: IBaseQuery) => AxiosPromise<A>
  getById: (id: number, params?: TRequestParams) => AxiosPromise<S>
}

export interface IBaseCRUDApi<A extends IBaseGetResponse, S>
  extends IBaseReadApi<A, S> {
  create: (data: object, params: TRequestParams) => AxiosPromise
  update: (id: number, data: object, params: TRequestParams) => AxiosPromise
  destroy: (id: number) => AxiosPromise
}

type TErrorMessage = string

export interface IBaseReadApiErrors {
  getAll: TErrorMessage
  getById: TErrorMessage
}

export interface IBaseCRUDApiErrors extends IBaseReadApiErrors {
  create: TErrorMessage
  update: TErrorMessage
  destroy: TErrorMessage
}
