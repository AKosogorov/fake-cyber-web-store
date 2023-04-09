<template>
  <div class="radio">
    <div v-if="label" class="radio__label label mb-xxs">{{ label }}</div>

    <div class="radio__list column gap-xxs">
      <RadioItem
        v-for="item of options"
        :key="item.id"
        :item="item"
        :name="name"
        :is-checked="item.value === (modelValue && modelValue.value)"
        :is-error="Boolean(error)"
        @change="onChange"
      />
    </div>
    <small v-if="error" class="radio__error red">{{ error }}</small>
  </div>
</template>

<script setup lang="ts">
import { RadioItem } from './RadioItem'
import type { IRadioItem } from '@/shared/ui/form/base/Radio/types'

const emit = defineEmits(['update:modelValue', 'change'])

interface IVRadio {
  modelValue?: IRadioItem
  options: IRadioItem[]
  label?: string
  name?: string
  isDisabled?: boolean
  error?: string
}

const props = defineProps<IVRadio>()

function onChange(item: IRadioItem) {
  emit('update:modelValue', item)
}
</script>

<style lang="scss">
@import 'styles';
</style>
