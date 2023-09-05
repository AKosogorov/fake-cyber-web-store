import { EBorderDecorateIcons } from '@/shared/ui/BorderDecorate'

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

interface IButtonItem {
  txt: string
  borderLeftIcon: EBorderDecorateIcons
  borderRightIcon: EBorderDecorateIcons
}

function mapper(item: IBorders): IButtonItem[] {
  return texts.map(txt => ({
    txt,
    borderLeftIcon: item.bL,
    borderRightIcon: item.bR || item.bL
  }))
}
