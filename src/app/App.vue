<template>
  <component :is="layout" />

  <TheAlerts />
</template>

<script setup lang="ts">
import MainLayout from '@/shared/ui/layouts/MainLayout.vue'
import EmptyLayout from '@/shared/ui/layouts/EmptyLayout.vue'
import { TheAlerts } from '@/shared/ui/TheAlerts'

import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const layout = computed(() => {
  switch (route.meta.layout) {
    case 'empty':
      return EmptyLayout
    default:
      return MainLayout
  }
})
</script>

<style lang="scss">
@import './styles';
</style>
