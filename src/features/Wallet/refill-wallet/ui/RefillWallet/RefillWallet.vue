<template>
  <ButtonRefillWallet @click="openModal" />

  <RefillWalletModal
    v-if="isModal"
    @close="closeModal"
  />
</template>

<script setup lang="ts">
import { ButtonRefillWallet } from '../ButtonRefillWallet'
import { RefillWalletModal } from '../RefillWalletModal'

import { useSingleModal } from '@/shared/lib/use/modal/useSingleModal'

const { isModal, openModal, closeModal } = useSingleModal()
</script>

<style lang="scss">
@import 'styles';
</style>
