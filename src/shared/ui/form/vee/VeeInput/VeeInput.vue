<template>
  <VInput
    :model-value="inputValue"
    :label="label"
    :name="name"
    :placeholder="placeholder"
    :input-type="inputType"
    :is-disabled="isDisabled"
    :error="error"
    @update:model-value="handleChange"
    @blur="handleBlur"
  />
</template>

<script setup lang="ts">
import { VInput } from '../../base'
import { useField } from 'vee-validate'
import { computed } from 'vue'
import type { TInputType } from '../../base'

interface IVeeInput {
  label?: string
  name: string
  isDisabled?: boolean
  placeholder?: string
  inputType?: TInputType
}

const props = defineProps<IVeeInput>()

const { value: inputValue, errorMessage, handleBlur, handleChange, meta } = useField<string | number>(() => props.name)

const error = computed(() => {
  if (meta.touched) return errorMessage.value
  return ''
})
</script>
