<template>
  <ModalForm
    :is-submitting="isSubmitting"
    :handler-submit="onSubmit"
    @close="close"
  >
    <VeeRadioGender />
  </ModalForm>
</template>

<script setup lang="ts">
import { VeeRadioGender, UserModel, UserApi } from '@/entities/User'
import { ModalForm } from '@/shared/ui/form'
import type { IRadioItem } from '@/shared/ui/form'
import { useAlertsStore } from '@/shared/ui/TheAlerts'
import { toTypedSchema } from '@vee-validate/yup'
import { object } from 'yup'
import { useForm } from 'vee-validate'
import { SessionModel } from '@/entities/Session'

const emit = defineEmits(['close'])

interface IProps {
  gender: UserModel.EGender
}

const props = defineProps<IProps>()

function close() {
  emit('close')
}

const { showError } = useAlertsStore()
const session = SessionModel.useSessionStore()

const validationSchema = toTypedSchema(
  object({
    gender: UserModel.validator.gender()
  })
)

const { handleSubmit, isSubmitting } = useForm({
  validationSchema,
  initialValues: {
    gender: getInitial(props.gender)
  }
})

const onSubmit = handleSubmit(async values => {
  try {
    const patchData = {
      gender: (values.gender as IRadioItem).value as UserModel.EGender
    }

    const { data } = await UserApi.patchGender(session.user.id, patchData)
    session.user.gender = data.gender
    close()
  } catch (e: any) {
    showError(e.message)
  }
})

function getInitial(gender: UserModel.EGender) {
  if (gender === 'male') {
    return UserModel.USER_GENDER_OPTIONS[0]
  }
  return UserModel.USER_GENDER_OPTIONS[1]
}
</script>
