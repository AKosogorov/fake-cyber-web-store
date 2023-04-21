<template>
  <VForm
    button-submit-txt="Sign in"
    :is-submitting="isSubmitting"
    :handler-submit="onSubmit"
  >
    <div class="column gap-m w-100">
      <VeeInputEmail />

      <VeeInputPassword />
    </div>
  </VForm>
</template>

<script setup lang="ts">
import { VeeInputEmail, VeeInputPassword, VForm } from '@/shared/ui/form'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import { object, string } from 'yup'
import { SessionApi, SessionModel } from '@/entities/Session'
import { useAlertsStore } from '@/shared/ui/TheAlerts'
import { useAuth } from '../../model'
import { useRouter } from 'vue-router'
import { useAppRoutes } from '@/app/providers'

const router = useRouter()
const appRoutes = useAppRoutes()

const { showError } = useAlertsStore()
const session = SessionModel.useSessionStore()
const auth = useAuth()

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

    session.setTokens(data)

    await auth.loadSessionUser(data.localId)
    await auth.loadStoresData()

    goToPersonalArea()
  } catch (e: any) {
    showError(e.message)
  }
})

function goToPersonalArea() {
  router.push(appRoutes.getPersonalArea())
}
</script>
