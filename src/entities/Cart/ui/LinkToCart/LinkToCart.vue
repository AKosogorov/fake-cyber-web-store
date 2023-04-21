<template>
  <router-link
    class="link relative"
    :to="appRoutes.getCart()"
  >
    <IconCart class="link__icon" />
    <span
      v-if="store.inCart"
      class="notification-counter"
    >
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
