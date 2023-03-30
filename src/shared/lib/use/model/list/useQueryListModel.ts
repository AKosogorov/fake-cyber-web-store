import type { IUseBaseListSettings, IUseBaseListModel } from './types'
import type { IBaseGetResponse } from '@/shared/api'
import type { IBaseQuery } from '@/shared/api'
import { useBaseListModel } from '@/shared/lib/use/model'
import { useBaseQuery } from '@/shared/lib/use/model/query/useBaseQuery'
import { usePaginationQuery } from '@/shared/lib/use/model/query/usePaginationQuery'
import type { ComputedRef, Ref } from 'vue'

interface IQueryInit extends IBaseQuery {
  page?: number
}

interface IUseQueryListSettings<T, R extends IBaseGetResponse, Q = IBaseQuery>
  extends IUseBaseListSettings<T, R, Q> {
  initQuery?: IQueryInit
}

interface IUseQueryListModel<T, Q> extends IUseBaseListModel<T, Q> {
  loadListWithQuery: (params?: Q) => Promise<void>
  page: Ref<number>
  countPages: ComputedRef<number>
  setPage: (num: number) => void
  changeLimit: (num: number) => void
}

export function useQueryListModel<
  T,
  R extends IBaseGetResponse,
  Q = IBaseQuery
>(settings: IUseQueryListSettings<T, R, Q>): IUseQueryListModel<T, Q> {
  const { list, loadList, isLoading, refresh, total, setTotal } =
    useBaseListModel(settings)

  const { limit, setLimit, skip, setSkip } = useBaseQuery(settings.initQuery)

  const {
    page,
    setPage: setPageValue,
    countPages
  } = usePaginationQuery({ total, limit, initPage: settings?.initQuery?.page })

  async function loadListWithQuery(params?: Q) {
    const query = {
      limit: limit.value,
      skip: skip.value
    }

    const mergedParams = Object.assign(query, params)

    await loadList(mergedParams)
  }

  function setPage(num: number) {
    setPageValue(num)
    syncSkip()
  }

  function syncSkip() {
    setSkip((page.value - 1) * limit.value)
  }

  function changeLimit(num: number) {
    setLimit(num)
    syncSkip()
  }

  return {
    list,
    loadList,
    loadListWithQuery,
    isLoading,
    refresh,
    total,
    setTotal,
    page,
    setPage,
    countPages,
    changeLimit
  }
}
