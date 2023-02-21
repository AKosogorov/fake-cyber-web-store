<template>
  <SpinnerLoader v-if="isLoading" />

  <ProductDetails v-else-if="product" :product="product">
    <template v-slot:button-like>
      <AddToFavorites />
    </template>

    <template v-slot:button-add-to-cart>
      <CyberButton class="w-100" text="ADD TO CART" />
    </template>
  </ProductDetails>
</template>

<script setup lang="ts">
import { SpinnerLoader } from '@/shared/ui/loaders'
import { ProductDetails, ProductModel } from '@/entities/Product'
import { CyberButton } from '@/shared/ui/cyber'
import { AddToFavorites } from '@/features/Product'

import { computed, onMounted } from 'vue'
import { ProductApi } from '@/entities/Product'
import { useRoute } from 'vue-router'
import useLoadingWrap from '@/shared/lib/use/useLoadingWrap'

const route = useRoute()
let product: ProductModel.IProduct

const { isLoading, runWithLoading } = useLoadingWrap()

const productId = computed(() => +route.params.id)

onMounted(() => runWithLoading(fetchProduct))

async function fetchProduct() {
  const response = await ProductApi.getById(productId.value)

  product = ProductModel.mapProductResponse(response.data)
}
</script>

<style lang="scss">
@import 'styles';
</style>
