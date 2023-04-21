<template>
  <VSwiper class="images-swiper">
    <swiper-slide
      v-for="(item, i) of images"
      :key="i"
      class="images-swiper__slide"
      lazy="true"
    >
      <img
        :src="item.src"
        :alt="item.alt"
        loading="lazy"
      />
    </swiper-slide>
  </VSwiper>
</template>

<script setup lang="ts">
import { VSwiper } from '../VSwiper'

import type { IImage } from '@/shared/lib/types/dom'
defineProps<{
  images: IImage[]
}>()
</script>
<style lang="scss">
@import 'styles';
</style>
