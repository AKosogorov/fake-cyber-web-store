import { reactive } from 'vue'
import type { UnwrapNestedRefs } from '@vue/reactivity'
import { spliceBy, spliceSimpleBy } from '@/shared/lib/utils/array'

type TValue = number | string

interface IUseReactiveArray<T> {
  array: T[]
  add: (item: T) => void
  remove: (value: TValue, key?: string) => void
}

// TODO доделать типизацию
export function useReactiveArray<T>(init: T[]): IUseReactiveArray<T> {
  const array = reactive(init)

  function add(item: T) {
    // @ts-ignore
    array.push(item)
  }

  function remove(value: TValue, key: string = 'id') {
    if (key === 'id') {
      // @ts-ignore
      return spliceBy(value, array)
    }
    if (!key) {
      // @ts-ignore
      return spliceSimpleBy(value, array)
    }
  }

  return {
    // @ts-ignore
    array,
    add,
    remove
  }
}
