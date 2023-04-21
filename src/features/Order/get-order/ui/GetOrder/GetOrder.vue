<template>
  <ButtonSubmit
    txt="GET ORDER"
    :border-left-icon="EBorderDecorateIcons.inner"
    :border-right-icon="EBorderDecorateIcons.inner"
    :after-bg-color="EAppColor.greenDark"
    :is-submitting="isLoading"
    @click="wrappedPromise"
  />
</template>

<script setup lang="ts">
import { ButtonSubmit } from '@/shared/ui/buttons'
import type { FirebaseApi } from '@/shared/api'
import { useAlertsStore } from '@/shared/ui/TheAlerts'
import { useGetOrder } from '../../model'
import { usePromiseWrap } from '@/shared/lib/use/usePromiseWrap'
import { EBorderDecorateIcons } from '@/shared/ui/BorderDecorate'
import { EAppColor } from '@/shared/lib/types/app'

interface IProps {
  orderId: FirebaseApi.TId
}

const props = defineProps<IProps>()

const { showSuccess } = useAlertsStore()

const { getOrder } = useGetOrder()

const { isLoading, wrappedPromise } = usePromiseWrap(request)

async function request() {
  await getOrder(props.orderId)
  showSuccess('Thanks for your order')
}
</script>
