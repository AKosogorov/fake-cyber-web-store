<template>
  <div class="container">
    <h1 class="mb-s">Profile</h1>

    <div class="column gap-xs">
      <div class="flex gap-s">
        <UserBadge :user="session.user" />

        <ButtonEdit @click="openModal(modals.username)" />
      </div>

      <div class="row gap-s">
        <VInfo label="Email" :txt="session.user.email" />

        <ButtonEdit @click="createCart" />
      </div>

      <div class="row gap-s">
        <VInfo label="Gender" :txt="session.user.gender" />

        <ButtonEdit @click="openModal(modals.gender)" />
      </div>
    </div>
  </div>

  <ChangeUsername
    v-if="isModal === modals.username"
    :username="session.user.username"
    @close="closeModal"
  />

  <ChangeGender
    v-if="isModal === modals.gender"
    :gender="session.user.gender"
    @close="closeModal"
  />
</template>

<script setup lang="ts">
import { UserBadge, UserApi } from '@/entities/User'
import { VInfo } from '@/shared/ui/text'
import { ButtonEdit } from '@/shared/ui/buttons'
import { ChangeUsername } from '@/features/User'
import { ChangeGender } from '@/features/User'

import { SessionModel } from '@/entities/Session'
import { CartModel, CartApi } from '@/entities/Cart'
import { useMultipleModal } from '@/shared/lib/use/modal/useMultipleModal'

const session = SessionModel.useSessionStore()

const { isModal, openModal, closeModal } = useMultipleModal()

const modals = {
  username: 'username',
  gender: 'gender'
}

const store = CartModel.useCartStore()

async function createCart() {
  const { data } = await CartApi.create({
    userId: session.user.id,
    products: store.cartProducts,
    total: store.total,
    discountedTotal: store.discountedTotal,
    totalProducts: store.totalProducts,
    totalQuantity: store.totalQuantity
  })

  await UserApi.patchCartId(session.user.id, {
    cartId: data.name
  })

  const response2 = await CartApi.getById(data.name)
  console.dir(response2.data)
}
</script>
