<template>
  <BaseModal @close="close" :title="title">
    <VForm :handler-submit="handlerSubmit">
      <slot />

      <template v-slot:button-submit>
        <CyberButtonSubmit
          :is-submitting="isSubmitting"
          class="w-100 z-idx-1"
          txt="SAVE"
        />
      </template>
    </VForm>
  </BaseModal>
</template>

<script setup lang="ts">
import { BaseModal } from '@/shared/ui/modal'
import { CyberButtonSubmit } from '@/shared/ui/cyber'
import { VForm } from '@/shared/ui/form'

const emit = defineEmits(['close'])

interface IProps {
  title?: string
  handlerSubmit: (e?: Event | undefined) => Promise<Promise<void> | undefined>
  isSubmitting?: boolean
  buttonSubmitTxt?: string
}

defineProps<IProps>()

function close() {
  emit('close')
}
</script>

<style lang="scss">
@import 'styles';
</style>
