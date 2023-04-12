<template>
  <VForm
    button-submit-txt="Sign up"
    :is-submitting="isSubmitting"
    :handler-submit="onSubmit"
  >
    <div class="column gap-m w-100">
      <VeeInput label="Username" name="username" />

      <VeeRadio
        label="Gender"
        name="gender"
        :options="UserModel.USER_GENDER_OPTIONS"
      />

      <VeeInput label="Email" name="email" />

      <VeeInput label="Password" name="password" input-type="password" />

      <VeeInput
        label="Confirm the password"
        name="confirm"
        input-type="password"
      />
    </div>
  </VForm>
</template>

<script setup lang="ts">
import { VeeInput, VForm, VeeRadio } from '@/shared/ui/form'

import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import { object, string, ref as refYup } from 'yup'
import { UserModel, UserApi } from '@/entities/User'
import { SessionApi, SessionModel } from '@/entities/Session'
import type { IRadioItem } from '@/shared/ui/form'
import { useAlertsStore } from '@/shared/ui/TheAlerts'

const session = SessionModel.useSessionStore()
const { showError } = useAlertsStore()

const validationSchema = toTypedSchema(
  object({
    username: string().required().min(3).max(50),
    gender: object().required(),
    email: string().required().email(),
    password: string().required('please enter your password').min(6),
    confirm: string()
      .required('please repeat your password')
      .oneOf([refYup('password')], 'your passwords do not match')
  })
)

const { handleSubmit, isSubmitting } = useForm({
  validationSchema,
  initialValues: {
    username: 'qwerty',
    email: '123@gmail.com',
    password: 'qweqwe',
    confirm: 'qweqwe'
  }
})

const onSubmit = handleSubmit(async values => {
  try {
    const signUpData = {
      email: values.email,
      password: values.password
    }

    const { data } = await SessionApi.singUp(signUpData)
    session.setToken(data.idToken)

    const gender = (values.gender as IRadioItem).value as UserModel.EGender

    const userData = {
      username: values.username,
      gender
    }

    await createUser(data.localId, userData)
  } catch (e: any) {
    showError(e.message)
  }
})

async function createUser(id: string, data: UserModel.IUserFB) {
  const response = await UserApi.createById(id, data)

  session.setUser({ ...response.data, id })
}
</script>

<style lang="scss">
@import 'styles';
</style>
