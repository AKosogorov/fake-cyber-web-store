<template>
  <button class="button-like row gap-xxs reset" type="button">
    <span
      class="button-like__icon-wrap zero-line-h"
      :class="isLike && 'button-like__icon-wrap--fill'"
    >
      <IconHeart :width="iconSize" :height="iconSize" />
    </span>

    <span v-if="text">{{ text }}</span>
  </button>
</template>

<script setup lang="ts">
import IconHeart from '@/shared/ui/icons/IconHeart.vue'
import { EAppPixelSize } from '@/shared/lib/interface/size'

interface IButtonLike {
  text?: string
  isLike: boolean
  iconSize?: EAppPixelSize
}

withDefaults(defineProps<IButtonLike>(), {
  text: '',
  iconSize: EAppPixelSize.sm
})
</script>

<style lang="scss">
@import 'styles';
</style>
