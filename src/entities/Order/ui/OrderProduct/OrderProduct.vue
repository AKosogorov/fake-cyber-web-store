<template>
  <div class="order-product column gap-xxs">
    <CyberCard :color="color" />

    <router-link
      class="link"
      :to="appRoutes.getProduct(product.id)"
      draggable="false"
    >
      <h4 class="fsz-20">{{ product.title }}</h4>
    </router-link>

    <VInfo label="Quantity" :txt="product.quantity" />
    <VInfo label="Price" :txt="price" />
  </div>
</template>

<script setup lang="ts">
import type { CartModel } from '@/entities/Cart'
import { computed } from 'vue'
import { useAppRoutes } from '@/app/providers'
import { CyberCard } from '@/shared/ui/cyber'
import { VInfo } from '@/shared/ui/text'
import { formatUSD } from '@/shared/lib/utils/format/currency'
import type { EAppColor } from '@/shared/lib/types/app'

interface IProps {
  product: CartModel.ICartProduct
  color: EAppColor
}

const props = defineProps<IProps>()

const appRoutes = useAppRoutes()

const price = computed(() => formatUSD(props.product.discountedPrice))
</script>

<style lang="scss">
@import 'styles';
</style>
