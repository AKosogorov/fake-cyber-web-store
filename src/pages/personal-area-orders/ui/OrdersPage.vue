<template>
  <div class="container">
    <VNavigation
      class="personal-area-page__sub-nav mb-m"
      :nav-list="ordersNavList"
    />
  </div>
  <router-view />
</template>

<script setup lang="ts">
import { VNavigation } from '@/shared/ui/navigation'

import type { INavItem } from '@/shared/ui/navigation'
import { useAppRoutes } from '@/app/providers'
const appRoutes = useAppRoutes()

const ordersNavList: INavItem[] = [
  {
    to: appRoutes.getDelivery(),
    label: 'Delivery'
  },
  {
    to: appRoutes.getArchive(),
    label: 'Purchases'
  }
]
</script>
