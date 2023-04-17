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

        <ButtonEdit />
      </div>

      <div class="row gap-s">
        <VInfo label="Gender" :txt="session.user.gender" />

        <ButtonEdit />
      </div>
    </div>
  </div>

  <ChangeUsername
    v-if="isModal === modals.username"
    :username="session.user.username"
    @close="closeModal"
  />
</template>

<script setup lang="ts">
import { UserBadge } from '@/entities/User'
import { VInfo } from '@/shared/ui/text'
import { ButtonEdit } from '@/shared/ui/buttons'
import { ChangeUsername } from '@/features/User'

import { useSessionStore } from '@/entities/Session/model'
import { useMultipleModal } from '@/shared/lib/use/modal/useMultipleModal'

const session = useSessionStore()

const { isModal, openModal, closeModal } = useMultipleModal()

const modals = {
  username: 'username'
}
</script>
