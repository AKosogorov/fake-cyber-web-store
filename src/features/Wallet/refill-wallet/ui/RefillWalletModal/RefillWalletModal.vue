<template>
  <ModalForm
    title="Refill wallet"
    button-submit-txt="REFILL"
    :is-submitting="isSubmitting"
    :handler-submit="onSubmit"
    @close="close"
  >
    <VeeInput
      label="Sum $"
      name="sum"
      input-type="number"
      placeholder="0"
    />
  </ModalForm>
</template>

<script setup lang="ts">
import { ModalForm, VeeInput } from '@/shared/ui/form'

import { number, object } from 'yup'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import { useAlertsStore } from '@/shared/ui/TheAlerts'
import { useRefillWallet } from '../../model'

const emit = defineEmits(['close'])

function close() {
  emit('close')
}

const { refill } = useRefillWallet()
const { showError } = useAlertsStore()

const validationSchema = toTypedSchema(
  object({
    sum: number().required().positive().min(1).integer().typeError('sum is a required field')
  })
)

const { handleSubmit, isSubmitting } = useForm({ validationSchema })

const onSubmit = handleSubmit(async values => {
  try {
    await refill(values.sum)
    close()
  } catch (e: any) {
    showError(e.message)
  }
})
</script>
