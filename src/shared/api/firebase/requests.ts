import { instance } from './instance'
import type { AxiosPromise } from 'axios'
import type { TId, IBaseItem, ICreatedAt, IUpdatedAt } from './types'
import type { IStringIdx } from '@/shared/lib/types/object'
import { setCreatedAtTo, setUpdatedAtTo } from '@/shared/lib/utils/date'

type TResponse<T> = AxiosPromise<T & IBaseItem>
type TResponseGetAll<T> = AxiosPromise<IStringIdx<T & IBaseItem>>

export function getAll<T>(
  url: string,
  params?: IStringIdx
): TResponseGetAll<T> {
  return instance.get(`/${url}.json`, { params })
}

export function getById<T>(url: string, id: TId): TResponse<T> {
  return instance.get(`/${url}/${id}.json`)
}

interface IPostResponseData {
  name: string
}

export function create<T extends IStringIdx>(url: string, data: T) {
  setCreatedAtTo(data)
  setUpdatedAtTo(data)

  return instance.post<IPostResponseData>(`/${url}.json`, data)
}

interface IUpdateData extends IStringIdx, ICreatedAt {}

export function update<T extends IUpdateData>(
  url: string,
  id: TId,
  data: T
): TResponse<T> {
  setUpdatedAtTo(data)
  return instance.put(`/${url}/${id}.json`, data)
}

export function patch<T extends IStringIdx>(
  url: string,
  id: TId,
  data: T
): AxiosPromise<T & IUpdatedAt> {
  setUpdatedAtTo(data)
  return instance.patch(`/${url}/${id}.json`, data)
}
