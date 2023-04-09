<template>
  <div class="container">
    <h1 class="mb-s">Login</h1>

    <form class="column gap-l" @submit="onSubmit">
      <div class="column gap-m">
        <VeeInput label="Username" name="username" />

        <VeeInput label="Password" name="password" input-type="password" />

        <VeeInput
          label="Confirm the password"
          name="confirm"
          input-type="password"
        />
      </div>

      <div>
        <VButton type="submit" txt="Login" />
      </div>
    </form>

    <div v-if="isSubmitting">isSubmitting</div>
  </div>
</template>

<script setup lang="ts">
import { VButton } from '@/shared/ui/buttons'
import { VeeInput } from '@/shared/ui/form'

import { useForm } from 'vee-validate'
import { object, string, ref as refYup } from 'yup'
import { mockRequest } from '@/shared/lib/mock/mockRequest'

const schema = object({
  username: string().required().min(3),
  password: string().required('please enter your password').min(4),
  confirm: string()
    .required('please repeat your password')
    .oneOf([refYup('password')], 'your passwords do not match')
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
