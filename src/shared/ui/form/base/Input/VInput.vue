<template>
  <div class="input column gap-xxs" :class="classes">
    <label v-if="label" class="input__label label" :for="name">
      {{ label }}
    </label>

    <div class="input__field-wrap">
      <input
        ref="input"
        :value="modelValue"
        class="input__field"
        :type="inputType"
        :name="name"
        :placeholder="placeholder"
        :disabled="isDisabled"
        autocomplete="false"
        @input="onInput"
        @blur="onBlur"
        @change="onChange"
      />
    </div>

    <small v-if="error" class="input__error red">{{ error }}</small>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRefValue } from '@/shared/lib/use/base/useRefValue'
import type { TInputType } from './types'

const emit = defineEmits(['update:modelValue', 'blur', 'change'])

interface IVInput {
  modelValue?: string | number
  label?: string
  name?: string
  isDisabled?: boolean
  placeholder?: string
  inputType?: TInputType
  error?: string
}

const props = withDefaults(defineProps<IVInput>(), {
  modelValue: '',
  inputType: 'text',
  placeholder: ''
})

const classes = computed(() => ({
  'disabled events-none': props.isDisabled,
  error: props.error
}))

const { value: inputValue, setValue } = useRefValue(props.modelValue)

function onInput(event: Event) {
  const value = getValue(event)
  setValue(value)

  emit('update:modelValue', value)
}

function onBlur() {
  emit('blur', inputValue.value)
}

function onChange() {
  emit('change', inputValue.value)
}

function getValue(event: Event) {
  const target = event.target as HTMLInputElement
  return target.value.trim()
}
</script>

<style lang="scss">
@import 'styles/index';
</style>
