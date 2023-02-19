<template>
  <article class="product-card column gap-s">
    <router-link
      class="product-card__link abs-full"
      :to="{ name: detailsRouteName, params: { id: product.id } }"
      draggable="false"
    />

    <ImagesSwiper
      v-if="product.images"
      class="product-card__swiper mb-m"
      :images="product.images"
    />

    <div class="column gap-xxs">
      <VPrice :price="product.price" :discount="product.discountPercentage" />

      <h4>{{ product.title }} - {{ product.stock }}</h4>

      <RatingStars :rating="product.rating" :size="EAppPixelSize.xs" />
    </div>
  </article>
</template>

<script setup lang="ts">
import { ImagesSwiper } from '@/shared/ui/swipers'
import VPrice from '@/shared/ui/VPrice'
import RatingStars from '@/shared/ui/RatingStars'
import type { IProduct } from '../../model/interface'
import { EAppPixelSize } from '@/shared/lib/interface/size'
defineProps<{
  product: IProduct
  detailsRouteName: string
}>()
</script>

<style lang="scss">
@import 'styles.scss';
</style>
