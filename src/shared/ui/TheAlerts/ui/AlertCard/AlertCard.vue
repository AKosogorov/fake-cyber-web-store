<template>
  <div class="alert-card" :class="alert.status">
    <CyberCard />
    <h5 class="alert-card__status">{{ alert.status }}</h5>
    <p class="alert-card__body">{{ alert.message }}</p>
  </div>
</template>

<script setup lang="ts">
import type { IAlert } from '@/shared/ui/TheAlerts/model/interface'
import { CyberCard } from '@/shared/ui/cyber'
defineProps<{
  alert: IAlert
}>()
</script>

<style lang="scss">
@import 'styles';
</style>
