<template>
  <span v-if="!store.changelog.length">No records</span>

  <div v-else class="column gap-s">
    <WalletChangelogCard
      v-for="item of changelog"
      :key="item.date"
      :item="item"
    />
  </div>
</template>

<script setup lang="ts">
import { WalletChangelogCard } from '../WalletChangelogCard'

import { useWalletStore } from '../../model'
import { computed } from 'vue'

const store = useWalletStore()

const changelog = computed(() => store.changelog.slice().reverse())
</script>
