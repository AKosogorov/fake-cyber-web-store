<template>
  <div class="cart-total column gap-xs">
    <span>Goods, {{ store.totalQuantity }} pcs.</span>
    <div class="cart-total__price row gap-s">
      Total
      <VPrice :price="store.total" :price-discount="store.discountedTotal" />
    </div>
  </div>
</template>

<script setup lang="ts">
import VPrice from '@/shared/ui/VPrice'
import { useCartStore } from '../../model'
import { computed } from 'vue'
import { formatRUB } from '@/shared/lib/utils/format/currency'
const store = useCartStore()
const sum = computed(() => formatRUB(store.total))
</script>

<style lang="scss">
@import 'styles';
</style>
