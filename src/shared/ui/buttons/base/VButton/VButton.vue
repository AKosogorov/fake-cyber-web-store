<template>
  <button
    class="button reset"
    type="button"
  >
    <BorderDecorate
      class="button__border-decorate button__border-decorate--before"
      :class="beforeBgColor"
      :icon-left="borderLeftIcon"
      :icon-right="borderRightIcon"
    />

    <BorderDecorate
      class="button__border-decorate button__border-decorate--after"
      :class="afterBgColor"
      :icon-left="borderLeftIcon"
      :icon-right="borderRightIcon"
    />

    <span class="button__text label">{{ txt }}</span>

    <slot />
  </button>
</template>

<script setup lang="ts">
import { BorderDecorate, EBorderDecorateIcons } from '@/shared/ui/BorderDecorate'
import { EAppColor } from '@/shared/lib/types/app'

interface IButton {
  txt: string
  borderLeftIcon?: EBorderDecorateIcons
  borderRightIcon?: EBorderDecorateIcons
  beforeBgColor?: EAppColor
  afterBgColor?: EAppColor
}

withDefaults(defineProps<IButton>(), {
  borderLeftIcon: EBorderDecorateIcons.inner,
  borderRightIcon: EBorderDecorateIcons.outer,
  beforeBgColor: EAppColor.blue,
  afterBgColor: EAppColor.black
})
</script>

<style lang="scss">
@import 'styles';
</style>
