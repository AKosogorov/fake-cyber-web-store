<template>
  <BaseHeader>
    <template v-slot:left>
      <ButtonBurger
        :is-active="burgerStore.isActive"
        @click="burgerStore.openBurgerMenu"
      />
    </template>

    <template v-slot:right>
      <LinkToCart />
    </template>
  </BaseHeader>
</template>

<script setup lang="ts">
import { BaseHeader } from '@/shared/ui/base'
import { LinkToCart } from '@/entities/Cart'
import { ButtonBurger } from '@/shared/ui/buttons'
import { TheBurgerMenuModel } from '@/shared/ui/TheBurgerMenu'

const burgerStore = TheBurgerMenuModel.useTheBurgerMenuStore()
</script>

<style lang="scss">
@import 'styles';
</style>
