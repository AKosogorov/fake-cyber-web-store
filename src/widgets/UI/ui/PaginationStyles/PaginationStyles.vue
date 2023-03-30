<template>
  <section>
    <h2 class="mb-s">Pagination</h2>

    <VPagination
      :model-value="page"
      :count="count"
      @update:model-value="logger"
    />
  </section>
</template>

<script setup lang="ts">
import { VPagination } from '@/shared/ui/pagination'
import { ref } from 'vue'

const page = ref(1)
const count = ref(10)

function logger(value: number) {
  console.log(value)
  page.value = value
}
</script>

<style lang="scss">
@import 'styles';
</style>
