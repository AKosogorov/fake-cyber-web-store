<template>
  <div class="app-bg" />
  <EmptyLayout v-if="isEmptyLayout" />

  <MainLayout v-else>
    <template v-slot:header>
      <TheHeader />
    </template>

    <template v-slot:footer>
      <TheFooter />
    </template>

    <TheBurgerMenu>
      <ProductCategories />
    </TheBurgerMenu>
  </MainLayout>

  <TheAlerts />
</template>

<script setup lang="ts">
import './styles/index.scss'

import { TheHeader } from '@/widgets/TheHeader'
import { TheFooter } from '@/widgets/TheFooter'
import { MainLayout, EmptyLayout } from '@/shared/ui/layouts'
import { TheBurgerMenu } from '@/shared/ui/TheBurgerMenu'
import { TheAlerts } from '@/shared/ui/TheAlerts'

import { computed, provide } from 'vue'
import { useRoute } from 'vue-router'
import { EAppProviders, AppRoutes, useAppStore } from './providers'
import { ProductCategories } from '@/entities/Product'

provide(EAppProviders.AppRoutes, AppRoutes)

useAppStore()

const route = useRoute()

const isEmptyLayout = computed(() => route.meta.layout === 'empty')
</script>
