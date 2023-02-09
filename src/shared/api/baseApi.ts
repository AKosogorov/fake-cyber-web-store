import type { AxiosPromise } from 'axios'

import { create, destroy, getAll, getById, update } from '@/shared/api/requests'

interface IBaseApi {
  getAll: Function
  getById: Function
  create: Function
  update: Function
  destroy: Function
}

export function createBaseApi(url: string): IBaseApi {
  return {
    getAll: (params: object = {}): AxiosPromise => getAll(url, params),
    getById: (id: number, params: object = {}): AxiosPromise =>
      getById(url, id, params),
    create: (data: object = {}, params: object = {}): AxiosPromise =>
      create(url, data, params),
    update: (
      id: number,
      data: object = {},
      params: object = {}
    ): AxiosPromise => update(url, id, data, params),
    destroy: (id: number): AxiosPromise => destroy(url, id)
  }
}
