import type { AxiosPromise } from 'axios'
import { apiInstance } from '@/shared/api/index'

export function getAll(url: string, params: object = {}): AxiosPromise {
  return apiInstance.get(`/${url}`, { params })
}

export function getById(
  url: string,
  id: number,
  params: object = {}
): AxiosPromise {
  return apiInstance.get(`/${url}/${id}`, { params })
}

export function create(
  url: string,
  data: object = {},
  params: object = {}
): AxiosPromise {
  return apiInstance.post(`/${url}`, data, { params })
}

export function update(
  url: string,
  id: number,
  data: object = {},
  params: object = {}
): AxiosPromise {
  return apiInstance.put(`/${url}/${id}`, data, { params })
}

export function destroy(url: string, id: number): AxiosPromise {
  return apiInstance.delete(`/${url}/${id}`)
}
