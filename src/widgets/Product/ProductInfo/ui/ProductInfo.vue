<template>
  <SpinnerLoader v-if="isLoading" />

  <ProductDetails v-else-if="product" :product="product">
    <template v-slot:button-like>
      <AddToFavorites :id="product.id" />
    </template>

    <template v-slot:button-add-to-cart>
      <AddToCart class="w-100" :id="product.id" />
    </template>
  </ProductDetails>
</template>

<script setup lang="ts">
import { SpinnerLoader } from '@/shared/ui/loaders'
import { ProductDetails, ProductModel } from '@/entities/Product'
import { AddToFavorites } from '@/features/Product'
import { AddToCart } from '@/features/Cart'
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
