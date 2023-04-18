import type { IWalletFB } from '../model/types'
import {
  createApiErrorGetById,
  createApiErrorCreate,
  createApiErrorUpdate,
  FirebaseApi
} from '@/shared/api'

export const api = {
  getById,
  create,
  update
} as const

const name = 'wallet'

const errors = {
  getById: createApiErrorGetById(name),
  create: createApiErrorCreate(name),
  update: createApiErrorUpdate(name)
} as const

const WALLET_URL = 'wallets'

async function getById(id: FirebaseApi.TId) {
  try {
    return await FirebaseApi.getById<IWalletFB>(WALLET_URL, id)
  } catch (e) {
    throw new Error(errors.getById)
  }
}

async function create(data: IWalletFB) {
  try {
    return await FirebaseApi.create(WALLET_URL, data)
  } catch (e) {
    throw new Error(errors.create)
  }
}

async function update(id: FirebaseApi.TId, data: Omit<IWalletFB, 'userId'>) {
  try {
    return await FirebaseApi.patch(WALLET_URL, id, data)
  } catch (e) {
    throw new Error(errors.update)
  }
}
