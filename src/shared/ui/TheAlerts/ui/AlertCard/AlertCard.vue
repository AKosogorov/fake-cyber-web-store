<template>
  <div class="alert-card">
    <div class="alert-card__box" :class="'alert-card__box--' + alert.status">
      <h5 class="alert-card__status">{{ alert.status }}</h5>
      <p class="alert-card__body">{{ alert.message }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IAlert } from '@/shared/ui/TheAlerts/model/interface'

defineProps<{
  alert: IAlert
}>()
</script>

<style lang="scss">
@import 'styles';
</style>
