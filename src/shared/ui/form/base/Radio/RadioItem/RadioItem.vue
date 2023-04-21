<template>
  <label
    class="radio-item"
    :class="classes"
  >
    <input
      class="radio-item__input"
      type="radio"
      :name="name"
      :value="item.value"
      :checked="isChecked"
      :disabled="isDisabled"
      @change="onChange"
    />
    <span class="radio-item__icon" />
    <span class="radio-item__label">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
import type { IRadioItem } from '../types'
import { computed } from 'vue'

const emit = defineEmits(['change'])

interface IVRadioItem {
  item: IRadioItem
  name?: string
  isDisabled?: boolean
  isError?: boolean
  isChecked: boolean
}

const props = defineProps<IVRadioItem>()

const classes = computed(() => ({
  disabled: props.isDisabled,
  error: props.isError
}))

const label = computed(() => props.item.label || props.item.value)

function onChange() {
  emit('change', props.item)
}
</script>

<style lang="scss">
@import 'styles';
</style>
