<template>
  <div class="container">
    <h1 class="mb-s">Login</h1>

    <div v-if="isSubmitting">isSubmitting</div>

    <form class="column gap-l" @submit.prevent="onSubmit">
      <div class="column gap-m">
        <VeeInput label="Username" name="username" />

        <VeeInput label="Password" name="password" />
      </div>

      <div>
        <VButton type="submit" txt="Login" />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { VButton } from '@/shared/ui/buttons'
import { VeeInput } from '@/shared/ui/form'

import { useForm } from 'vee-validate'
import * as Yup from 'yup'
import { mockRequest } from '@/shared/lib/mock/mockRequest'

const schema = Yup.object({
  username: Yup.string().required().min(3),
  password: Yup.string().required().min(4)
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
