<template>
  <header class="header">
    <div class="header__container container between gap-l">
      <div class="header__left row gap-xs">
        <ButtonBurger
          :is-active="burgerStore.isActive"
          @click="burgerStore.openBurgerMenu"
        />

        <CyberLogo class="header__logo" />
      </div>

      <div class="header__right row gap-m">
        <router-link class="link" :to="appRoutes.getDelivery()">
          <IconDelivery class="link__icon" />
        </router-link>

        <router-link class="link" :to="toPersonalArea">
          <IconUser class="link__icon" />
        </router-link>

        <LinkToCart />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { CyberLogo } from '@/shared/ui/cyber'
import { LinkToCart } from '@/entities/Cart'
import { ButtonBurger } from '@/shared/ui/buttons'
import { IconUser, IconDelivery } from '@/shared/ui/icons'

import { computed } from 'vue'
import { useAppRoutes } from '@/app/providers'
import { TheBurgerMenuModel } from '@/shared/ui/TheBurgerMenu'
import { SessionModel } from '@/entities/Session'

const appRoutes = useAppRoutes()
const burgerStore = TheBurgerMenuModel.useTheBurgerMenuStore()
const session = SessionModel.useSessionStore()

const toPersonalArea = computed(() => {
  if (session.user.id) {
    return appRoutes.getPersonalArea()
  }
  return appRoutes.getLogin()
})
</script>

<style lang="scss">
@import 'styles';
</style>
