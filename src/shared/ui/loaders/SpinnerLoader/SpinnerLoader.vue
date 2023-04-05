<template>
  <div class="spinner-loader" :class="size">
    <div class="spinner-loader__circle" />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: 'lg' | 'md' | 'sm' | 'page'
  }>(),
  {
    size: 'page'
  }
)
</script>

<style lang="scss">
@import 'styles';
</style>
