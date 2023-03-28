<template>
  <BaseHeader>
    <template v-slot:left>
      <CyberButton txt="TOGGLE" @click="toggleBurgerMenu" />
    </template>

    <template v-slot:right>
      <LinkToCart />
    </template>
  </BaseHeader>
</template>

<script setup lang="ts">
import { BaseHeader } from '@/shared/ui/base'
import { LinkToCart } from '@/entities/Cart'
import CyberButton from '@/shared/ui/cyber/CyberButton/CyberButton.vue'
import { TheBurgerMenuModel } from '@/shared/ui/TheBurgerMenu'

const { toggleBurgerMenu } = TheBurgerMenuModel.useTheBurgerMenuStore()
</script>

<style lang="scss">
@import 'styles';
</style>
