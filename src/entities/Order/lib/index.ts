import { EOrderStatus } from '../model'
import { EAppColor } from '@/shared/lib/types/app'

export function getColorBy(status: EOrderStatus) {
  switch (status) {
    case EOrderStatus.delivery:
      return EAppColor.red
    case EOrderStatus.ready:
      return EAppColor.yellow
    case EOrderStatus.purchased:
      return EAppColor.green
  }
}
