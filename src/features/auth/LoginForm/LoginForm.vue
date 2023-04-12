<template>
  <VForm
    button-submit-txt="Sign in"
    :is-submitting="isSubmitting"
    :handler-submit="onSubmit"
  >
    <div class="column gap-m w-100">
      <VeeInput label="Email" name="email" />

      <VeeInput label="Password" name="password" input-type="password" />
    </div>
  </VForm>
</template>

<script setup lang="ts">
import { VeeInput, VForm } from '@/shared/ui/form'

import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import { object, string } from 'yup'
import { SessionApi, SessionModel } from '@/entities/Session'
import { useAlertsStore } from '@/shared/ui/TheAlerts'
import { UserApi } from '@/entities/User'

const { showError } = useAlertsStore()
const session = SessionModel.useSessionStore()

const validationSchema = toTypedSchema(
  object({
    email: string().required().email(),
    password: string().required('please enter your password')
  })
)

const { handleSubmit, isSubmitting } = useForm({ validationSchema })

const onSubmit = handleSubmit(async values => {
  try {
    const { data } = await SessionApi.singIn(values)
    const id = data.localId
    session.setToken(id)

    const response = await UserApi.getById(id)
    session.setUser({ ...response.data, id })
  } catch (e: any) {
    showError(e.message)
  }
})
</script>

<style lang="scss">
@import 'styles';
</style>
