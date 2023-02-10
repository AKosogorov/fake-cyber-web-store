<template>
  <article class="product-card column gap-s">
    <router-link
      class="product-card__link abs-full"
      :to="{ name: detailsRouteName, params: { id: product.id } }"
      draggable="false"
    />

    <ProductCardImages
      class="product-card__image-wrap"
      :images="product.images"
      :alt="product.title"
    />

    <div class="column gap-xxs">
      <VPrice :price="product.price" :discount="product.discountPercentage" />

      <h4>{{ product.title }}</h4>

      <RatingStars :rating="product.rating" icon-size="xs" />
    </div>
  </article>
</template>

<script setup lang="ts">
import RatingStars from '@/shared/ui/RatingStars'
import VPrice from '@/shared/ui/VPrice/index'
import ProductCardImages from '../ProductCardImages'
import type { IProduct } from '../../model/interface'
defineProps<{
  product: IProduct
  detailsRouteName: string
}>()
</script>

<style lang="scss">
@import 'styles.scss';
</style>
