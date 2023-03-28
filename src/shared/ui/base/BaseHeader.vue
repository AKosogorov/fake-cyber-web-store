<template>
  <header class="header">
    <div class="container between gap-l">
      <div class="header__left row gap-xs">
        <slot name="left" />
        <CyberLogo />
        <HeaderNav />
      </div>

      <div class="row gap-xxs">
        <slot name="right" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import HeaderNav from '@/shared/ui/navigation/HeaderNav.vue'
import { CyberLogo } from '@/shared/ui/cyber'
</script>

<style></style>
