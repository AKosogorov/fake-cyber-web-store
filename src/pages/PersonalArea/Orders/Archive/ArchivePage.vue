<template>
  <div class="container">
    <h3 v-if="!orderStore.ordersFiltered.purchased.length">No orders</h3>

    <div
      v-else
      class="column gap-m"
    >
      <OrderCard
        v-for="order of orderStore.ordersFiltered.purchased"
        :key="order.createdAt"
        :order="order"
      >
        <template v-slot:products="slotProps">
          <OrderProduct
            v-for="product of order.products"
            :key="product.id"
            :product="product"
            :color="slotProps.color"
          />
        </template>
      </OrderCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { OrderModel, OrderCard, OrderProduct } from '@/entities/Order'

const orderStore = OrderModel.useOrderStore()
</script>
