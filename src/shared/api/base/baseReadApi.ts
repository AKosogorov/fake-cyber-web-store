import type { AxiosPromise } from 'axios'
import type { IBaseGetResponse, IBaseQuery, TRequestParams } from '../types'
import { getAll, getById } from '../requests'
import type { IBaseReadApi, IBaseReadApiErrors } from './types'

export function createBaseReadApi<A extends IBaseGetResponse, S>(
  url: string,
  errors: IBaseReadApiErrors
): IBaseReadApi<A, S> {
  return {
    getAll: async (params?: IBaseQuery): AxiosPromise => {
      try {
        return await getAll(url, params)
      } catch (e: any) {
        throw new Error(errors.getAll)
      }
    },
    getById: async (id: number, params?: TRequestParams): AxiosPromise => {
      try {
        return await getById(url, id, params)
      } catch (e: any) {
        throw new Error(errors.getById)
      }
    }
  }
}
