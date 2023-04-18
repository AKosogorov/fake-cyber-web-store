import type { IBaseGetResponse, IBaseQuery, TExtraQuery } from '../../api'
import type { IUseBaseListSettings, IUseBaseListModel } from './types'
import { useReactiveArray } from '@/shared/lib/use/base/useReactiveArray'
import { useIsLoading } from '@/shared/lib/use/useIsLoading'
import { useAlertsStore } from '@/shared/ui/TheAlerts'
import { useRefNumber } from '@/shared/lib/use/base/useRefNumber'

export function useBaseListModel<
  T,
  R extends IBaseGetResponse,
  Q extends object = IBaseQuery
>(
  settings: IUseBaseListSettings<T, R, TExtraQuery<Q>>
): IUseBaseListModel<T, TExtraQuery<Q>> {
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
