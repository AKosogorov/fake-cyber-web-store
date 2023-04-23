import { defineStore } from 'pinia'
import { computed, reactive, ref, watch } from 'vue'
import type { IAlert, IAlertsStore } from './types'
import { EAlertStatus } from './types'
import { spliceBy } from '@/shared/lib/utils/array'
import useTimeout from '@/shared/lib/use/useTimeout'
import { useIsBoolean } from '@/shared/lib/use/base/useIsBoolean'
import { useRefNumber } from '@/shared/lib/use/base/useRefNumber'

const NAMESPACE = 'alerts'

export const useAlertsStore = defineStore(NAMESPACE, (): IAlertsStore => {
  const alerts = reactive<IAlert[]>([])
  const {
    isBoolean: isVisible,
    setTrue: visible,
    setFalse: hidden
  } = useIsBoolean(true)

  const { value: counter, increment } = useRefNumber(1)

  const count = computed(() => alerts.length)

  function showError(message: string, timeout?: number): void {
    createAndSetDestroy(EAlertStatus.error, message, timeout)
  }
  function showSuccess(message: string, timeout?: number): void {
    createAndSetDestroy(EAlertStatus.success, message, timeout)
  }
  function showWarning(message: string, timeout?: number): void {
    createAndSetDestroy(EAlertStatus.warning, message, timeout)
  }
  function showInfo(message: string, timeout?: number): void {
    createAndSetDestroy(EAlertStatus.info, message, timeout)
  }

  function createAndSetDestroy(status: EAlertStatus, message: string, timeout: number = 4000): void {
    const id = counter.value
    increment()

    add({ id, status, message })

    setTimeout(() => destroy(id), timeout)
  }

  function add(data: IAlert): void {
    alerts.push(data)
  }

  function destroy(id: number): void {
    spliceBy(id, alerts)
  }

  const { setTimeoutId, clearTimeoutId } = useTimeout(hidden, 50)

  watch(count, length => {
    if (isVisible.value && length) return

    clearTimeoutId()

    if (!length) {
      setTimeoutId()
    } else {
      visible()
    }
  })

  return {
    alerts,
    isVisible,
    showError,
    showSuccess,
    showWarning,
    showInfo,
    destroy
  }
})
