import type { IBaseCRUDApiErrors } from './types'
import { createBaseReadApiErrors } from './baseReadApiErrors'

export function createBaseCRUDApiErrors(name: string): IBaseCRUDApiErrors {
  return {
    ...createBaseReadApiErrors(name),
    create: `Failed to create ${name}`,
    update: `Failed to update ${name}`,
    destroy: `Failed to delete ${name}`
  }
}
