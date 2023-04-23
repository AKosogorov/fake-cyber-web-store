<template>
  <div class="personal-area-page container">
    <VNavigation
      class="personal-area-page__nav mb-s"
      :nav-list="personalAreaNavList"
    />

    <h1
      v-if="isMainPage"
      class="mb-s"
    >
      Personal area
    </h1>

    <div
      v-if="isMainPage"
      class="personal-area-page__grid"
    >
      <CardLink
        class="personal-area-page__profile column gap-xs"
        :to="appRoutes.getProfile()"
      >
        <UserBadge :user="session.user" />

        <VInfo
          label="Email"
          :txt="session.user.email"
        />

        <VInfo
          label="Gender"
          :txt="session.user.gender"
        />

        <LogoutButton class="personal-area-page__logout" />
      </CardLink>

      <CardLink
        class="personal-area-page__delivery column gap-xs"
        :to="appRoutes.getDelivery()"
      >
        <h3>Delivery</h3>

        <p v-if="orderStore.inDelivery">{{ orderStore.inDelivery }} orders awaiting delivery</p>
      </CardLink>

      <CardLink
        class="personal-area-page__favorites"
        :to="appRoutes.getFavorites()"
      >
        <h3>Favorites</h3>
      </CardLink>

      <CardLink
        class="personal-area-page__archive column gap-xs"
        :to="appRoutes.getArchive()"
      >
        <h3>Purchases</h3>

        <p v-if="orderStore.inPurchased">{{ orderStore.inPurchased }} orders received</p>
      </CardLink>

      <CardLink
        class="personal-area-page__balance"
        :to="appRoutes.getWallet()"
      >
        <WalletBalance />
      </CardLink>
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
import { IconHome, IconHeart, IconBag, IconWallet, IconUser } from '@/shared/ui/icons'
import { OrderModel } from '@/entities/Order'

const route = useRoute()
const appRoutes = useAppRoutes()
const appPages = useAppPages()

const isMainPage = computed(() => route.name === appPages.personalArea)

const isOrdersPage = computed(() => route.name === appPages.delivery || route.name === appPages.archive)

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
const orderStore = OrderModel.useOrderStore()
</script>

<style lang="scss">
@import 'styles';
</style>
