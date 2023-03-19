<template>
  <div class="price row gap-xs">
    <span class="price__current">{{ formatUSD(currentPrice) }}</span>
    <del v-if="hasDiscount" class="price__old">{{ formatUSD(price) }}</del>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { formatUSD } from '@/shared/lib/utils/format/currency'

const props = defineProps<{
  price: number
  discount?: number
  priceDiscount?: number
}>()

const hasDiscount = computed(() => props.discount || props.priceDiscount)

const currentPrice = computed(() => {
  if (props.discount) {
    return props.price * ((100 - props.discount) / 100)
  }

  if (props.priceDiscount) return props.priceDiscount

  return props.price
})
</script>

<style lang="scss">
@import 'styles';
</style>
