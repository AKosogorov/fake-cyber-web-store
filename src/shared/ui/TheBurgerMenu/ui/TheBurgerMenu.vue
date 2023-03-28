<template>
  <div
    v-if="store.isActive"
    class="burger-menu"
    @click.self="store.closeBurgerMenu"
  >
    <div class="burger-menu__content">
      <ButtonCross
        class="burger-menu__button-close"
        @click="store.closeBurgerMenu"
      />

      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ButtonCross } from '@/shared/ui/buttons'
import { useTheBurgerMenuStore } from '../model'

const store = useTheBurgerMenuStore()
</script>

<style lang="scss">
@import 'styles';
</style>
