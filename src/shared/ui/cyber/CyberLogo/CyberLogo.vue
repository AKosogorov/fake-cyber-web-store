<template>
  <router-link
    to="/"
    class="cyber-logo"
  >
    {{ APP_NAME }}
    <span
      class="cyber-logo__glitch abs-full"
      aria-hidden="true"
    >
      {{ APP_NAME }}
    </span>
  </router-link>
</template>

<script setup lang="ts">
import { APP_NAME } from '@/shared/config'
</script>

<style lang="scss">
@import 'styles';
</style>
