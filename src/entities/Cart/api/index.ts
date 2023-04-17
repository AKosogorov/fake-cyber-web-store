import type { ICartProductBase, ICartResponse } from '../model/types'
import type { AxiosPromise } from 'axios'
import { update } from '@/shared/api/requests'

interface IApi {
  calculate: (products: ICartProductBase[]) => AxiosPromise<ICartResponse>
}

const URL = 'carts'

export const api: IApi = {
  calculate: products => {
    return update<ICartResponse>(URL, 1, {
      merge: false,
      products
    })
  }
}
