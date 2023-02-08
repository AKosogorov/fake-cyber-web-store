<template>
  <span class="border-decorate">
    <component
        class="border-decorate__icon border-decorate__icon--left"
        :class="'border-decorate__icon--left-' + iconLeft"
        :is="getComponentBy(iconLeft)"
    />

    <component
        class="border-decorate__icon border-decorate__icon--right"
        :class="'border-decorate__icon--right-' + iconRight"
        :is="getComponentBy(iconRight)"
    />
  </span>
</template>

<script setup lang="ts">
import {
  IconBorderBottom,
  IconBorderInner,
  IconBorderOuter,
  IconBorderTop
} from "@/shared/ui/icons/borders";
import type { Component }  from "vue";
import { computed} from "vue";

defineProps<{
  iconLeft: string;
  iconRight: string;
}>();

const getComponentBy = computed(() => (name: string): Component | null => {
  switch (name) {
    case 'inner': return IconBorderInner
    case 'outer': return IconBorderOuter
    case 'top': return IconBorderTop
    case 'bottom': return IconBorderBottom
    default: return null
  }
})
</script>

<style lang="scss">
@import "styles";
</style>
