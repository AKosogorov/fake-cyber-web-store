import type { IOrderFB, EOrderStatus } from '../model'
import {
  createApiErrorCreate,
  createApiErrorGetAll,
  createApiErrorUpdate,
  FirebaseApi
} from '@/shared/api'

export const api = {
  getAllByUser,
  create,
  patchStatus,
  patchIsPrepaid
} as const

const name = 'order'

const errors = {
  getAllByUser: createApiErrorGetAll(name),
  create: createApiErrorCreate(name),
  patchStatus: createApiErrorUpdate('status'),
  patchIsPrepaid: 'Payment error'
} as const

const ORDER_URL = 'orders'

async function create(data: IOrderFB) {
  try {
    return await FirebaseApi.create(ORDER_URL, data)
  } catch (e) {
    throw new Error(errors.create)
  }
}

async function getAllByUser(id: FirebaseApi.TId) {
  try {
    return await FirebaseApi.getAll<IOrderFB>(ORDER_URL, {
      orderBy: JSON.stringify('userId'),
      equalTo: JSON.stringify(id)
    })
  } catch (e) {
    throw new Error(errors.getAllByUser)
  }
}

async function patchStatus(
  id: FirebaseApi.TId,
  data: { statusId: EOrderStatus }
) {
  try {
    return await FirebaseApi.patch(ORDER_URL, id, data)
  } catch (e) {
    throw new Error(errors.patchStatus)
  }
}

async function patchIsPrepaid(id: FirebaseApi.TId) {
  try {
    return await FirebaseApi.patch(ORDER_URL, id, { isPrepaid: true })
  } catch (e) {
    throw new Error(errors.patchIsPrepaid)
  }
}
