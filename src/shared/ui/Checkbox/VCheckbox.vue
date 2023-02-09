<template>
  <label class="checkbox row gap-xs" :class="isDisabled && 'disabled events-none'">
    <input
      v-model="modelValue"
      type="checkbox"
      class="checkbox__input"
      :name="name"
      :disabled="isDisabled"
    >

    <span class="checkbox__icon-wrap">
      <IconBg class="checkbox__icon-bg abs-center" />
      <IconChecked class="checkbox__icon-checked abs-center" />
    </span>

    <span class="checkbox__label label">
      {{ label }}
    </span>
  </label>
</template>

<script setup lang="ts">
import IconBg from './icons/IconBg.vue'
import IconChecked from './icons/IconChecked.vue'
import {ref, watch} from "vue";

defineProps<{
  label: string;
  name: string;
  isDisabled?: boolean;
}>()

const modelValue = ref(false)

watch(modelValue, (a) => {
  console.log(a)
})
</script>

<style lang="scss">
@import "styles";
</style>
