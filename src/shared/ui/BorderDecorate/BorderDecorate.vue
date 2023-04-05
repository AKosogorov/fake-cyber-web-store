<template>
  <span class="border-decorate">
    <component
      :is="getComponentBy(iconLeft)"
      class="border-decorate__icon border-decorate__icon--left"
      :class="'border-decorate__icon--left-' + iconLeft"
    />

    <component
      :is="getComponentBy(iconRight)"
      class="border-decorate__icon border-decorate__icon--right"
      :class="'border-decorate__icon--right-' + iconRight"
    />
  </span>
</template>

<script setup lang="ts">
import {
  IconBorderBottom,
  IconBorderInner,
  IconBorderOuter,
  IconBorderTop
} from '@/shared/ui/icons/borders'
import type { Component } from 'vue'
import { computed } from 'vue'
import type { EIconsName } from '@/shared/ui/BorderDecorate/interface'

defineProps<{
  iconLeft: EIconsName
  iconRight: EIconsName
}>()

const getComponentBy = computed(() => (name: string): Component | null => {
  switch (name) {
    case 'inner':
      return IconBorderInner
    case 'outer':
      return IconBorderOuter
    case 'top':
      return IconBorderTop
    case 'bottom':
      return IconBorderBottom
    default:
      return null
  }
})
</script>

<style lang="scss">
@import 'styles';
</style>
