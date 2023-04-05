import type { IBaseReadApiErrors } from '@/shared/api/base/types'

export function createBaseReadApiErrors(name: string): IBaseReadApiErrors {
  return {
    getAll: `Failed to get ${name} list`,
    getById: `Failed to load ${name}`
  }
}
