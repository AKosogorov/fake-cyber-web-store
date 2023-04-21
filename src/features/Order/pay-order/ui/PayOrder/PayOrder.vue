<template>
  <VButton
    txt="PAY"
    @click="openModal"
  />

  <ModalConfirmation
    v-if="isModal"
    :title="title"
    :handler="handleConfirm"
    @confirm="success"
    @close="closeModal"
  />
</template>

<script setup lang="ts">
import { VButton } from '@/shared/ui/buttons'
import { useSingleModal } from '@/shared/lib/use/modal/useSingleModal'
import { ModalConfirmation } from '@/shared/ui/modal'
import type { FirebaseApi } from '@/shared/api'
import { computed } from 'vue'
import { useAlertsStore } from '@/shared/ui/TheAlerts'
import { formatUSD } from '@/shared/lib/utils/format/currency'
import { usePayOrder } from '../../model'

interface IProps {
  orderId: FirebaseApi.TId
  sum: number
}

const props = defineProps<IProps>()

const { showSuccess } = useAlertsStore()
const { isModal, openModal, closeModal } = useSingleModal()

const title = computed(() => `Do you want to pay ${formatUSD(props.sum)} per order?`)

const { payOrder } = usePayOrder()

function handleConfirm() {
  return payOrder({ id: props.orderId, sum: props.sum })
}

function success() {
  showSuccess('Order has been paid')
}
</script>
