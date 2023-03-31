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
      <ProductCategories
        :route-name="AppPages.catalog.category"
        @on-link="closeBurgerMenu"
      />
    </TheBurgerMenu>
  </MainLayout>

  <TheAlerts />
</template>

<script setup lang="ts">
import './styles/index.scss'
import { MainLayout, EmptyLayout } from '@/shared/ui/layouts'
import { TheHeader } from '@/widgets/TheHeader'
import { TheAlerts } from '@/shared/ui/TheAlerts'
import { TheFooter } from '@/widgets/TheFooter'

import { ProductCategories } from '@/entities/Product'
import { TheBurgerMenu, TheBurgerMenuModel } from '@/shared/ui/TheBurgerMenu'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { AppPages } from '@/pages'

const route = useRoute()

const isEmptyLayout = computed(() => route.meta.layout === 'empty')

const { closeBurgerMenu } = TheBurgerMenuModel.useTheBurgerMenuStore()
</script>
