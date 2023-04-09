<template>
  <InputQuantity
    :model-value="modelQuantity"
    :min-value="1"
    :is-disabled="isLoading"
    @update:model-value="change"
  />
</template>

<script setup lang="ts">
import { CartModel } from '@/entities/Cart'
import { InputQuantity } from '@/shared/ui/form'
import useLoadingWrap from '@/shared/lib/use/useLoadingWrap'
import { onBeforeMount, watch } from 'vue'
import { useRefNumber } from '@/shared/lib/use/base/useRefNumber'
import useTimeout from '@/shared/lib/use/useTimeout'

const props = defineProps<{
  id: number
  quantity: number
}>()

const { updateProductQuantity } = CartModel.useCartStore()
const { isLoading, runWithLoading } = useLoadingWrap()

const { value: modelQuantity, setValue: setQuantity } = useRefNumber(1)

watch(() => props.quantity, syncQuantity)

onBeforeMount(syncQuantity)

const { setTimeoutId, clearTimeoutId } = useTimeout(updateQuantity, 300)

function change(value: number) {
  clearTimeoutId()
  if (value === props.quantity) return

  setQuantity(value)
  setTimeoutId()
}

function syncQuantity() {
  setQuantity(props.quantity)
}

function updateQuantity() {
  runWithLoading(() => updateProductQuantity(props.id, modelQuantity.value))
}
</script>

<style lang="scss">
@import 'styles';
</style>
