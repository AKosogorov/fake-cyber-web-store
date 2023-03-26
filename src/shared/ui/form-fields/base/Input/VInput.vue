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
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])

interface IVInput {
  modelValue?: string | number
  label?: string
  name?: string
  isDisabled?: boolean
  placeholder?: string
  inputType?: string
}

withDefaults(defineProps<IVInput>(), {
  inputType: 'text'
})

function onInput(event) {
  console.log('ON INPUT', event.target.value)
}
</script>

<style lang="scss">
@import 'styles/index';
</style>
