<template>
  <div class="info flex gap-xxs">
    <span class="info__label label">{{ label }}:</span>
    <span class="info__text">
      <slot>{{ txt }}</slot>
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  txt: string | number
}>()
</script>

<style lang="scss">
@import 'styles';
</style>
