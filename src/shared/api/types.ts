export type TRequestParams = object

export interface IBaseQuery extends TRequestParams {
  limit?: number
  skip?: number
}
