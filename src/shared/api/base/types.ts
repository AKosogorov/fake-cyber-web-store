type TErrorMessage = string

export interface IBaseReadApiErrors {
  getAll: TErrorMessage
  getById: TErrorMessage
}

export interface IBaseCRUDApiErrors extends IBaseReadApiErrors {
  create: TErrorMessage
  update: TErrorMessage
  destroy: TErrorMessage
}
