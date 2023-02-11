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

const alert: IAlert = {
  id: 0,
  status: EAlertStatus.error,
  message: 'Message'
}

export const useAlertsStore = defineStore(NAMESPACE, (): IAlertsStore => {
  const alerts = reactive<IAlert[] | never>([alert])
  const isVisible = ref(false)
  const counter = ref(1)

  const count = computed(() => alerts.length)

  function showError(message: string): void {
    createAndSetDestroy(EAlertStatus.error, message)
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

  function destroy(id: number) {
    spliceBy(id, alerts)
  }

  function increment(): void {
    counter.value++
  }

  const { setTimeoutId, clearTimeoutId } = useTimeout(hidden, 50)

  watch(count, length => {
    if (isVisible.value && length) return

    clearTimeoutId()
    console.log(1)

    if (!length) {
      setTimeoutId()
    } else {
      visible()
    }
  })

  watch(
    () => isVisible.value,
    val => {
      console.log(val)
    }
  )

  function hidden() {
    isVisible.value = false
  }
  function visible() {
    isVisible.value = true
  }

  return {
    alerts,
    showError,
    isVisible
  }
})
