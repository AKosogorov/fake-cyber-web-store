<template>
  <BaseHeader>
    <template v-slot:left>
      <CyberButton txt="CATALOG" @click="openBurgerMenu" />
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

const { openBurgerMenu } = TheBurgerMenuModel.useTheBurgerMenuStore()
</script>

<style lang="scss">
@import 'styles';
</style>
