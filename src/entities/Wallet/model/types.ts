import type { FirebaseApi } from '@/shared/api'

export interface IWallet extends IWalletFB {
  id: FirebaseApi.TId
}

export interface IWalletFB {
  balance: number
  userId: FirebaseApi.TId
  changelog?: IChangelogItem[]
}

export interface IChangelogItem {
  balance: number
  date: number
  sum: number
  operationTypeId: EOperationTypes
}

export enum EOperationTypes {
  refill = 1,
  payment = 2,
  refund = 3,
  withdrawal = 4
}
