import type { IFavoritesFB } from '../model/types'
import {
  createApiErrorGetById,
  createApiErrorCreate,
  createApiErrorUpdate,
  FirebaseApi
} from '@/shared/api'

export const api = {
  getById,
  create,
  patchProducts
} as const

const name = 'favorites'

const errors = {
  getById: createApiErrorGetById(name),
  create: createApiErrorCreate(name),
  patchProducts: createApiErrorUpdate(`${name} products`)
} as const

const FAVORITES_URL = 'favorites'

async function getById(id: FirebaseApi.TId) {
  try {
    return await FirebaseApi.getById<IFavoritesFB>(FAVORITES_URL, id)
  } catch (e) {
    throw new Error(errors.getById)
  }
}

async function create(data: IFavoritesFB) {
  try {
    return await FirebaseApi.create(FAVORITES_URL, data)
  } catch (e) {
    throw new Error(errors.create)
  }
}

async function patchProducts(
  id: FirebaseApi.TId,
  data: { productIds: number[] | never[] }
) {
  try {
    return await FirebaseApi.patch(FAVORITES_URL, id, data)
  } catch (e) {
    throw new Error(errors.patchProducts)
  }
}
