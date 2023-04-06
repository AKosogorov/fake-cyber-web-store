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
        :placeholder="String(placeholder)"
        :disabled="isDisabled"
        @input="onInput"
        @blur="emit('blur')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
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
  inputType: 'text',
  placeholder: ''
})

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  const value = target.value.trim()

  emit('update:modelValue', value)
}
</script>

<style lang="scss">
@import 'styles/index';
</style>
