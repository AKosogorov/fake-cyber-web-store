<template>
  <div class="cart-product-card">
    <CyberCard />

    <div class="cart-product-card__icon-wrap">
      <IconDiscount class="cart-product-card__icon" />
    </div>

    <div class="cart-product-card__info">
      <router-link
        class="cart-product-card__link link"
        :to="{ name: detailsRouteName, params: { id: cartProduct.id } }"
      >
        <h4>{{ cartProduct.title }}</h4>
      </router-link>
    </div>

    <div class="cart-product-card__quantity">
      <slot name="input-quantity" />
    </div>

    <div class="cart-product-card__end column gap-xs">
      <VPrice
        :price="cartProduct.total"
        :price-discount="cartProduct.discountedPrice"
      />

      <div class="cart-product-card__actions row gap-xs">
        <slot name="button-like" />
        <slot name="button-remove" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VPrice from '@/shared/ui/VPrice'
import { CyberCard } from '@/shared/ui/cyber'
import type { ICartProduct } from '../../model'
import { IconDiscount } from '@/shared/ui/icons'

defineProps<{
  cartProduct: ICartProduct
  detailsRouteName: string
}>()
</script>

<style lang="scss">
@import 'styles';
</style>
