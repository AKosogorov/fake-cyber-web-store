<template>
  <SpinnerLoader v-if="isLoading" />

  <div v-else class="product-list">
    <ProductCard
      v-for="item of products"
      :key="item.id"
      :product="item"
      :details-route-name="detailsRouteName"
    >
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

import { ProductModel } from '@/entities/Product'

const props = defineProps<{
  detailsRouteName: string
  isLoading: boolean
  products: ProductModel.IProduct[]
}>()
</script>

<style lang="scss">
@import 'styles';
</style>
