import { defineStore } from 'pinia'
import { computed, reactive, ref, watch } from 'vue'
import type {
  IAlert,
  IAlertsStore
} from '@/shared/ui/TheAlerts/model/interface'
import { EAlertStatus } from '@/shared/ui/TheAlerts/model/interface'
import { spliceBy } from '@/shared/lib/utils/array'
import useTimeout from '@/shared/lib/use/useTimeout'

export const NAMESPACE = 'alerts'

export const useAlertsStore = defineStore(NAMESPACE, (): IAlertsStore => {
  const alerts = reactive<IAlert[] | never>([])
  const isVisible = ref(false)
  const counter = ref(1)

  const count = computed(() => alerts.length)

  function showError(message: string): void {
    createAndSetDestroy(EAlertStatus.error, message)
  }
  function showSuccess(message: string): void {
    createAndSetDestroy(EAlertStatus.success, message)
  }
  function showWarning(message: string): void {
    createAndSetDestroy(EAlertStatus.warning, message)
  }
  function showInfo(message: string): void {
    createAndSetDestroy(EAlertStatus.info, message)
  }

  function createAndSetDestroy(status: EAlertStatus, message: string): void {
    const id = counter.value
    increment()

    add({ id, status, message })

    setTimeout(() => destroy(id), 3000)
  }

  function add(data: IAlert): void {
    alerts.push(data)
  }

  function destroy(id: number): void {
    spliceBy(id, alerts)
  }

  function increment(): void {
    counter.value++
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

  function hidden() {
    isVisible.value = false
  }
  function visible() {
    isVisible.value = true
  }

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
