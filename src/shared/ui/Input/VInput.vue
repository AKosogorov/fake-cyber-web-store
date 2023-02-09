<template>
  <div class="input column gap-xxs" :class="isDisabled && 'disabled events-none'">
    <label
        v-if="label"
        class="input__label label"
    >
      {{ label }}
    </label>

    <div class="input__field-wrap">
      <input
        class="input__field"
        :name="name"
        ref="input"
        :placeholder="placeholder"
        :disabled="isDisabled"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label?: string;
  name?: string;
  isDisabled?: boolean;
  placeholder?: string;
}>()
</script>

<style lang="scss">
@import "styles";
</style>
