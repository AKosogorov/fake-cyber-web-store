<template>
  <div id="swiper" class="v-swiper">
    <div class="v-swiper__wrapper swiper-wrapper">
      <ImagePreview
        v-for="(item, i) of images"
        :key="i"
        class="swiper-slide swiper-slide--image"
        :image="item"
      >
        <div class="swiper-lazy-preloader" />
      </ImagePreview>
    </div>

    <div class="v-swiper__pagination swiper-pagination row" />
    <SwiperButton class="v-swiper__button v-swiper__button--next" />
    <SwiperButton class="v-swiper__button v-swiper__button--prev" />
  </div>
</template>

<script setup lang="ts">
import Swiper, { Pagination, Navigation } from 'swiper'
import SwiperButton from '@/shared/ui/Swiper/buttons/SwiperButton.vue'

import { ImagePreview } from '@/shared/ui/files'

import type { IImage } from '@/shared/lib/interface/image'
import { onMounted, onUnmounted } from 'vue'

defineProps<{
  images: IImage[]
}>()

let swiper: Swiper

onMounted(initSwiper)
onUnmounted(() => swiper.destroy())

function initSwiper() {
  swiper = new Swiper('.v-swiper', {
    modules: [Pagination, Navigation],
    effect: 'slide',
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.v-swiper__button--next',
      prevEl: '.v-swiper__button--prev'
    }
  })
}
</script>

<style lang="scss">
@import 'swiper/swiper-bundle.min.css';
@import 'styles';
</style>
