<template>
  <ButtonSm class="button-remove" txt="Refill wallet">
    <template v-slot:icon>
      <IconCreditCardIncome :width="iconSize" :height="iconSize" />
    </template>
  </ButtonSm>
</template>

<script setup lang="ts">
import { ButtonSm } from '@/shared/ui/buttons'
import { IconCreditCardIncome } from '@/shared/ui/icons'
import { EAppPixelSize } from '@/shared/lib/types/app'

interface IProps {
  iconSize?: EAppPixelSize
}

withDefaults(defineProps<IProps>(), {
  iconSize: EAppPixelSize.sm
})
</script>
