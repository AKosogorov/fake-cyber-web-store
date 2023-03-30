import type { IBaseQuery } from '@/shared/api/types'
import type { Ref } from 'vue'
import { useRefNumber } from '@/shared/lib/use/base/useRefNumber'

interface IUseQuery {
  limit: Ref<number>
  setLimit: (num: number) => void
  skip: Ref<number>
  setSkip: (num: number) => void
}

export function useBaseQuery(initial?: IBaseQuery) {
  const { value: limit, setValue: setLimit } = useRefNumber(
    initial?.limit || 10
  )

  const { value: skip, setValue: setSkip } = useRefNumber(initial?.skip || 0)

  return {
    limit,
    setLimit,
    skip,
    setSkip
  }
}
