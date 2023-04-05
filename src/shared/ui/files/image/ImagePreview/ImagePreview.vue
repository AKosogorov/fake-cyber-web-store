<template>
  <div class="image-preview">
    <img
      class="image-preview__img"
      :src="image.src"
      :alt="image.alt"
      loading="lazy"
    />
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { IImage } from '@/shared/lib/interface/image'

defineProps<{
  image: IImage
}>()
</script>

<style lang="scss">
@import 'styles';
</style>
