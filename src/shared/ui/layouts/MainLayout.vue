<template>
  <TheHeader />

  <main>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import TheHeader from "@/shared/ui/TheHeader.vue";
</script>
