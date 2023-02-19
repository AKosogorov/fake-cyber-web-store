<template>
  <div class="info-short">
    <span class="info-short__label">{{ label }}</span>
    <span class="info-short__text">
      <slot>{{ text }}</slot>
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  text: string | number
}>()
</script>

<style lang="scss">
@import 'styles';
</style>
