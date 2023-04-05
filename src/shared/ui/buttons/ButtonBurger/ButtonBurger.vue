<template>
  <button
    class="button-burger reset"
    :class="isActive && 'is-active'"
    :style="styles"
    type="button"
  >
    <span class="button-burger__line" />
  </button>
</template>

<script setup lang="ts">
import { EAppPixelSize } from '@/shared/lib/types/app'
import { computed } from 'vue'

interface IButtonBurger {
  isActive: boolean
  size?: EAppPixelSize
}

const props = withDefaults(defineProps<IButtonBurger>(), {
  size: EAppPixelSize.lg
})

const styles = computed(() => ({
  width: props.size,
  height: props.size
}))
</script>

<style lang="scss" scoped>
@import 'styles';
</style>
