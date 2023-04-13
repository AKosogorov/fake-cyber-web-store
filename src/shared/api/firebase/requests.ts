import type { AxiosPromise } from 'axios'
import { instance } from './instance'
import type { TId } from './types'

export function getById<T>(url: string, id: TId): AxiosPromise<T> {
  return instance.get(`/${url}/${id}.json`)
}

export function update<T>(url: string, id: TId, data: object): AxiosPromise<T> {
  return instance.put(`/${url}/${id}.json`, data)
}
