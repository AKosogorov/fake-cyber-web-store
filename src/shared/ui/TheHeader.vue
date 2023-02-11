<template>
  <header class="header">
    <div class="container column gap-s">
      <HeaderNav />

      <div class="row gap-xxs">
        <button @click="showError('ERRORRRRRR')">ADD ERROR</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import HeaderNav from '@/shared/ui/navigation/HeaderNav.vue'
import { useAlertsStore } from '@/shared/ui/TheAlerts/model/store'
const { showError } = useAlertsStore()
</script>

<style></style>
