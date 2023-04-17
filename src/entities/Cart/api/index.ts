import type { ICartFB, ICartProductBase, ICartResponse } from '../model/types'
import {
  createApiErrorGetById,
  createApiErrorCreate,
  FirebaseApi
} from '@/shared/api'
import { update } from '@/shared/api/requests'

export const api = {
  getById,
  calculate,
  create
}

const name = 'basket'

const errors = {
  getById: createApiErrorGetById(name),
  create: createApiErrorCreate(name),
  calculate: 'Failed calculating the sum of the cost of the basket'
} as const

const CARTS_URL = 'carts'

async function getById(id: FirebaseApi.TId) {
  try {
    return await FirebaseApi.getById<ICartFB>(CARTS_URL, id)
  } catch (e) {
    throw new Error(errors.getById)
  }
}

async function create(data: ICartFB) {
  try {
    return await FirebaseApi.create(CARTS_URL, data)
  } catch (e) {
    throw new Error(errors.create)
  }
}

async function calculate(products: ICartProductBase[]) {
  try {
    return await update<ICartResponse>(CARTS_URL, 1, {
      merge: false,
      products
    })
  } catch (e) {
    throw new Error(errors.calculate)
  }
}
