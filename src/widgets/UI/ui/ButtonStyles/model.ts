import { EBorderDecorateIcons } from '@/shared/ui/BorderDecorate'
import type { IButton } from '@/shared/ui/buttons/VButton'

const texts: string[] = ['BUTTON', 'HOVER', 'FOCUS', 'DISABLED', 'ACTIVE']

interface IBorders {
  bL: EBorderDecorateIcons
  bR?: EBorderDecorateIcons
}

const borders: IBorders[] = [
  { bL: EBorderDecorateIcons.outer },
  { bL: EBorderDecorateIcons.inner },
  { bL: EBorderDecorateIcons.outer, bR: EBorderDecorateIcons.inner },
  { bL: EBorderDecorateIcons.inner, bR: EBorderDecorateIcons.outer },
  { bL: EBorderDecorateIcons.top, bR: EBorderDecorateIcons.inner },
  { bL: EBorderDecorateIcons.bottom, bR: EBorderDecorateIcons.inner },
  { bL: EBorderDecorateIcons.inner, bR: EBorderDecorateIcons.top },
  { bL: EBorderDecorateIcons.inner, bR: EBorderDecorateIcons.bottom },
  { bL: EBorderDecorateIcons.top },
  { bL: EBorderDecorateIcons.bottom },
  { bL: EBorderDecorateIcons.bottom, bR: EBorderDecorateIcons.top },
  { bL: EBorderDecorateIcons.top, bR: EBorderDecorateIcons.bottom }
]

export const buttonList = borders.map(mapper)

function mapper(item: IBorders): IButton[] {
  return texts.map(text => ({
    text,
    borderLeftIcon: item.bL,
    borderRightIcon: item.bR || item.bL
  }))
}
