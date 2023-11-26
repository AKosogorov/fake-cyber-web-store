<template>
  <div class="cart-page container">
    <h1 class="mb-s">Shopping basket</h1>

    <div class="cart-page__grid">
      <div
        v-if="store.cartProducts.length"
        class="cart-page__products column gap-s"
      >
        <CartProductCard
          v-for="item of store.cartProducts"
          :key="item.id"
          :cart-product="item"
        >
          <template v-slot:input-quantity>
            <ChangeQuantity
              :id="item.id"
              :quantity="item.quantity"
            />
          </template>

          <template v-slot:button-like>
            <AddToFavorites :id="item.id" />
          </template>

          <template v-slot:button-remove>
            <RemoveFromCart :id="item.id" />
          </template>
        </CartProductCard>
      </div>

      <h3 v-else>Your basket is empty</h3>

      <aside class="cart-page__aside">
        <CartTotal>
          <template
            v-if="store.cartProducts.length"
            v-slot:order
          >
            <div class="relative">
              <CreateOrderForm />

              <router-link
                v-if="!session.isAuth"
                class="abs-full"
                :to="appRoutes.getLogin()"
              />
            </div>
          </template>
        </CartTotal>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppRoutes } from '@/app/providers'
import { ChangeQuantity } from '@/features/Cart/ChangeQuantity'
import { RemoveFromCart } from '@/features/Cart/RemoveFromCart'
import { AddToFavorites } from '@/features/Product/AddToFavorites'
import { CreateOrderForm } from '@/features/Order/create-order'
import { CartTotal, CartProductCard, CartModel } from '@/entities/Cart'
import { SessionModel } from '@/entities/Session'

const store = CartModel.useCartStore()
const session = SessionModel.useSessionStore()
const appRoutes = useAppRoutes()
</script>

<style lang="scss">
@import 'styles';
</style>
