<template>
  <div
    class="product-card-images"
    @mouseenter="startSlide"
    @mouseleave="finishSlide"
  >
    <img
      class="product-card-images__image"
      :src="src"
      :alt="alt"
      draggable="false"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import useInterval from "@/shared/lib/use/useInterval";

const props = defineProps<{
  images: string[];
  alt: string;
}>();

const currentIdx = ref<number>(0);

function incrementCurrentIdx() {
  currentIdx.value += 1;
}

const src = computed(() => props.images[currentIdx.value] || props.images[0]);

const countImages = computed(() => props.images.length);

const { startInterval, finishInterval } = useInterval(slideImages, 1500);

function startSlide() {
  incrementCurrentIdx();
  startInterval();
}

function slideImages() {
  if (currentIdx.value === countImages.value - 1) {
    currentIdx.value = 1;
    return;
  }

  incrementCurrentIdx();
}

function finishSlide() {
  finishInterval();
  currentIdx.value = 0;
}
</script>

<style lang="scss">
@import "styles.scss";
</style>
