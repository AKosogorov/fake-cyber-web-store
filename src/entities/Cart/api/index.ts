import type { ICartProductBase, ICartResponse } from '../model/interface'
import type { AxiosPromise } from 'axios'
import { destroy, getById, update } from '@/shared/api/requests'

interface IApi {
  get: () => AxiosPromise<ICartResponse>
  update: (products: ICartProductBase[]) => AxiosPromise<ICartResponse>
  destroy: () => AxiosPromise<ICartResponse>
}

const URL = 'carts'

export const api: IApi = {
  get: () => getById<ICartResponse>(URL, 1),

  update: products => {
    return update<ICartResponse>(URL, 1, {
      merge: false,
      products
    })
  },

  destroy: () => destroy<ICartResponse>(URL, 1)
}
