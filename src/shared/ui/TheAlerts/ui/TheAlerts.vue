<template>
  <transition-group
    v-show="store.isVisible"
    tag="div"
    class="alerts column gap-s"
    name="alerts"
  >
    <AlertCard v-for="item of store.alerts" :key="item.id" :alert="item" />
  </transition-group>
</template>

<script setup lang="ts">
import AlertCard from '@/shared/ui/TheAlerts/ui/AlertCard'
import { useAlertsStore } from '@/shared/ui/TheAlerts/model/store'

const store = useAlertsStore()
</script>

<style lang="scss">
@import 'styles';
</style>
