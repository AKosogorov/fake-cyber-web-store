<template>
  <div class="product-details column">
    <h2>{{ product.category }} / {{ product.brand }} / {{ product.title }}</h2>

    <div class="column gap-s mb-m max-w-field">
      <div class="between">
        <VPrice
          v-if="product.price"
          :price="product.price"
          :discount="product.discountPercentage"
        />

        <ButtonLike :is-like="false" />

        <VButton text="Добавить в корзину" />
      </div>

      <CyberButton text="ADD TO CART" />
    </div>

    <VSwiper class="product-details__swiper mb-m" :images="product.images" />

    <RatingStars
      v-if="product.rating"
      :rating="product.rating"
      :size="EAppPixelSize.md"
    />

    <p>{{ product.description }}</p>
  </div>
</template>

<script setup lang="ts">
import RatingStars from '@/shared/ui/RatingStars'
import VSwiper from '@/shared/ui/Swiper/VSwiper.vue'
import VPrice from '@/shared/ui/VPrice'
import { CyberButton } from '@/shared/ui/cyber'
import VButton from '@/shared/ui/buttons/VButton'
import ButtonLike from '@/shared/ui/buttons/ButtonLike'

import type { IProduct } from '@/entities/Product'
import { EAppPixelSize } from '@/shared/lib/interface/size'

defineProps<{
  product: IProduct
}>()
</script>

<style lang="scss">
@import 'styles';
</style>
