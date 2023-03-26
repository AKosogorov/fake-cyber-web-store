<template>
  <div class="row gap-xxs">
    <button
      class="reset"
      type="button"
      :disabled="isDisabledButtonMinus"
      @click="onMinus"
    >
      MINUS -
    </button>

    <VInput v-model="modelValue" label="QUANTITY" input-type="number" />

    {{ modelValue }}

    <button class="reset" type="button" @click="onPlus">PLUS +</button>
  </div>
</template>

<script setup lang="ts">
import { VInput } from '@/shared/ui/form-fields'
import { computed } from 'vue'

const emit = defineEmits(['update:modelValue'])

interface IInputQuantity {
  modelValue: number
  minValue?: number
}

const props = withDefaults(defineProps<IInputQuantity>(), {
  minValue: 0
})

const isDisabledButtonMinus = computed(
  () => props.modelValue === props.minValue
)

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
