import type { IBaseCRUDApiErrors } from './types'
import { createBaseReadApiErrors } from './baseReadApiErrors'

export function createBaseCRUDApiErrors(name: string): IBaseCRUDApiErrors {
  return {
    ...createBaseReadApiErrors(name),
    create: createApiErrorCreate(name),
    update: createApiErrorUpdate(name),
    destroy: createApiErrorDelete(name)
  }
}

export function createApiErrorCreate(name: string) {
  return `Failed to create ${name}`
}

export function createApiErrorUpdate(name: string) {
  return `Failed to update ${name}`
}

export function createApiErrorDelete(name: string) {
  return `Failed to delete ${name}`
}
