<template>
  <div class="spinner-loader" :class="size">
    <div class="spinner-loader__circle" />
  </div>
</template>

<script setup lang="ts">
import type { appSize } from '@/shared/lib/interface/size'

withDefaults(
  defineProps<{
    size?: appSize | 'page'
  }>(),
  {
    size: 'page'
  }
)
</script>

<style lang="scss">
@import 'styles';
</style>
