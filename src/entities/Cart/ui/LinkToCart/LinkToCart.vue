<template>
  <router-link class="link-to-cart link" to="/cart">
    <IconCart class="link-to-cart__icon" />
    <span class="link-to-cart__counter counter">1</span>
  </router-link>
</template>

<script setup lang="ts">
import IconCart from '@/shared/ui/icons/IconCart.vue'
</script>

<style lang="scss">
@import 'styles';
</style>
