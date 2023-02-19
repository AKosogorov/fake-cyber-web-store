<template>
  <SpinnerLoader v-if="isLoading" />

  <ProductDetails v-else-if="product" :product="product" />
</template>

<script setup lang="ts">
import { SpinnerLoader } from '@/shared/ui/loaders'
import { mapProductResponse, ProductDetails } from '@/entities/Product'

import { computed, onMounted, reactive } from 'vue'
import { ProductApi } from '@/entities/Product'
import type { IProduct } from '@/entities/Product'
import { useRoute } from 'vue-router'
import useLoadingWrap from '@/shared/lib/use/useLoadingWrap'
import type { IImage } from '@/shared/lib/interface/image'

const route = useRoute()
let product: IProduct

const { isLoading, runWithLoading } = useLoadingWrap()

const productId = computed(() => +route.params.id)

onMounted(() => runWithLoading(fetchProduct))

async function fetchProduct() {
  const response = await ProductApi.getById(productId.value)

  product = mapProductResponse(response.data)
}
</script>

<style lang="scss">
@import 'styles';
</style>
