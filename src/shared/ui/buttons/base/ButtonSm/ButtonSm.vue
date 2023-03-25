<template>
  <button class="button-sm row gap-xxs reset" type="button">
    <span class="button-sm__icon-wrap zero-line-h">
      <slot name="icon" />
    </span>

    <slot>
      <span v-if="text" class="button-sm__text">{{ text }}</span>
    </slot>
  </button>
</template>

<script setup lang="ts">
import type { IBaseButton } from '../interface'

interface IButtonSm extends IBaseButton {}
defineProps<IButtonSm>()
</script>

<style lang="scss">
@import 'styles';
</style>
