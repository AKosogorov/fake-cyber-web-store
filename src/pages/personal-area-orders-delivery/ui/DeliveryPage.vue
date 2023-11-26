<template>
  <div class="container">
    <h3 v-if="!orderStore.ordersFiltered.delivery.length">No orders</h3>

    <div
      v-else
      class="column gap-m"
    >
      <OrderCard
        v-for="order of orderStore.ordersFiltered.delivery"
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

        <template v-slot:actions>
          <PayOrder
            v-if="!order.isPrepaid"
            :order-id="order.id"
            :sum="order.discountedTotal"
          />

          <GetOrder
            v-if="order.isPrepaid && order.statusId === OrderModel.EOrderStatus.ready"
            :order-id="order.id"
          />
        </template>
      </OrderCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { OrderModel, OrderCard, OrderProduct } from '@/entities/Order'
import { GetOrder } from '@/features/Order/get-order'
import { PayOrder } from '@/features/Order/pay-order'

const orderStore = OrderModel.useOrderStore()
</script>
