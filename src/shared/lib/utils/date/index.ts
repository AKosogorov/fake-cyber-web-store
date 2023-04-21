import type { IStringIdx } from '@/shared/lib/types/object'

export function setCreatedAtTo(data: IStringIdx) {
  data.createdAt = Date.now()
}
export function setUpdatedAtTo(data: IStringIdx) {
  data.updatedAt = Date.now()
}
