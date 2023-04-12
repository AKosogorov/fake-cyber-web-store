import type { IBaseReadApiErrors } from '@/shared/api/base/types'

export function createBaseReadApiErrors(name: string): IBaseReadApiErrors {
  return {
    getAll: createApiErrorGetAll(name),
    getById: createApiErrorGetById(name)
  }
}

export function createApiErrorGetAll(name: string) {
  return `Failed to get ${name} list`
}
export function createApiErrorGetById(name: string) {
  return `Failed to load ${name}`
}
