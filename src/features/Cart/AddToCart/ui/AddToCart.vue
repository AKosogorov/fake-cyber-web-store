<template>
  <router-link
    v-if="isInCart"
    :to="appRoutes.getCart()"
  >
    <CyberButton
      class="w-100"
      txt="Go to basket"
    />
  </router-link>

  <CyberButton
    v-else
    txt="ADD TO CART"
    :disabled="isLoading"
    @click="onClick"
  />
</template>

<script setup lang="ts">
import { CyberButton } from '@/shared/ui/cyber'
import { CartModel } from '@/entities/Cart'
import useLoadingWrap from '@/shared/lib/use/useLoadingWrap'
import { useAppRoutes } from '@/app/providers'
import { computed } from 'vue'
import { useAddToCart } from '@/features/Cart/AddToCart/model'

const props = defineProps<{
  id: number
}>()

const appRoutes = useAppRoutes()
const { isLoading, runWithLoading } = useLoadingWrap()

const { cartHasProduct } = CartModel.useCartStore()
const { addToCart } = useAddToCart()

const isInCart = computed(() => cartHasProduct(props.id))

function onClick() {
  runWithLoading(() => addToCart(props.id))
}
</script>

<style lang="scss">
@import 'styles';
</style>
