<template>
  <div class="container">
    <ButtonSubmit
      :is-submitting="store.isLoading"
      @click="store.loadAllByUser(session.user.id)"
    />

    <h3 v-if="!orders.length">No orders</h3>

    <div
      v-else
      class="column gap-m"
    >
      <OrderCard
        v-for="order of orders"
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
import { computed } from 'vue'
import { OrderModel, OrderCard, OrderProduct } from '@/entities/Order'
import { GetOrder } from '@/features/Order/get-order'
import { PayOrder } from '@/features/Order/pay-order'
import { ButtonSubmit, VButton } from '@/shared/ui/buttons'
import { useSessionStore } from '@/entities/Session/model'

const session = useSessionStore()
const store = OrderModel.useOrderStore()

const orders = computed(() =>
  Object.entries(store.orders).map(item => {
    return {
      id: item[0],
      ...item[1]
    }
  })
)
</script>
