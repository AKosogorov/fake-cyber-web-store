<template>
  <div class="product-details column">
    <h1 class="mb-xs">{{ product.title }}</h1>

    <div class="row gap-xs mb-s">
      <RatingStars
        v-if="product.rating"
        :rating="product.rating"
        :size="EAppPixelSize.sm"
      />
    </div>

    <div class="product-details__grid">
      <ImagesSwiper
        v-if="product.images"
        class="product-details__swiper mb-m"
        :images="product.images"
      />

      <div class="product-details__info column gap-xs">
        <div class="column gap-xxs">
          <InfoShort label="Category">
            <router-link
              class="link"
              :to="appRoutes.getCatalogCategory(product.category)"
            >
              {{ product.category }}
            </router-link>
          </InfoShort>

          <InfoShort
            label="Brand"
            :text="product.brand"
          />
        </div>

        <InfoHeaded
          heading="Description"
          :text="product.description"
        />
      </div>

      <div class="product-details__offer column gap-l border-radius shadow-black">
        <div class="between">
          <VPrice
            v-if="product.price"
            :price="product.price"
            :discount="product.discountPercentage"
          />

          <slot name="button-like" />
        </div>

        <slot name="to-cart" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import RatingStars from '@/shared/ui/RatingStars'
import { ImagesSwiper } from '@/shared/ui/swipers'
import { VPrice } from '@/shared/ui/VPrice'
import { InfoShort } from '@/shared/ui/text'

import type { ProductModel } from '@/entities/Product'
import { EAppPixelSize } from '@/shared/lib/types/app'
import InfoHeaded from '@/shared/ui/text/InfoHeaded/InfoHeaded.vue'
import { useAppRoutes } from '@/app/providers'

defineProps<{
  product: ProductModel.IProduct
}>()

const appRoutes = useAppRoutes()
</script>

<style lang="scss">
@import 'styles';
</style>
