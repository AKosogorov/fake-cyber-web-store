import { instance } from './instance'
import type { AxiosPromise } from 'axios'
import type { TId, IBaseItem } from './types'
import type { IStringIdx } from '@/shared/lib/types/object'
import { setCreatedAtTo, setUpdatedAtTo } from '@/shared/lib/utils/date'

type TResponse<T> = AxiosPromise<T & IBaseItem>

export function getById<T>(url: string, id: TId): TResponse<T> {
  return instance.get(`/${url}/${id}.json`)
}

export function create<T extends IStringIdx>(
  url: string,
  data: T
): TResponse<T> {
  setCreatedAtTo(data)
  setUpdatedAtTo(data)
  return instance.put(`/${url}.json`, data)
}

interface IUpdateData extends IStringIdx {
  createdAt: number
}

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
): TResponse<T> {
  setUpdatedAtTo(data)
  return instance.patch(`/${url}/${id}.json`, data)
}
