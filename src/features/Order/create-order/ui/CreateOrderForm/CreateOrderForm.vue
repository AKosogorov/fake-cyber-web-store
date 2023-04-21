<template>
  <VForm
    class="gap-xs"
    :handler-submit="onSubmit"
  >
    <VeeCheckbox
      name="isPrepaid"
      label="Pay immediately"
    />

    <template v-slot:button-submit>
      <CyberButtonSubmit
        class="w-100"
        txt="ORDER"
        :is-submitting="isSubmitting"
      />
    </template>
  </VForm>
</template>

<script setup lang="ts">
import { VForm, VeeCheckbox } from '@/shared/ui/form'
import { CyberButtonSubmit } from '@/shared/ui/cyber'

import { useForm } from 'vee-validate'
import { boolean, object } from 'yup'
import { toTypedSchema } from '@vee-validate/yup'
import { useAlertsStore } from '@/shared/ui/TheAlerts'
import { useCreateOrder } from '../../model'

const { showError, showSuccess } = useAlertsStore()
const { createOrder } = useCreateOrder()

const validationSchema = toTypedSchema(
  object({
    isPrepaid: boolean()
  })
)

const { handleSubmit, isSubmitting } = useForm({
  validationSchema,
  initialValues: { isPrepaid: false }
})

const onSubmit = handleSubmit(async formData => {
  try {
    await createOrder({
      isPrepaid: !!formData.isPrepaid
    })
    showSuccess('Order successfully created')
  } catch (e: any) {
    showError(e.message)
  }
})
</script>
