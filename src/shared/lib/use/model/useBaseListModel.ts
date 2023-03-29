import type { AxiosPromise } from 'axios'
import type { IBaseQuery } from '@/shared/api/types'
import type { Ref } from 'vue'
import { useReactiveArray } from '@/shared/lib/use/base/useReactiveArray'
import { useIsLoading } from '@/shared/lib/use/useIsLoading'
import { useAlertsStore } from '@/shared/ui/TheAlerts'

export interface IBaseSettings<T, R, Q> {
  apiHandler: (params?: Q) => AxiosPromise<R>
  mapper: (responseData: R) => T[]
  initialList?: T[]
}

export interface IUseBaseListModel<T, Q> {
  list: T[]
  loadList: (params?: Q) => Promise<void>
  isLoading: Ref<boolean>
  refresh: (data: T[]) => void
}

export function useBaseListModel<T, R, Q = IBaseQuery>(
  settings: IBaseSettings<T, R, Q>
): IUseBaseListModel<T, Q> {
  const { showError } = useAlertsStore()
  const { startLoading, finishLoading, isLoading } = useIsLoading()

  const { array: list, refresh } = useReactiveArray(settings.initialList)

  async function loadList(params?: Q) {
    try {
      startLoading()

      const { data } = await settings.apiHandler(params)

      const mapped = settings.mapper(data)

      refresh(mapped)
    } catch (e: any) {
      showError(e?.message)
    } finally {
      finishLoading()
    }
  }

  return {
    list,
    loadList,
    isLoading,
    refresh
  }
}
