import type { TRequestParams } from './types'
import { instance } from './instance'

export function getAll<T>(url: string, params?: TRequestParams) {
  return instance.get<T>(`/${url}`, { params })
}

export function getById<T>(url: string, id: number, params?: TRequestParams) {
  return instance.get<T>(`/${url}/${id}`, { params })
}

export function update<T>(
  url: string,
  id: number,
  data: object,
  params?: TRequestParams
) {
  return instance.put<T>(`/${url}/${id}`, data, { params })
}
