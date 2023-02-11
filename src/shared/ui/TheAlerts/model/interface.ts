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

export interface IAlertsStore {
  alerts: IAlert[] | never
  isVisible: Ref<boolean>
  showError: Function
}
