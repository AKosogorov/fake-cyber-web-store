<template>
  <router-link class="link-to-cart link" to="/cart">
    <IconCart class="link-to-cart__icon" />
    <span v-if="store.inCart" class="link-to-cart__counter counter">
      {{ store.inCart }}
    </span>
  </router-link>
</template>

<script setup lang="ts">
import IconCart from '@/shared/ui/icons/IconCart.vue'
import { useCartStore } from '../../model'

const store = useCartStore()
</script>

<style lang="scss">
@import 'styles';
</style>
