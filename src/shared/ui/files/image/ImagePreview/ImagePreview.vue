<template>
  <div class="image-preview">
    <img class="image-preview__img" :src="src" :alt="alt" />
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src: string
  alt: string
}>()
</script>

<style lang="scss">
@import 'styles.scss';
</style>
