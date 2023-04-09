<template>
  <VInput
    :model-value="inputValue"
    :label="label"
    :name="name"
    :placeholder="placeholder"
    :input-type="inputType"
    :is-disabled="isDisabled"
    :error="errorMessage"
    @update:model-value="handleChange"
    @blur="handleBlur"
  />
</template>

<script setup lang="ts">
import { VInput } from '../../base'
import { useField } from 'vee-validate'

interface IVeeInput {
  label?: string
  name: string
  isDisabled?: boolean
  placeholder?: string
  inputType?: string
}

const props = withDefaults(defineProps<IVeeInput>(), {
  label: '',
  inputType: 'text',
  placeholder: '',
  isDisabled: false
})

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange
} = useField<string | number>(() => props.name)
</script>
