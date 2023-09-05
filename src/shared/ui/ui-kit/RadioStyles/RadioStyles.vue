<template>
  <section class="column gap-s">
    <h2>Radio</h2>

    <VRadio
      v-model="value"
      label="RADIO LABEL"
      name="radio"
      :options="options"
    />
  </section>
</template>

<script setup lang="ts">
import { VRadio } from '@/shared/ui/form'
import { ref } from 'vue'

const options = Array.from({ length: 4 }, (_, i) => {
  const id = ++i

  return {
    id,
    value: 'Value ' + id
  }
})

const value = ref()
</script>
