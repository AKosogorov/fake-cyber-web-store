<template>
  <div class="order-card-location column gap-xxs">
    <IconPin class="order-card-location__icon" :class="color" />

    <span>{{ deliveryType }}</span>

    <address v-if="location.address">{{ location.address }}</address>
  </div>
</template>

<script setup lang="ts">
import type { IOrderLocation } from '../../model'
import { ORDER_DELIVERY_TYPES } from '../../model'
import { computed } from 'vue'
import { IconPin } from '@/shared/ui/icons'
import { EAppColor } from '@/shared/lib/types/app'

interface IProps {
  location: IOrderLocation
  color: EAppColor
}

const props = defineProps<IProps>()

const deliveryType = computed(
  () => ORDER_DELIVERY_TYPES[props.location.deliveryType - 1].name
)
</script>

<style lang="scss">
@import 'styles';
</style>
