import type { ComputedRef, Ref } from 'vue'
import { useRefNumber } from '@/shared/lib/use/base/useRefNumber'
import { computed } from 'vue'

interface IParams {
  total: Ref<number>
  limit: Ref<number>
  initPage?: number
}

interface IUsePaginationQuery {
  page: Ref<number>
  setPage: (num: number) => void
  countPages: ComputedRef<number>
}

export function usePaginationQuery({ total, limit, initPage }: IParams) {
  const { value: page, setValue: setPage } = useRefNumber(initPage || 1)

  const countPages = computed(() => Math.ceil(total.value / limit.value))

  return {
    page,
    setPage,
    countPages
  }
}
