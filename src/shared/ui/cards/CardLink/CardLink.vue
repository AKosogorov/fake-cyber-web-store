<template>
  <div class="card-link shadow-black border-radius">
    <slot />
    <router-link class="card-link__link abs-full" :to="to" />
  </div>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

interface IProps {
  to: RouteLocationRaw
}
defineProps<IProps>()
</script>

<style lang="scss">
@import 'styles';
</style>
