<template>
  <div class="app-bg" />
  <EmptyLayout v-if="isEmptyLayout" />

  <MainLayout v-else>
    <template v-slot:header>
      <TheHeader />
    </template>
    <template v-slot:footer>
      <baseFooter />
    </template>
  </MainLayout>

  <TheAlerts />
</template>

<script setup lang="ts">
import { MainLayout, EmptyLayout } from '@/shared/ui/layouts'
import { baseFooter } from '@/shared/ui/base'
import { TheHeader } from '@/widgets/TheHeader'
import { TheAlerts } from '@/shared/ui/TheAlerts'

import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const isEmptyLayout = computed(() => route.meta.layout === 'empty')
</script>

<style lang="scss">
@import './styles';
</style>
