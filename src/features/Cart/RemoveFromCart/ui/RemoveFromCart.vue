<template>
  <ButtonRemove @click="onClick" />
</template>

<script setup lang="ts">
import { ButtonRemove } from '@/shared/ui/buttons'
import { CartModel } from '@/entities/Cart'

const props = defineProps<{
  id: number
}>()

const { removeFromCart } = CartModel.useCartStore()

function onClick() {
  removeFromCart(props.id)
}
</script>

<style lang="scss">
@import 'styles';
</style>
