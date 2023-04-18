import {
  createApiErrorGetById,
  createApiErrorCreate,
  createApiErrorUpdate,
  FirebaseApi
} from '@/shared/api'
import type { IUserFB, EGender } from '../model/types'
import { setCreatedAtTo } from '@/shared/lib/utils/date'

const USER_URL = 'users'

const name = 'user'

const errors = {
  getById: createApiErrorGetById(name),
  createById: createApiErrorCreate(name),
  patchUsername: createApiErrorUpdate('username'),
  patchGender: createApiErrorUpdate('gender'),
  patchCartId: createApiErrorUpdate('basket id'),
  patchWalletId: createApiErrorUpdate('wallet id'),
  patchFavoritesId: createApiErrorUpdate('favorite id')
} as const

export const api = {
  getById,
  createById,
  patchUsername,
  patchGender,
  patchCartId,
  patchWalletId,
  patchFavoritesId
} as const

async function getById(id: FirebaseApi.TId) {
  try {
    return await FirebaseApi.getById<IUserFB>(USER_URL, id)
  } catch (e) {
    throw new Error(errors.getById)
  }
}

type TCreateData = IUserFB & FirebaseApi.ICreatedAt

async function createById(id: FirebaseApi.TId, data: IUserFB) {
  try {
    setCreatedAtTo(data)

    return await FirebaseApi.update(USER_URL, id, data as TCreateData)
  } catch (e) {
    throw new Error(errors.createById)
  }
}

async function patchUsername(id: FirebaseApi.TId, data: { username: string }) {
  try {
    return await FirebaseApi.patch(USER_URL, id, data)
  } catch (e) {
    throw new Error(errors.patchUsername)
  }
}

async function patchGender(id: FirebaseApi.TId, data: { gender: EGender }) {
  try {
    return await FirebaseApi.patch(USER_URL, id, data)
  } catch (e) {
    throw new Error(errors.patchGender)
  }
}

async function patchCartId(
  id: FirebaseApi.TId,
  data: { cartId: FirebaseApi.TId }
) {
  try {
    return await FirebaseApi.patch(USER_URL, id, data)
  } catch (e) {
    throw new Error(errors.patchCartId)
  }
}

async function patchWalletId(
  id: FirebaseApi.TId,
  data: { walletId: FirebaseApi.TId }
) {
  try {
    return await FirebaseApi.patch(USER_URL, id, data)
  } catch (e) {
    throw new Error(errors.patchWalletId)
  }
}

async function patchFavoritesId(
  id: FirebaseApi.TId,
  data: { favoritesId: FirebaseApi.TId }
) {
  try {
    return await FirebaseApi.patch(USER_URL, id, data)
  } catch (e) {
    throw new Error(errors.patchFavoritesId)
  }
}
