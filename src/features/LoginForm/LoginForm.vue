<template>
  <VForm
    button-submit-txt="Sign in"
    :is-submitting="isSubmitting"
    :handler-submit="onSubmit"
  >
    <div class="column gap-m w-100">
      <VeeInput label="Username" name="username" />

      <VeeInput label="Password" name="password" input-type="password" />
    </div>
  </VForm>
</template>

<script setup lang="ts">
import { VeeInput, VForm } from '@/shared/ui/form'

import { useForm } from 'vee-validate'
import { object, string } from 'yup'
import { mockRequest } from '@/shared/lib/mock/mockRequest'

const schema = object({
  username: string().required('please enter your username'),
  password: string().required('please enter your password')
})

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema
})

const onSubmit = handleSubmit(async values => {
  console.log('values', values)
  await mockRequest()
})
</script>

<style lang="scss">
@import 'styles';
</style>
