<template>
  <router-link class="link-to-cart link" :to="appRoutes.getCart()">
    <IconCart class="link__icon" />
    <span v-if="store.inCart" class="link-to-cart__counter counter">
      {{ store.inCart }}
    </span>
  </router-link>
</template>

<script setup lang="ts">
import { IconCart } from '@/shared/ui/icons'
import { useCartStore } from '../../model'
import { useAppRoutes } from '@/app/providers'
const appRoutes = useAppRoutes()

const store = useCartStore()
</script>

<style lang="scss">
@import 'styles';
</style>
