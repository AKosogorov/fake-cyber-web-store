<template>
  <div class="container">
    <h1 class="mb-s">Profile</h1>

    <div class="column gap-xs">
      <UserBadge :user="session.user" />

      <VInfo label="Email" :txt="session.user.email" />

      <VInfo label="Gender" :txt="session.user.gender" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserBadge } from '@/entities/User'
import { VInfo } from '@/shared/ui/text'

import { useSessionStore } from '@/entities/Session/model'

const session = useSessionStore()
</script>
