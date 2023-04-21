<template>
  <router-link
    class="link relative"
    :to="appRoutes.getDelivery()"
  >
    <IconDelivery class="link__icon" />
    <span
      v-if="store.inDelivery"
      class="notification-counter"
    >
      {{ store.inDelivery }}
    </span>
  </router-link>
</template>

<script setup lang="ts">
import { useAppRoutes } from '@/app/providers'
import { IconDelivery } from '@/shared/ui/icons'
import { useOrderStore } from '../../model'

const appRoutes = useAppRoutes()
const store = useOrderStore()
</script>
