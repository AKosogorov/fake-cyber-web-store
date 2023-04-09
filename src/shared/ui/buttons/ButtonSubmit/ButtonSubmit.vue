<template>
  <VButton
    class="button-submit"
    :class="isSubmitting && 'submitting'"
    type="submit"
    :txt="txt"
    :border-left-icon="borderLeftIcon"
    :border-right-icon="borderRightIcon"
    :disabled="isDisabled || isSubmitting"
  >
    <SpinnerLoader
      v-if="isSubmitting"
      class="button-submit__spinner"
      size="sm"
    />
  </VButton>
</template>

<script setup lang="ts">
import { VButton } from '../base'
import { EBorderDecorateIcons } from '@/shared/ui/BorderDecorate'
import { SpinnerLoader } from '@/shared/ui/loaders'

interface IButtonSubmit {
  txt?: string
  borderLeftIcon?: EBorderDecorateIcons
  borderRightIcon?: EBorderDecorateIcons
  isSubmitting: boolean
  isDisabled?: boolean
}

withDefaults(defineProps<IButtonSubmit>(), {
  txt: 'Submit',
  borderLeftIcon: EBorderDecorateIcons.top,
  borderRightIcon: EBorderDecorateIcons.inner,
  isDisabled: false
})
</script>

<style lang="scss">
@import 'styles';
</style>
