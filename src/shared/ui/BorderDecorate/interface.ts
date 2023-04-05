export const enum EIconsName {
  inner = 'inner',
  outer = 'outer',
  top = 'top',
  bottom = 'bottom'
}

export interface IBorderDecorate {
  iconLeft: EIconsName
  iconRight: EIconsName
}
