<template>
  <ButtonSm class="button-like" :class="isLike && 'liked'">
    <template v-slot:icon>
      <IconHeart :width="iconSize" :height="iconSize" />
    </template>
  </ButtonSm>
</template>

<script setup lang="ts">
import { ButtonSm } from '@/shared/ui/buttons'
import { IconHeart } from '@/shared/ui/icons'
import { EAppPixelSize } from '@/shared/lib/types/app'

interface IButtonLike {
  isLike: boolean
  iconSize?: EAppPixelSize
}

withDefaults(defineProps<IButtonLike>(), {
  iconSize: EAppPixelSize.sm
})
</script>

<style lang="scss">
@import 'styles';
</style>
