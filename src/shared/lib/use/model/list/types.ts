import type { IBaseGetResponse, IBaseQuery } from '@/shared/api'
import type { AxiosPromise } from 'axios'
import type { Ref } from 'vue'

export interface IUseBaseListSettings<T, R extends IBaseGetResponse, Q> {
  apiHandler: (params?: Q) => AxiosPromise<R>
  mapper: (responseData: R) => T[]
  initialList?: T[]
}

export interface IUseBaseListModel<T, Q> {
  list: T[]
  loadList: (params?: Q) => Promise<void>
  isLoading: Ref<boolean>
  refresh: (data: T[]) => void
  total: Ref<number>
  setTotal: (num: number) => void
}
