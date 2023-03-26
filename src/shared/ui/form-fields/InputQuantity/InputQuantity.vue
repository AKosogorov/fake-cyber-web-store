<template>
  <div class="input-quantity row gap-xxs" :class="classes">
    <button
      class="input-quantity__button pseudo-minus reset"
      type="button"
      :disabled="isDisabledButtonMinus"
      @click="onMinus"
    />

    <VInput
      class="input-quantity__input"
      :model-value="modelValue"
      :label="label"
      :placeholder="minValue"
      input-type="number"
      @update:model-value="onInput"
    />

    <button
      class="input-quantity__button pseudo-plus reset"
      type="button"
      :disabled="isDisabledButtonPlus"
      @click="onPlus"
    />
  </div>
</template>

<script setup lang="ts">
import { VInput } from '@/shared/ui/form-fields'
import { computed } from 'vue'

const emit = defineEmits(['update:modelValue'])

interface IInputQuantity {
  modelValue: number
  minValue?: number
  maxValue?: number
  label?: string
}

const props = withDefaults(defineProps<IInputQuantity>(), {
  minValue: 0
})

const classes = computed(() => ({
  labeled: !!props.label
}))

const isDisabledButtonMinus = computed(
  () => props.modelValue === props.minValue
)

const isDisabledButtonPlus = computed(() => props.modelValue === props.maxValue)

function onInput(value: string) {
  if (!value) {
    return setMinValue()
  }

  if (value.startsWith('0')) {
    return setMinValue()
  }

  const normalizeValue = +value

  if (props.maxValue && normalizeValue > props.maxValue) {
    return emit('update:modelValue', props.maxValue)
  }

  emit('update:modelValue', normalizeValue)
}

function setMinValue() {
  emit('update:modelValue', props.minValue)
}

function onPlus() {
  emit('update:modelValue', props.modelValue + 1)
}

function onMinus() {
  emit('update:modelValue', props.modelValue - 1)
}
</script>

<style lang="scss">
@import 'styles';
</style>
