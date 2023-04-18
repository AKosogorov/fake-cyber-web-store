<template>
  <ButtonRemove @click="onClick" />
</template>

<script setup lang="ts">
import { ButtonRemove } from '@/shared/ui/buttons'
import { useRemoveFromCart } from '../model'
import { useAlertsStore } from '@/shared/ui/TheAlerts'

const props = defineProps<{
  id: number
}>()

const { removeFromCart } = useRemoveFromCart()
const { showError } = useAlertsStore()

async function onClick() {
  try {
    await removeFromCart(props.id)
  } catch (e: any) {
    showError(e.message)
  }
}
</script>

<style lang="scss">
@import 'styles';
</style>
