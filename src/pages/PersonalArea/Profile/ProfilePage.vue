<template>
  <div class="container">
    <h1 class="mb-s">Profile</h1>

    <div class="column gap-xs">
      <div class="row gap-s">
        <UserBadge :user="session.user" />

        <ButtonEdit />
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
</template>

<script setup lang="ts">
import { UserBadge } from '@/entities/User'
import { VInfo } from '@/shared/ui/text'
import { ButtonEdit } from '@/shared/ui/buttons'

import { useSessionStore } from '@/entities/Session/model'

const session = useSessionStore()
</script>
