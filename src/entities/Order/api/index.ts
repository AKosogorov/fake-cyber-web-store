import type { IOrderFB } from '../model'

import { createApiErrorCreate, FirebaseApi } from '@/shared/api'

export const api = {
  create
} as const

const name = 'order'

const errors = {
  create: createApiErrorCreate(name)
} as const

const ORDER_URL = 'orders'

async function create(data: IOrderFB) {
  try {
    return await FirebaseApi.create(ORDER_URL, data)
  } catch (e) {
    throw new Error(errors.create)
  }
}
