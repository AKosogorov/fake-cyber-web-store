export type TId = string

export interface IBaseItem extends ICreatedAt, IUpdatedAt {}

export interface ICreatedAt {
  createdAt: number
}
export interface IUpdatedAt {
  updatedAt: number
}
