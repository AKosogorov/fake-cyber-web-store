<template>
  <CyberButton txt="ADD TO CART" :disabled="isLoading" @click="onClick" />
</template>

<script setup lang="ts">
import { CyberButton } from '@/shared/ui/cyber'
import { CartModel } from '@/entities/Cart'
import useLoadingWrap from '@/shared/lib/use/useLoadingWrap'

const props = defineProps<{
  id: number
}>()

const { addToCart } = CartModel.useCartStore()
const { isLoading, runWithLoading } = useLoadingWrap()

function onClick() {
  runWithLoading(() => addToCart(props.id))
}
</script>

<style lang="scss">
@import 'styles';
</style>
