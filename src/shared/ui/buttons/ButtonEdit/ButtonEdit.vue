<template>
  <ButtonSm class="button-edit">
    <template v-slot:icon>
      <IconPencil
        :width="iconSize"
        :height="iconSize"
      />
    </template>
  </ButtonSm>
</template>

<script setup lang="ts">
import { ButtonSm } from '@/shared/ui/buttons'
import { IconPencil } from '@/shared/ui/icons'
import { EAppPixelSize } from '@/shared/lib/types/app'

interface IProps {
  iconSize?: EAppPixelSize
}

withDefaults(defineProps<IProps>(), {
  iconSize: EAppPixelSize.sm
})
</script>
