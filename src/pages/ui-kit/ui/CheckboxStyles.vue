<template>
  <section>
    <h2 class="mb-s">Checkbox</h2>

    <div class="column gap-s">
      <VCheckbox
        label="Checkbox label"
        name="checkbox"
      />

      <VCheckbox
        v-for="(item, i) of checkboxList"
        :key="i"
        class="events-none"
        :class="item"
        :label="item.toUpperCase()"
        :name="'checkbox-' + (i + 1)"
        :is-disabled="item === 'disabled'"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { VCheckbox } from '@/shared/ui/form'
const checkboxList = ['hover', 'focus', 'checked', 'active', 'error', 'disabled'] as const
</script>
