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
  discount: number
}>()

const hasDiscount = computed(() => props.discount > 0)

const currentPrice = computed(() => {
  if (!hasDiscount.value) return props.price

  return props.price * ((100 - props.discount) / 100)
})
</script>

<style lang="scss">
@import 'styles';
</style>
