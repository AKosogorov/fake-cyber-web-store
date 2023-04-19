<template>
  <BaseModal :title="title" @close="close">
    <VForm :handler-submit="handlerSubmit">
      <slot />

      <template v-slot:button-submit>
        <CyberButtonSubmit
          :is-submitting="isSubmitting"
          class="w-100 z-idx-1"
          :txt="buttonSubmitTxt"
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

withDefaults(defineProps<IProps>(), {
  isSubmitting: false,
  buttonSubmitTxt: 'SAVE'
})

function close() {
  emit('close')
}
</script>

<style lang="scss">
@import 'styles';
</style>
