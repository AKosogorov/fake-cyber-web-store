<template>
  <div class="container">
    <ButtonSubmit
      :is-submitting="orderStore.isLoading"
      @click="orderStore.loadAllByUser(session.user.id)"
    />

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

          <VButton
            txt="1"
            @click="() => one(order.id)"
          />
          <VButton
            txt="2"
            @click="() => two(order.id)"
          />
          <VButton
            txt="3"
            @click="() => three(order.id)"
          />
        </template>
      </OrderCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { OrderModel, OrderCard, OrderProduct } from '@/entities/Order'
import { GetOrder, GetOrderModel } from '@/features/Order/get-order'
import { PayOrder } from '@/features/Order/pay-order'
import { ButtonSubmit, VButton } from '@/shared/ui/buttons'
import { useSessionStore } from '@/entities/Session/model'

const session = useSessionStore()
const orderStore = OrderModel.useOrderStore()

const { getOrder } = GetOrderModel.useGetOrder()

function one(id: string) {
  getOrder(id, OrderModel.EOrderStatus.delivery)
}

function two(id: string) {
  getOrder(id, OrderModel.EOrderStatus.ready)
}

function three(id: string) {
  getOrder(id, OrderModel.EOrderStatus.purchased)
}
</script>
