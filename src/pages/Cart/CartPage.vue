<template>
  <div class="cart-page container">
    <h1 class="mb-s">Shopping basket</h1>

    <div class="cart-page__grid">
      <div v-if="store.cartProducts.length" class="column gap-s">
        <CartProductCard
          v-for="item of store.cartProducts"
          :cart-product="item"
          :details-route-name="AppPages.catalog.product"
        >
          <template v-slot:button-like>
            <AddToFavorites :id="item.id" />
          </template>

          <template v-slot:button-remove>
            <ButtonRemove />
          </template>
        </CartProductCard>
      </div>

      <h3 v-else>Your basket is empty</h3>

      <aside class="cart-page__aside">
        <CartTotal />
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CartTotal, CartProductCard, CartModel } from '@/entities/Cart'
import { AddToFavorites } from '@/features/Product'
import { AppPages } from '@/pages'
import { ButtonRemove } from '@/shared/ui/buttons'

const store = CartModel.useCartStore()
</script>

<style lang="scss">
@import 'styles';
</style>
