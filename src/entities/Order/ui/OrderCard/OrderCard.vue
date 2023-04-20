<template>
  <div class="order-card column gap-xs border-radius shadow-black">
    <OrderCardLocation :location="order.location" :color="color" />

    <div class="order-card__products">
      <slot name="products" :color="color" />
    </div>

    <VInfo label="Order date" :txt="dateCreated" />

    <VInfo class="yellow" label="Delivery date" :txt="dateDelivery" />

    <h5 class="label">Total: {{ total }}</h5>

    <slot name="actions" />
  </div>
</template>

<script setup lang="ts">
import type { FirebaseApi } from '@/shared/api'
import type { IOrderFB } from '../../model'

import { OrderCardLocation } from '../OrderCardLocation'
import { computed } from 'vue'
import { formatUSD } from '@/shared/lib/utils/format/currency'
import { formatDate, formatDateTime } from '@/shared/lib/utils/date/format'
import { VInfo } from '@/shared/ui/text'
import { getColorBy } from '../../lib'

interface IProps {
  order: IOrderFB & FirebaseApi.IBaseItem
}

const props = defineProps<IProps>()

const total = computed(() => formatUSD(props.order.discountedTotal))
const dateCreated = computed(() => formatDate(props.order.createdAt))
const dateDelivery = computed(() => formatDateTime(props.order.dateDelivery))

const color = computed(() => getColorBy(props.order.statusId))
</script>

<style lang="scss">
@import 'styles';
</style>
