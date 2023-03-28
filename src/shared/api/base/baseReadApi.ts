import type { AxiosPromise } from 'axios'
import type { IBaseQuery, TRequestParams } from '../types'
import { getAll, getById } from '../requests'
import type { IBaseReadApi, IBaseReadApiErrors } from './types'

export function createBaseReadApi<All, One>(
  url: string,
  errors: IBaseReadApiErrors
): IBaseReadApi<All, One> {
  return {
    getAll: async (params?: IBaseQuery): AxiosPromise<All> => {
      try {
        return await getAll<All>(url, params)
      } catch (e: any) {
        throw new Error(errors.getAll)
      }
    },
    getById: async (id: number, params?: TRequestParams): AxiosPromise<One> => {
      try {
        return await getById<One>(url, id, params)
      } catch (e: any) {
        throw new Error(errors.getById)
      }
    }
  }
}
