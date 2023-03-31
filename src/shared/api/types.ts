export type TRequestParams = object

export interface IBaseQuery extends TRequestParams {
  limit?: number
  skip?: number
}

export type TExtraQuery<T extends object> = IBaseQuery & T

export interface IBaseGetResponse {
  total: number
  skip: number
  limit: number
}
