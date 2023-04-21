<template>
  <div class="cart-total column gap-l">
    <CyberCard />

    <div class="column gap-xs">
      <span>Goods, {{ store.totalQuantity }} pcs.</span>

      <div class="cart-total__price row gap-s">
        Total
        <VPrice
          :price="store.total"
          :price-discount="store.discountedTotal"
        />
      </div>
    </div>

    <slot name="order" />
  </div>
</template>

<script setup lang="ts">
import { VPrice } from '@/shared/ui/VPrice'
import { CyberCard } from '@/shared/ui/cyber'
import { useCartStore } from '../../model'

const store = useCartStore()
</script>

<style lang="scss">
@import 'styles';
</style>
