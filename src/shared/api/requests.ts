import type { AxiosPromise } from 'axios'
import type { TRequestParams } from './types'
import { apiInstance } from './instance'

export function getAll<T>(
  url: string,
  params?: TRequestParams
): AxiosPromise<T> {
  return apiInstance.get(`/${url}`, { params })
}

export function getById<T>(
  url: string,
  id: number,
  params?: TRequestParams
): AxiosPromise<T> {
  return apiInstance.get(`/${url}/${id}`, { params })
}

export function create(
  url: string,
  data: object,
  params?: TRequestParams
): AxiosPromise {
  return apiInstance.post(`/${url}`, data, { params })
}

export function update(
  url: string,
  id: number,
  data: object,
  params?: TRequestParams
): AxiosPromise {
  return apiInstance.put(`/${url}/${id}`, data, { params })
}

export function destroy(url: string, id: number): AxiosPromise {
  return apiInstance.delete(`/${url}/${id}`)
}
