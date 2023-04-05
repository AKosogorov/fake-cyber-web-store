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
        <router-link class="link" to="/">
          <IconDelivery class="link__icon" />
        </router-link>

        <router-link class="link-to-cart link" to="/">
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
import { TheBurgerMenuModel } from '@/shared/ui/TheBurgerMenu'
import { IconUser, IconDelivery } from '@/shared/ui/icons'

const burgerStore = TheBurgerMenuModel.useTheBurgerMenuStore()
</script>

<style lang="scss">
@import 'styles';
</style>
