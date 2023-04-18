import type { ComputedRef, Ref } from 'vue'
import type { IUseBaseListSettings, IUseBaseListModel } from './types'
import type { IBaseGetResponse, IBaseQuery } from '../../api'
import { useBaseListModel } from './useBaseListModel'
import { useBaseQuery } from '../query'
import { usePaginationQuery } from '../query'

interface IQueryInit extends IBaseQuery {
  page?: number
}

interface IUseQueryListSettings<
  T,
  R extends IBaseGetResponse,
  Q extends IBaseQuery
> extends IUseBaseListSettings<T, R, Q> {
  initQuery?: IQueryInit
}

interface IUseQueryListModel<T, Q extends IBaseQuery>
  extends IUseBaseListModel<T, Q> {
  loadListWithQuery: (params?: Q) => Promise<void>
  loadPage: (num: number) => Promise<void>
  page: Ref<number>
  countPages: ComputedRef<number>
  setPage: (num: number) => void
  changeLimit: (num: number) => void
}

export function useQueryListModel<
  T,
  R extends IBaseGetResponse,
  Q extends object = IBaseQuery
>(settings: IUseQueryListSettings<T, R, Q>): IUseQueryListModel<T, Q> {
  const { list, loadList, isLoading, refresh, total, setTotal } =
    useBaseListModel(settings)

  const { limit, setLimit, skip, setSkip } = useBaseQuery(settings.initQuery)

  const {
    page,
    setPage: setPageValue,
    countPages
  } = usePaginationQuery({ total, limit, initPage: settings?.initQuery?.page })

  async function loadPage(num: number) {
    setPage(num)
    await loadListWithQuery()
  }

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
    loadPage,
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
