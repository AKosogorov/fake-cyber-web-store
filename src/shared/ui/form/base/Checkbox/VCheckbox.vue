<template>
  <label
    class="checkbox row gap-xs"
    :class="classes"
  >
    <input
      type="checkbox"
      class="checkbox__input"
      :name="name"
      :checked="modelValue"
      :disabled="isDisabled"
      @change="onChange"
    />

    <span class="checkbox__icon-wrap">
      <IconBg class="checkbox__icon-bg abs-center" />
      <IconChecked class="checkbox__icon-checked abs-center" />
    </span>

    <span class="checkbox__label label">
      {{ label }}
    </span>

    <small
      v-if="error"
      class="checkbox__error red"
      >{{ error }}</small
    >
  </label>
</template>

<script setup lang="ts">
import IconBg from './icons/IconBg.vue'
import IconChecked from './icons/IconChecked.vue'
import { computed } from 'vue'

const emit = defineEmits(['update:modelValue'])

interface IVCheckbox {
  modelValue?: boolean
  label: string
  name?: string
  isDisabled?: boolean
  error?: string
}

const props = withDefaults(defineProps<IVCheckbox>(), {
  modelValue: false
})

const classes = computed(() => ({
  'disabled events-none': props.isDisabled,
  error: props.error
}))

function onChange() {
  emit('update:modelValue', !props.modelValue)
}
</script>

<style lang="scss">
@import 'styles/index';
</style>
