<template>
  <CyberButton
    class="cyber-button-submit"
    :class="isSubmitting && 'submitting'"
    type="submit"
    :txt="txt"
    :disabled="isDisabled || isSubmitting"
  >
    <BarsLoader v-if="isSubmitting" class="cyber-button-submit__loader" />
  </CyberButton>
</template>

<script setup lang="ts">
import { CyberButton } from '../CyberButton'
import { BarsLoader } from '@/shared/ui/loaders'

interface IButtonSubmit {
  txt?: string
  isSubmitting: boolean
  isDisabled?: boolean
}

withDefaults(defineProps<IButtonSubmit>(), {
  txt: 'Submit',
  isDisabled: false
})
</script>

<style lang="scss">
@import 'styles';
</style>
