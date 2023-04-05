import type { CountUpOptions } from 'vue-countup-v3'
import { formatUSD } from '@/shared/lib/utils/format/currency'

export const COUNT_UP_DURATION: number = 0.5

export const PRICE_COUNT_UP_OPTIONS: CountUpOptions = {
  formattingFn: formatUSD
}
