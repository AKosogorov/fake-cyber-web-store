<template>
  <VCheckbox
    :model-value="inputValue"
    :label="label"
    :name="name"
    :is-disabled="isDisabled"
    :error="error"
    @update:model-value="handleChange"
  />
</template>

<script setup lang="ts">
import { VCheckbox } from '../../base'
import { useField } from 'vee-validate'
import { computed } from 'vue'

interface IVeeCheckbox {
  label: string
  name: string
  isDisabled?: boolean
}

const props = defineProps<IVeeCheckbox>()

const {
  value: inputValue,
  errorMessage,
  handleChange,
  meta
} = useField<boolean>(() => props.name)

const error = computed(() => {
  if (meta.touched) return errorMessage.value
  return ''
})
</script>
