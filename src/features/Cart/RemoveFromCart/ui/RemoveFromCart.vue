<template>
  <ButtonRemove @click="onClick" />
</template>

<script setup lang="ts">
import { ButtonRemove } from '@/shared/ui/buttons'
import { useRemoveFromCart } from '../model'

const props = defineProps<{
  id: number
}>()

const { removeFromCart } = useRemoveFromCart()

function onClick() {
  removeFromCart(props.id)
}
</script>

<style lang="scss">
@import 'styles';
</style>
