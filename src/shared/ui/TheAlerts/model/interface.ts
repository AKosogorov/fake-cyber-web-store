import type { Ref } from 'vue'

export enum EAlertStatus {
  warning = 'warning',
  error = 'error',
  success = 'success',
  info = 'info'
}

export interface IAlert {
  id: number
  status: EAlertStatus
  message: string
}

type TShow = (message: string) => void

export interface IAlertsStore {
  alerts: IAlert[] | never
  isVisible: Ref<boolean>
  showError: TShow
  showSuccess: TShow
  showWarning: TShow
  showInfo: TShow
  destroy: (id: number) => void
}
