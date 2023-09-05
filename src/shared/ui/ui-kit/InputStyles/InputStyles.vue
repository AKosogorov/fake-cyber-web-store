<template>
  <section>
    <h2 class="mb-s">Input</h2>

    <InputQuantity
      v-model="quantity"
      label="QUANTITY LABEL"
      :min-value="1"
      :max-value="10"
      class="mb-s"
    />

    <div class="column gap-s max-w-field">
      <VInput
        label="LABEL"
        name="input"
        placeholder="placeholder"
      />

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
import { InputQuantity, VInput } from '@/shared/ui/form'
import { inputList } from './model'
import { ref } from 'vue'

const quantity = ref(1)
</script>
