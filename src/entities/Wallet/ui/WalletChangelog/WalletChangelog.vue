<template>
  <span v-if="!store.changelog.length">No records</span>

  <div v-else class="column gap-s">{{ store.changelog }}</div>
</template>

<script setup lang="ts">
import { useWalletStore } from '../../model'

const store = useWalletStore()
</script>
