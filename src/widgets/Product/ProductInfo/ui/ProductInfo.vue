<template>
  <SpinnerLoader v-if="isLoading" />

  <ProductDetails v-else-if="product" :product="product">
    <template v-slot:button-like>
      <ButtonLike :is-like="false" />
    </template>

    <template v-slot:button-add-to-cart>
      <CyberButton class="w-100" text="ADD TO CART" />
    </template>
  </ProductDetails>
</template>

<script setup lang="ts">
import { SpinnerLoader } from '@/shared/ui/loaders'
import { mapProductResponse, ProductDetails } from '@/entities/Product'
import { CyberButton } from '@/shared/ui/cyber'
import { ButtonLike } from '@/shared/ui/buttons'

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
