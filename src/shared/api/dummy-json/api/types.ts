import type { IStringIdx } from '@/shared/lib/types/object'
export type TRequestParams = IStringIdx

export interface IBaseQuery extends TRequestParams {
  limit?: number
  skip?: number
}

export type TExtraQuery<T extends IStringIdx> = IBaseQuery & T

export interface IBaseGetResponse {
  total: number
  skip: number
  limit: number
}
