import type { IStringIdx } from '@/shared/lib/types/object'

export function setCreatedAtTo(data: IStringIdx<any>) {
  data.createdAt = Date.now()
}
export function setUpdatedAtTo(data: IStringIdx<any>) {
  data.updatedAt = Date.now()
}
