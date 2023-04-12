import {
  createApiErrorGetById,
  createApiErrorCreate,
  FirebaseApi
} from '@/shared/api'
import type { IUserFB } from '@/entities/User/model'

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

async function getById(id: string) {
  try {
    return await FirebaseApi.getById<IUserFB>(USER_URL, id)
  } catch (e) {
    throw new Error(errors.getById)
  }
}

async function createById(id: string, data: IUserFB) {
  try {
    return await FirebaseApi.update<IUserFB>(USER_URL, id, data)
  } catch (e) {
    throw new Error(errors.createById)
  }
}
