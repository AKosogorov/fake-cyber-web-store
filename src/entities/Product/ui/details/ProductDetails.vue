<template>
  <div class="product-details column">
    <h2 class="mb-xs">
      {{ product.category }} / {{ product.brand }} / {{ product.title }}
    </h2>

    <div class="row gap-xs mb-s">
      <RatingStars
        v-if="product.rating"
        :rating="product.rating"
        :size="EAppPixelSize.md"
      />
    </div>

    <div class="product-details__grid">
      <ImagesSwiper
        v-if="product.images"
        class="product-details__swiper mb-m"
        :images="product.images"
      />

      <div class="column gap-xxs">
        <h5>Description</h5>
        <p>{{ product.description }}</p>
      </div>

      <div
        class="product-details__offer column gap-l border-radius shadow-black"
      >
        <div class="between">
          <VPrice
            v-if="product.price"
            :price="product.price"
            :discount="product.discountPercentage"
          />

          <slot name="button-like" />
        </div>

        <slot name="button-add-to-cart" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import RatingStars from '@/shared/ui/RatingStars'
import { ImagesSwiper } from '@/shared/ui/swipers'
import VPrice from '@/shared/ui/VPrice'

import type { IProduct } from '@/entities/Product'
import { EAppPixelSize } from '@/shared/lib/interface/size'

defineProps<{
  product: IProduct
}>()
</script>

<style lang="scss">
@import 'styles';
</style>
