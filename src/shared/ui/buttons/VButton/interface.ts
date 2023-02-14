import type { IBaseButton } from '@/shared/ui/buttons/interface'
import type { EBorderDecorateIcons } from '@/shared/ui/BorderDecorate'

export interface IButton extends IBaseButton {
  borderLeftIcon?: EBorderDecorateIcons
  borderRightIcon?: EBorderDecorateIcons
}
