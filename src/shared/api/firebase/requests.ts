import type { AxiosPromise } from 'axios'
import { instance } from './instance'

export function getById<T>(url: string, id: string): AxiosPromise<T> {
  return instance.get(`/${url}/${id}.json`)
}

export function update<T>(
  url: string,
  id: string,
  data: object
): AxiosPromise<T> {
  return instance.put(`/${url}/${id}.json`, data)
}
