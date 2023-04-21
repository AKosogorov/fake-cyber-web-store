<template>
  <VRadio
    :model-value="inputValue"
    :label="label"
    :options="options"
    :name="name"
    :is-disabled="isDisabled"
    :error="error"
    @update:model-value="handleChange"
  />
</template>

<script setup lang="ts">
import { VRadio } from '../../base'
import { computed } from 'vue'
import { useField } from 'vee-validate'
import type { IRadioItem } from '../../base'

interface IVeeRadio {
  options: IRadioItem[]
  label?: string
  name: string
  isDisabled?: boolean
}

const props = defineProps<IVeeRadio>()

const { value: inputValue, errorMessage, handleChange, meta } = useField<IRadioItem>(() => props.name)

const error = computed(() => {
  if (meta.touched) return errorMessage.value
  return ''
})
</script>
