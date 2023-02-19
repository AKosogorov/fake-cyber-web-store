<template>
  <swiper-container
    class="v-swiper"
    :modules="modules"
    :slides-per-view="slidesPerView"
    :space-between="spaceBetween"
    :pagination="{
      el: '.v-swiper__pagination',
      type: 'bullets',
      clickable: true
    }"
    :navigation="{
      nextEl: '.v-swiper__button--next',
      prevEl: '.v-swiper__button--prev'
    }"
  >
    <slot />

    <div slot="container-end">
      <div
        v-if="hasPagination"
        class="v-swiper__pagination swiper-pagination row"
      />
      <SwiperButton
        v-if="hasNavigation"
        class="v-swiper__button v-swiper__button--next"
      />
      <SwiperButton
        v-if="hasNavigation"
        class="v-swiper__button v-swiper__button--prev"
      />
    </div>
  </swiper-container>
</template>

<script lang="ts">
import { register } from 'swiper/element'
import { Pagination, Navigation } from 'swiper'
import SwiperButton from './buttons/SwiperButton.vue'
import { defineComponent } from 'vue'

register()

export default defineComponent({
  components: { SwiperButton },
  props: {
    slidesPerView: {
      type: Number,
      required: false,
      default: 1
    },
    spaceBetween: {
      type: Number,
      required: false,
      default: 0
    },
    hasPagination: {
      type: Boolean,
      required: false,
      default: true
    },
    hasNavigation: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup() {
    const modules = [Pagination, Navigation]
    return {
      modules
    }
  }
})
</script>

<style lang="scss">
@import 'swiper/swiper-bundle.min.css';
@import 'styles';
</style>
