import type { AxiosPromise } from 'axios'
import type { IBaseGetResponse, TRequestParams } from '../types'
import { createBaseReadApi } from './baseReadApi'
import { create, destroy, update } from '../requests'
import type { IBaseCRUDApi, IBaseCRUDApiErrors } from './types'

export function createBaseCRUDApi<A extends IBaseGetResponse, S>(
  url: string,
  errors: IBaseCRUDApiErrors
): IBaseCRUDApi<A, S> {
  return {
    ...createBaseReadApi(url, errors),
    create: (data: object, params?: TRequestParams): AxiosPromise =>
      create(url, data, params),
    update: (id: number, data: object, params?: TRequestParams): AxiosPromise =>
      update(url, id, data, params),
    destroy: (id: number): AxiosPromise => destroy(url, id)
  }
}
