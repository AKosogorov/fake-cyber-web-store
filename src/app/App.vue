<template>
  <div class="app-bg" />
  <EmptyLayout v-if="isEmptyLayout" />

  <MainLayout v-else>
    <template v-slot:header>
      <TheHeader />
    </template>
    <template v-slot:footer>
      <BaseFooter />
    </template>
  </MainLayout>

  <TheBurgerMenu>
    <ProductCategories
      :route-name="AppPages.catalog.category"
      @on-link="closeBurgerMenu"
    />
  </TheBurgerMenu>

  <TheAlerts />
</template>

<script setup lang="ts">
import { MainLayout, EmptyLayout } from '@/shared/ui/layouts'
import { BaseFooter } from '@/shared/ui/base'
import { TheHeader } from '@/widgets/TheHeader'
import { TheAlerts } from '@/shared/ui/TheAlerts'
import { TheBurgerMenu, TheBurgerMenuModel } from '@/shared/ui/TheBurgerMenu'
import { ProductCategories } from '@/entities/Product'

import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { AppPages } from '@/pages'

const route = useRoute()

const isEmptyLayout = computed(() => route.meta.layout === 'empty')

const { closeBurgerMenu } = TheBurgerMenuModel.useTheBurgerMenuStore()
</script>

<style lang="scss">
@import './styles';
</style>
