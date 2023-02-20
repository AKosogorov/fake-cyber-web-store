<template>
  <header class="header">
    <div class="container between gap-l">
      <HeaderNav />

      <div class="row gap-xxs">
        <slot />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import HeaderNav from '@/shared/ui/navigation/HeaderNav.vue'
</script>

<style></style>
