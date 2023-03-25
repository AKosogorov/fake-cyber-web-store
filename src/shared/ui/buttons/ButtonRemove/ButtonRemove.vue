<template>
  <ButtonSm class="button-remove">
    <template v-slot:icon>
      <IconTrash :width="iconSize" :height="iconSize" />
    </template>
  </ButtonSm>
</template>

<script setup lang="ts">
import { ButtonSm } from '@/shared/ui/buttons'
import { IconTrash } from '@/shared/ui/icons'
import { EAppPixelSize } from '@/shared/lib/interface/size'

interface IButtonRemove {
  iconSize?: EAppPixelSize
}

withDefaults(defineProps<IButtonRemove>(), {
  iconSize: EAppPixelSize.sm
})
</script>

<style lang="scss">
@import 'styles';
</style>
