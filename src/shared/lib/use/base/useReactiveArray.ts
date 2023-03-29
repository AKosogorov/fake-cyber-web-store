import { reactive } from 'vue'
import type { UnwrapNestedRefs } from '@vue/reactivity'
import {
  refreshArray,
  spliceBy,
  spliceSimpleBy
} from '@/shared/lib/utils/array'

type TValue = number | string

interface IUseReactiveArray<T> {
  array: T[]
  add: (item: T) => void
  remove: (value: TValue, key?: string) => void
  refresh: (data: T[]) => void
}

// TODO доделать типизацию
export function useReactiveArray<T>(init: T[] = []): IUseReactiveArray<T> {
  const array = reactive(init) as T[]

  function add(item: T) {
    array.push(item)
  }

  function remove(value: TValue, key: string = 'id') {
    if (key === 'id') {
      return spliceBy(value, array)
    }
    if (!key) {
      return spliceSimpleBy(value, array)
    }
  }

  function refresh(data: T[]) {
    refreshArray(array, data)
  }

  return {
    array,
    add,
    remove,
    refresh
  }
}
