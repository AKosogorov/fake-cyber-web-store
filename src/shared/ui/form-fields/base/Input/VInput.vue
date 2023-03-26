<template>
  <div
    class="input column gap-xxs"
    :class="isDisabled && 'disabled events-none'"
  >
    <label v-if="label" class="input__label label">
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
        @input="onInput"
        @blur="emit('blur')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { HTMLElementEvent } from '@/shared/lib/types'

const emit = defineEmits(['update:modelValue', 'blur'])

interface IVInput {
  modelValue?: string | number
  label?: string
  name?: string
  isDisabled?: boolean
  placeholder?: string | number
  inputType?: string
}

withDefaults(defineProps<IVInput>(), {
  inputType: 'text'
})

function onInput(event: HTMLElementEvent<HTMLInputElement>) {
  const value = event.target.value.trim()

  emit('update:modelValue', value)
}
</script>

<style lang="scss">
@import 'styles/index';
</style>
