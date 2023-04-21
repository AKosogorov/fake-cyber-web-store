import type { IBaseGetResponse, IBaseQuery } from '../../api'
import type { AxiosPromise } from 'axios'
import type { Ref } from 'vue'

export interface IUseBaseListSettings<T, R extends IBaseGetResponse, Q extends IBaseQuery> {
  apiHandler: (params?: Q) => AxiosPromise<R>
  mapper: (responseData: R) => T[]
  initialList?: T[]
}

export interface IUseBaseListModel<T, Q extends IBaseQuery> {
  list: T[]
  loadList: (params?: Q) => Promise<void>
  isLoading: Ref<boolean>
  refresh: (data: T[]) => void
  total: Ref<number>
  setTotal: (num: number) => void
}
