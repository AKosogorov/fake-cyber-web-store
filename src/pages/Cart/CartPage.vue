<template>
  <div class="cart-page container">
    <h1 class="mb-s">Cart page</h1>

    <aside class="cart-page__aside">
      <CartTotal />
    </aside>
  </div>
</template>

<script setup lang="ts">
import { CartTotal } from '@/entities/Cart'
</script>

<style lang="scss">
@import 'styles';
</style>
