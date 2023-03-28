<template>
  <div class="category-page container">
    <h1 class="capitalize">{{ title }}</h1>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const title = computed(() => route.params.category)
</script>

<style lang="scss">
.category-page {
  &__title {
    text-transform: capitalize;
  }
}
</style>
