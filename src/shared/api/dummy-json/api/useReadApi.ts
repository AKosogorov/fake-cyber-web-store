import type { AxiosPromise } from 'axios'
import type { IBaseGetResponse, IBaseQuery, TRequestParams } from './types'
import type { IBaseReadApiErrors } from '@/shared/api'
import { getAll, getById } from './requests'

interface IReadApi<A extends IBaseGetResponse, S> {
  getAll: (params?: IBaseQuery) => AxiosPromise<A>
  getById: (id: number, params?: TRequestParams) => AxiosPromise<S>
}

export function useReadApi<A extends IBaseGetResponse, S>(
  url: string,
  errors: IBaseReadApiErrors
): IReadApi<A, S> {
  return {
    getAll: async (params?: IBaseQuery) => {
      try {
        return await getAll(url, params)
      } catch (e: any) {
        throw new Error(errors.getAll)
      }
    },
    getById: async (id: number, params?: TRequestParams) => {
      try {
        return await getById(url, id, params)
      } catch (e: any) {
        throw new Error(errors.getById)
      }
    }
  }
}
