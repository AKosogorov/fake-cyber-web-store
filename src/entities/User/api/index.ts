import {
  createApiErrorGetById,
  createApiErrorCreate,
  FirebaseApi
} from '@/shared/api'
import type { UserModel } from '@/entities/User'
import { setCreatedAtTo } from '@/shared/lib/utils/date'

const USER_URL = 'users'

const name = 'user'

const errors = {
  getById: createApiErrorGetById(name),
  createById: createApiErrorCreate(name)
} as const

export const api = {
  getById,
  createById
}

async function getById(id: FirebaseApi.TId) {
  try {
    return await FirebaseApi.getById<UserModel.IUserFB>(USER_URL, id)
  } catch (e) {
    throw new Error(errors.getById)
  }
}

type TCreateData = UserModel.IUserFB & { createdAt: number }

async function createById(id: FirebaseApi.TId, data: UserModel.IUserFB) {
  try {
    setCreatedAtTo(data)

    return await FirebaseApi.update(USER_URL, id, data as TCreateData)
  } catch (e) {
    throw new Error(errors.createById)
  }
}
