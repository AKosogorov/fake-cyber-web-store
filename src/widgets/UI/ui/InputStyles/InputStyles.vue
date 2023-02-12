<template>
  <section>
    <h2 class="mb-s">Input</h2>

    <div class="column gap-s max-w-field">
      <VInput label="LABEL" name="input" placeholder="placeholder" />

      <VInput
        v-for="(item, i) of inputList"
        :key="i"
        class="events-none"
        :class="item"
        :label="item.toUpperCase()"
        :name="'input-' + (i + 1)"
        :placeholder="item"
        :is-disabled="item === 'disabled'"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { VInput } from '@/shared/ui/form-fields'
import { inputList } from './model'
</script>
