<template>
  <button class="button reset" type="button">
    <BorderDecorate
      class="button__border-decorate button__border-decorate--after"
      :icon-left="borderLeftIcon"
      :icon-right="borderRightIcon"
    />

    <BorderDecorate
      class="button__border-decorate"
      :icon-left="borderLeftIcon"
      :icon-right="borderRightIcon"
    />

    <span class="button__text label">{{ text }}</span>

    <slot />
  </button>
</template>

<script setup lang="ts">
import BorderDecorate from '@/shared/ui/BorderDecorate'
import { EBorderDecorateIcons } from '@/shared/ui/BorderDecorate'
import type { IBaseButton } from '../interface'

interface IButton extends IBaseButton {
  borderLeftIcon?: EBorderDecorateIcons
  borderRightIcon?: EBorderDecorateIcons
}

withDefaults(defineProps<IButton>(), {
  borderLeftIcon: EBorderDecorateIcons.inner,
  borderRightIcon: EBorderDecorateIcons.outer
})
</script>

<style lang="scss">
@import 'styles';
</style>
