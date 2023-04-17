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
  patchGender: createApiErrorUpdate('gender')
} as const

export const api = {
  getById,
  createById,
  patchUsername,
  patchGender
}

async function getById(id: FirebaseApi.TId) {
  try {
    return await FirebaseApi.getById<IUserFB>(USER_URL, id)
  } catch (e) {
    throw new Error(errors.getById)
  }
}

type TCreateData = IUserFB & { createdAt: number }

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
