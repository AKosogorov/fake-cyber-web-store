import type {
  ICartFB,
  ICartProductBase,
  ICartDummyJsonResponse
} from '../model/types'
import {
  createApiErrorGetById,
  createApiErrorCreate,
  createApiErrorUpdate,
  FirebaseApi,
  DummyJsonApi
} from '@/shared/api'

export const api = {
  getById,
  calculate,
  create,
  update
} as const

const name = 'basket'

const errors = {
  getById: createApiErrorGetById(name),
  create: createApiErrorCreate(name),
  update: createApiErrorUpdate(name),
  calculate: `Failed calculating the sum of the cost of the ${name}`
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

async function update(id: FirebaseApi.TId, data: Omit<ICartFB, 'userId'>) {
  try {
    return await FirebaseApi.patch(CARTS_URL, id, data)
  } catch (e) {
    throw new Error(errors.update)
  }
}

async function calculate(products: ICartProductBase[]) {
  try {
    return await DummyJsonApi.update<ICartDummyJsonResponse>(CARTS_URL, 1, {
      merge: false,
      products
    })
  } catch (e) {
    throw new Error(errors.calculate)
  }
}
