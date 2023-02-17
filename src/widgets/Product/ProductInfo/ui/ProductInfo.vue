<template>
  <SpinnerLoader v-if="isLoading" />

  <ProductDetails v-else :product="product" />
</template>

<script setup lang="ts">
import { SpinnerLoader } from '@/shared/ui/loaders'
import { ProductDetails } from '@/entities/Product'

import { computed, onMounted, reactive } from 'vue'
import { ProductApi } from '@/entities/Product'
import type { IProduct } from '@/entities/Product'
import { useRoute } from 'vue-router'
import useLoadingWrap from '@/shared/lib/use/useLoadingWrap'
import type { IImage } from '@/shared/lib/interface/image'

const route = useRoute()
const product = reactive<IProduct>({} as IProduct)

const { isLoading, runWithLoading } = useLoadingWrap()

const productId = computed(() => route.params.id)

const productImages = reactive<IImage[] | never>([])

onMounted(() => runWithLoading(loadProduct))

async function loadProduct() {
  const response = await ProductApi.getById(productId.value)
  for (const key in response.data) {
    product[key] = response.data[key]
  }

  setImages(response.data.images, response.data.title)
}

function setImages(images: string[], alt: string) {
  images.forEach(src => {
    productImages.push({
      src,
      alt
    })
  })
}
</script>

<style lang="scss">
@import 'styles';
</style>
