<template>
  <SpinnerLoader v-if="isLoading" />

  <div v-else class="product-list">
    <ProductCard v-for="item of products" :key="item.id" :product="item">
      <template v-slot:button-like>
        <AddToFavorites :id="item.id" />
      </template>

      <template v-slot:button-add-to-cart>
        <AddToCart :id="item.id" />
      </template>
    </ProductCard>
  </div>
</template>

<script setup lang="ts">
import SpinnerLoader from '@/shared/ui/loaders/SpinnerLoader'
import { ProductCard } from '@/entities/Product'
import { AddToFavorites } from '@/features/Product'
import { AddToCart } from '@/features/Cart'

import type { ProductModel } from '@/entities/Product'

defineProps<{
  isLoading: boolean
  products: ProductModel.IProduct[]
}>()
</script>

<style lang="scss">
@import 'styles';
</style>
