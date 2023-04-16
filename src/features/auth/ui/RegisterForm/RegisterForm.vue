<template>
  <VForm
    button-submit-txt="Sign up"
    :is-submitting="isSubmitting"
    :handler-submit="onSubmit"
  >
    <div class="column gap-m w-100">
      <VeeInputUsername />

      <VeeRadioGender />

      <VeeInputEmail />

      <VeeInputPassword />

      <VeeInputPasswordConfirm />
    </div>
  </VForm>
</template>

<script setup lang="ts">
import {
  VeeInputEmail,
  VeeInputPassword,
  VeeInputPasswordConfirm,
  VForm
} from '@/shared/ui/form'

import { useRouter } from 'vue-router'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import { object, string, ref as refYup } from 'yup'
import { useAppRoutes } from '@/app/providers'
import {
  UserModel,
  UserApi,
  VeeRadioGender,
  VeeInputUsername
} from '@/entities/User'
import { SessionApi, SessionModel } from '@/entities/Session'
import type { IRadioItem } from '@/shared/ui/form'
import type { FirebaseApi } from '@/shared/api'
import { useAlertsStore } from '@/shared/ui/TheAlerts'
import { emailRegexp } from '@/shared/lib/regexp'

const router = useRouter()
const appRoutes = useAppRoutes()
const session = SessionModel.useSessionStore()
const { showError } = useAlertsStore()

const validationSchema = toTypedSchema(
  object({
    username: string().required().min(3).max(50),
    gender: object().required(),
    email: string()
      .required()
      .matches(emailRegexp, 'this field must be a valid email'),
    password: string().required('please enter your password').min(6),
    confirm: string()
      .required('please repeat your password')
      .oneOf([refYup('password')], 'your passwords do not match')
  })
)

const { handleSubmit, isSubmitting } = useForm({ validationSchema })

const onSubmit = handleSubmit(async values => {
  try {
    const signUpData = {
      email: values.email,
      password: values.password
    }

    const { data } = await SessionApi.singUp(signUpData)
    session.setTokens(data)

    const userData: UserModel.IUserFB = {
      username: values.username,
      email: values.email,
      gender: (values.gender as IRadioItem).value as UserModel.EGender
    }

    await createAndSetUser(data.localId, userData)

    goToPersonalArea()
  } catch (e: any) {
    showError(e.message)
  }
})

async function createAndSetUser(id: FirebaseApi.TId, data: UserModel.IUserFB) {
  const response = await UserApi.createById(id, data)

  session.setUser({ ...response.data, id })
}

function goToPersonalArea() {
  router.push(appRoutes.getPersonalArea())
}
</script>
