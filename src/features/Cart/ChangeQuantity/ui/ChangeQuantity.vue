<template>
  <InputQuantity
    :model-value="quantity"
    :min-value="1"
    :is-disabled="isLoading"
    @update:model-value="change"
  />
</template>

<script setup lang="ts">
import { CartModel } from '@/entities/Cart'
import { InputQuantity } from '@/shared/ui/form-fields'
import useLoadingWrap from '@/shared/lib/use/useLoadingWrap'

const props = defineProps<{
  id: number
  quantity: number
}>()

const { updateProductQuantity } = CartModel.useCartStore()
const { isLoading, runWithLoading } = useLoadingWrap()

function change(value: number) {
  if (value === props.quantity) return

  runWithLoading(() => updateProductQuantity(props.id, value))
}
</script>

<style lang="scss">
@import 'styles';
</style>
