<template>
  <button class="button-sm row gap-xxs reset" type="button">
    <span class="button-sm__icon-wrap zero-line-h">
      <slot name="icon" />
    </span>

    <slot>
      <span v-if="txt" class="button-sm__text">{{ txt }}</span>
    </slot>
  </button>
</template>

<script setup lang="ts">
interface IButtonSm {
  txt?: string
}

defineProps<IButtonSm>()
</script>

<style lang="scss">
@import 'styles';
</style>
