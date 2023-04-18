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
  income: number
  operationTypeId: EOperationTypes
}

export enum EOperationTypes {
  refill = 1,
  writeOff
}
