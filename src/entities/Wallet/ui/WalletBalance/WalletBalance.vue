<template>
  <div class="balance column gap-s">
    <div class="column gap-xxs">
      <h4>Balance:</h4>

      <div class="balance__sum row">
        <CountUp
          :end-val="store.balance"
          :duration="COUNT_UP_DURATION"
          :options="PRICE_COUNT_UP_OPTIONS"
        />
      </div>
    </div>

    <slot name="refill" />
  </div>
</template>

<script setup lang="ts">
import CountUp from 'vue-countup-v3'
import { useWalletStore } from '../../model'
import { COUNT_UP_DURATION, PRICE_COUNT_UP_OPTIONS } from '@/shared/ui/VPrice'

const store = useWalletStore()
</script>

<style lang="scss">
@import 'styles';
</style>
