<template>
  <BaseModal
    class-name="modal-confirmation"
    :title="title"
    @close="close"
  >
    <slot />

    <div class="center gap-xxs">
      <ButtonSubmit
        class="modal-confirmation__button-confirm"
        :is-submitting="isLoading"
        txt="OK"
        @click="onConfirm"
      />

      <VButton
        class="modal-confirmation__button-reject"
        txt="Cancel"
        :border-left-icon="EBorderDecorateIcons.outer"
        :border-right-icon="EBorderDecorateIcons.top"
        @click="onReject"
      />
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import { BaseModal } from '../base'
import { ButtonSubmit, VButton } from '@/shared/ui/buttons'
import { useAlertsStore } from '@/shared/ui/TheAlerts'
import { useIsLoading } from '@/shared/lib/use/useIsLoading'
import { EBorderDecorateIcons } from '@/shared/ui/BorderDecorate'

const emit = defineEmits(['close', 'confirm', 'reject'])

interface IProps {
  title?: string
  handler: () => Promise<void>
}

const props = withDefaults(defineProps<IProps>(), {
  title: 'Are you sure?'
})

const { showError } = useAlertsStore()
const { isLoading, startLoading, finishLoading } = useIsLoading()

async function onConfirm() {
  try {
    startLoading()

    await props.handler()

    close()
    emit('confirm')
  } catch (e: any) {
    showError(e.message)
  } finally {
    finishLoading()
  }
}

function onReject() {
  close()
  emit('reject')
}

function close() {
  emit('close')
}
</script>
<style lang="scss">
@import 'style';
</style>
