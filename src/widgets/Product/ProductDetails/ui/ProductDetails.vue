<template>
  <SpinnerLoader v-if="isLoading" />

  <div v-else class="product-details column">
    <h2>{{ product.brand }} / {{ product.title }}</h2>

    <div class="column gap-xs mb-s">
      <div v-for="key in keys" :key="key">{{ key }}: {{ product[key] }}</div>
    </div>

    <VSwiper class="product-details__swiper" :images="productImages" />

    <RatingStars
      v-if="product.rating"
      :rating="product.rating"
      :size="EAppPixelSize.md"
    />
    <p>{{ product.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { SpinnerLoader } from '@/shared/ui/loaders'
import RatingStars from '@/shared/ui/RatingStars'
import VSwiper from '@/shared/ui/Swiper/VSwiper.vue'

import { computed, onMounted, reactive } from 'vue'
import { ProductApi } from '@/entities/Product'
import type { IProduct } from '@/entities/Product'
import { useRoute } from 'vue-router'
import useLoadingWrap from '@/shared/lib/use/useLoadingWrap'
import { EAppPixelSize } from '@/shared/lib/interface/size'
import type { IImage } from '@/shared/lib/interface/image'

const route = useRoute()
const product = reactive<IProduct | object>({})

const { isLoading, runWithLoading } = useLoadingWrap()

const productId = computed(() => route.params.id)
const keys = reactive([])

const productImages = reactive<IImage[] | never>([])

onMounted(() => runWithLoading(loadProduct))

async function loadProduct() {
  const response = await ProductApi.getById(productId.value)
  for (const key in response.data) {
    product[key] = response.data[key]
    keys.push(key)
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
