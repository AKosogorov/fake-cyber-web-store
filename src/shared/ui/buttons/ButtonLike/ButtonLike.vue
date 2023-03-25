<template>
  <ButtonSm class="button-like" :class="isLike && 'liked'">
    <template v-slot:icon>
      <IconHeart :width="iconSize" :height="iconSize" />
    </template>
  </ButtonSm>
</template>

<script setup lang="ts">
import { IconHeart } from '@/shared/ui/icons'
import { EAppPixelSize } from '@/shared/lib/interface/size'
import { ButtonSm } from '@/shared/ui/buttons'

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
