<template>
  <div class="price row gap-xs">
    <CountUp
      :end-val="currentPrice"
      :duration="COUNT_UP_DURATION"
      :options="PRICE_COUNT_UP_OPTIONS"
    />

    <del v-if="hasDiscount" class="price__old">
      <CountUp
        :end-val="price"
        :duration="COUNT_UP_DURATION"
        :options="PRICE_COUNT_UP_OPTIONS"
      />
    </del>
  </div>
</template>

<script setup lang="ts">
import CountUp from 'vue-countup-v3'
import { computed } from 'vue'

import {
  COUNT_UP_DURATION,
  PRICE_COUNT_UP_OPTIONS
} from '@/shared/ui/VPrice/const'

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
