<template>
  <ModalForm
    :is-submitting="isSubmitting"
    :handler-submit="onSubmit"
    @close="close"
  >
    <VeeInputUsername />
  </ModalForm>
</template>

<script setup lang="ts">
import { VeeInputUsername, UserModel, UserApi } from '@/entities/User'
import { ModalForm } from '@/shared/ui/form'
import { useAlertsStore } from '@/shared/ui/TheAlerts'
import { toTypedSchema } from '@vee-validate/yup'
import { object } from 'yup'
import { useForm } from 'vee-validate'
import { SessionModel } from '@/entities/Session'

const emit = defineEmits(['close'])

interface IProps {
  username: string
}

const props = defineProps<IProps>()

function close() {
  emit('close')
}

const { showError } = useAlertsStore()
const session = SessionModel.useSessionStore()

const validationSchema = toTypedSchema(
  object({
    username: UserModel.validator.username()
  })
)

const { handleSubmit, isSubmitting } = useForm({
  validationSchema,
  initialValues: {
    username: props.username
  }
})

const onSubmit = handleSubmit(async values => {
  try {
    const { data } = await UserApi.patchUsername(session.user.id, values)
    session.user.username = data.username
    close()
  } catch (e: any) {
    showError(e.message)
  }
})
</script>
