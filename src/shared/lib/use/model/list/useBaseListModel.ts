import type { IBaseGetResponse, IBaseQuery } from '@/shared/api/types'
import { useReactiveArray } from '@/shared/lib/use/base/useReactiveArray'
import { useIsLoading } from '@/shared/lib/use/useIsLoading'
import { useAlertsStore } from '@/shared/ui/TheAlerts'
import { useRefNumber } from '@/shared/lib/use/base/useRefNumber'
import type { IUseBaseListSettings, IUseBaseListModel } from './types'

export function useBaseListModel<T, R extends IBaseGetResponse, Q = IBaseQuery>(
  settings: IUseBaseListSettings<T, R, Q>
): IUseBaseListModel<T, Q> {
  const { showError } = useAlertsStore()
  const { startLoading, finishLoading, isLoading } = useIsLoading()

  const { value: total, setValue: setTotal } = useRefNumber(0)

  const { array: list, refresh } = useReactiveArray(settings.initialList)

  async function loadList(params?: Q) {
    try {
      startLoading()

      const { data } = await settings.apiHandler(params)

      setTotal(data.total)

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
    refresh,
    total,
    setTotal
  }
}