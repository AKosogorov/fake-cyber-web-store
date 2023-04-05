<template>
  <header class="header">
    <div class="container between gap-l">
      <div class="header__left row gap-xs">
        <ButtonBurger
          :is-active="burgerStore.isActive"
          @click="burgerStore.openBurgerMenu"
        />

        <CyberLogo />
      </div>

      <div class="row gap-xxs">
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

const burgerStore = TheBurgerMenuModel.useTheBurgerMenuStore()
</script>

<style lang="scss">
@import 'styles';
</style>
