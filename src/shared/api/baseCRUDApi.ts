import type { AxiosPromise } from 'axios'
import type { TRequestParams } from './types'
import type { IBaseReadApi } from './baseReadApi'
import { createBaseReadApi } from './baseReadApi'
import { create, destroy, update } from './requests'

interface IBaseCRUDApi extends IBaseReadApi {
  create: (data: object, params: TRequestParams) => AxiosPromise
  update: (id: number, data: object, params: TRequestParams) => AxiosPromise
  destroy: (id: number) => AxiosPromise
}

export function createBaseCRUDApi(url: string): IBaseCRUDApi {
  return {
    ...createBaseReadApi(url),
    create: (data: object, params: TRequestParams): AxiosPromise =>
      create(url, data, params),
    update: (id: number, data: object, params: TRequestParams): AxiosPromise =>
      update(url, id, data, params),
    destroy: (id: number): AxiosPromise => destroy(url, id)
  }
}
