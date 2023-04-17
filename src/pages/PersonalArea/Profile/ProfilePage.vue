<template>
  <div class="container">
    <h1 class="mb-s">Profile</h1>

    <div class="column gap-xs">
      <div class="flex gap-s">
        <UserBadge :user="session.user" />

        <ButtonEdit />
      </div>

      <div class="row gap-s">
        <VInfo label="Email" :txt="session.user.email" />

        <ButtonEdit @click="toggle" />
      </div>

      <div class="row gap-s">
        <VInfo label="Gender" :txt="session.user.gender" />

        <ButtonEdit />
      </div>
    </div>
  </div>

  <BaseModal v-if="isActive" @close="toggle">
    <VInfo label="Email" :txt="session.user.email" />
  </BaseModal>
</template>

<script setup lang="ts">
import { UserBadge } from '@/entities/User'
import { VInfo } from '@/shared/ui/text'
import { ButtonEdit } from '@/shared/ui/buttons'
import { BaseModal } from '@/shared/ui/modal'

import { useSessionStore } from '@/entities/Session/model'
import useToggle from '@/shared/lib/use/useToggle'

const session = useSessionStore()

const { isActive, toggle } = useToggle()
</script>
