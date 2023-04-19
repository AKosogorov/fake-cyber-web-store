<template>
  <div class="personal-area-page container">
    <VNavigation
      class="personal-area-page__nav mb-s"
      :nav-list="personalAreaNavList"
    />

    <h1 v-if="isMainPage" class="mb-s">Personal area</h1>

    <div v-if="isMainPage" class="column gap-s">
      <CardLink class="column gap-xs" :to="appRoutes.getProfile()">
        <UserBadge :user="session.user" />

        <VInfo label="Email" :txt="session.user.email" />

        <VInfo label="Gender" :txt="session.user.gender" />

        <LogoutButton class="personal-area-page__logout" />
      </CardLink>

      <CardLink :to="appRoutes.getDelivery()">Delivery</CardLink>

      <CardLink :to="appRoutes.getFavorites()">Favorites</CardLink>

      <div class="row gap-xxs">
        <CardLink :to="appRoutes.getArchive()">Purchases</CardLink>

        <CardLink :to="appRoutes.getWallet()">
          <WalletBalance />
        </CardLink>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script setup lang="ts">
import { LogoutButton } from '@/features/auth'
import { UserBadge } from '@/entities/User'
import { WalletBalance } from '@/entities/Wallet'
import { VNavigation } from '@/shared/ui/navigation'
import { CardLink } from '@/shared/ui/cards'
import { VInfo } from '@/shared/ui/text'

import { computed, reactive, markRaw } from 'vue'
import { useRoute } from 'vue-router'
import { useAppPages, useAppRoutes } from '@/app/providers'
import { useSessionStore } from '@/entities/Session/model'
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
    icon: markRaw(IconHome)
  },
  {
    to: appRoutes.getFavorites(),
    label: 'Favorites',
    icon: markRaw(IconHeart)
  },
  {
    to: appRoutes.getOrders(),
    label: 'Orders',
    icon: markRaw(IconBag),
    isActive: isOrdersPage
  },
  {
    to: appRoutes.getWallet(),
    label: 'Wallet',
    icon: markRaw(IconWallet)
  },
  {
    to: appRoutes.getProfile(),
    label: 'Profile',
    icon: markRaw(IconUser)
  }
])

const session = useSessionStore()
</script>

<style lang="scss">
@import 'styles';
</style>
