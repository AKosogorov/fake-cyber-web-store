<template>
  <div class="spinner-loader" :class="size">
    <div class="spinner-loader__circle" />
  </div>
</template>

<script setup lang="ts">
import type { appSize } from '@/shared/lib/interface/size'

defineProps<{
  size?: appSize | 'page'
}>()
</script>

<style lang="scss">
@import 'styles';
</style>
