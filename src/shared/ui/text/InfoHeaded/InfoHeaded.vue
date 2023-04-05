<template>
  <div class="column gap-xxs">
    <h5>{{ heading }}</h5>
    <p>
      <slot>{{ text }}</slot>
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  heading: string
  text?: string
}>()
</script>

<style lang="scss">
@import 'styles';
</style>
