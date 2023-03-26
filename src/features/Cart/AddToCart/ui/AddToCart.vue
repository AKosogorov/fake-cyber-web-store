<template>
  <CyberButton txt="ADD TO CART" @click="onClick" />
</template>

<script setup lang="ts">
import { CyberButton } from '@/shared/ui/cyber'
import { CartModel } from '@/entities/Cart'

const props = defineProps<{
  id: number
}>()

const { addToCart } = CartModel.useCartStore()

function onClick() {
  addToCart(props.id)
}
</script>

<style lang="scss">
@import 'styles';
</style>
