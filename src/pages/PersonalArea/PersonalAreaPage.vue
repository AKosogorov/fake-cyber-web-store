<template>
  <div class="personal-area-page container">
    <VNavigation
      class="personal-area-page__nav mb-s"
      :nav-list="personalAreaNavList"
    />

    <h1 v-if="isMainPage" class="mb-s">Personal area</h1>
  </div>
  <router-view />
</template>

<script setup lang="ts">
import { VNavigation } from '@/shared/ui/navigation'

import { computed, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { useAppPages, useAppRoutes } from '@/app/providers'
import type { INavItem } from '@/shared/ui/navigation'
import {
  IconHome,
  IconHeart,
  IconBag,
  IconWallet,
  IconUser
} from '@/shared/ui/icons'

const route = useRoute()
const appRoutes = useAppRoutes()
const appPages = useAppPages()

const isMainPage = computed(() => route.name === appPages.personalArea)

const isOrdersPage = computed(
  () => route.name === appPages.delivery || route.name === appPages.archive
)

const personalAreaNavList = reactive<INavItem[]>([
  {
    to: appRoutes.getPersonalArea(),
    label: 'Main',
    icon: IconHome
  },
  {
    to: appRoutes.getFavorites(),
    label: 'Favorites',
    icon: IconHeart
  },
  {
    to: appRoutes.getOrders(),
    label: 'Orders',
    icon: IconBag,
    isActive: isOrdersPage
  },
  {
    to: appRoutes.getWallet(),
    label: 'Wallet',
    icon: IconWallet
  },
  {
    to: appRoutes.getProfile(),
    label: 'Profile',
    icon: IconUser
  }
])
</script>

<style lang="scss">
@import 'styles';
</style>
